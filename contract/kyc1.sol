// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract KYCGasConsumer {
    address public owner;

    enum KYCStatus {PENDING, APPROVED, REJECTED}

    struct User {
        string aadhar_ipfsHash;
        string electricity_ipfsHash;
        address currentProvider;
        bool kycSubmitted;
        KYCStatus Status;
        uint submittedAt;
    }

    mapping(address => User) public users;
    mapping(address => bool) public isGasProvider;
    mapping(address => address[]) public providerApprovedUsers;
    mapping(address => address[]) public providerPendingUsers;
    mapping(address => address[]) public providerRejectedUsers;
    mapping(address => mapping(address => bool)) public hasApplied;

    event KYCSubmitted(address indexed user, string aadharHash, string electricityHash, address indexed provider);
    event AppliedToProvider(address indexed user, address indexed provider);
    event Approved(address indexed user, address indexed provider, uint blockNumber, uint timestamp);
    event Rejected(address indexed user, address indexed provider);
    event ProviderChanged(address indexed user, address indexed oldProvider, address indexed newProvider);
    event ProviderChangeRequested(address indexed user, address indexed newProvider);
    event ProviderAdded(address indexed provider);
    event ProviderRemoved(address indexed provider);
    event KYCViewed(address indexed requester, address indexed user);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

    modifier onlyProvider() {
        require(isGasProvider[msg.sender], "Not a registered gas provider");
        _;
    }

    constructor() {
        owner = msg.sender;
        isGasProvider[msg.sender] = true;
        emit ProviderAdded(msg.sender);
    }

    function addProvider(address _provider) external onlyOwner {
        require(_provider != address(0), "Invalid provider address");
        isGasProvider[_provider] = true;
        emit ProviderAdded(_provider);
    }

    function removeProvider(address _provider) external onlyOwner {
        require(isGasProvider[_provider], "Provider not registered");
        isGasProvider[_provider] = false;
        emit ProviderRemoved(_provider);
    }

    // ✅ User selects provider directly during KYC submission
    function submitKYC(
        string calldata a_ipfsHash,
        string calldata e_ipfsHash,
        address selectedProvider
    ) external {
        require(bytes(a_ipfsHash).length > 0 && bytes(e_ipfsHash).length > 0, "IPFS hash cannot be empty");
        require(!users[msg.sender].kycSubmitted, "KYC already submitted");
        require(isGasProvider[selectedProvider], "Invalid provider");

        users[msg.sender] = User({
            aadhar_ipfsHash: a_ipfsHash,
            electricity_ipfsHash: e_ipfsHash,
            currentProvider: selectedProvider,
            kycSubmitted: true,
            Status: KYCStatus.PENDING,
            submittedAt: block.timestamp
        });

        providerPendingUsers[selectedProvider].push(msg.sender);
        hasApplied[selectedProvider][msg.sender] = true;

        emit KYCSubmitted(msg.sender, a_ipfsHash, e_ipfsHash, selectedProvider);
    }

    function approveUser(address _user) external onlyProvider {
        require(hasApplied[msg.sender][_user], "User did not apply to this provider");

        _removeFromArray(providerPendingUsers[msg.sender], _user);
        hasApplied[msg.sender][_user] = false;

        address oldProvider = users[_user].currentProvider;
        if (oldProvider != address(0) && oldProvider != msg.sender) {
            _removeFromArray(providerApprovedUsers[oldProvider], _user);
            emit ProviderChanged(_user, oldProvider, msg.sender);
        }

        providerApprovedUsers[msg.sender].push(_user);
        users[_user].currentProvider = msg.sender;
        users[_user].Status = KYCStatus.APPROVED;

        // ✅ Include block info in approval event
        emit Approved(_user, msg.sender, block.number, block.timestamp);
    }

    function rejectUser(address _user) external onlyProvider {
        require(hasApplied[msg.sender][_user], "User did not apply to this provider");

        _removeFromArray(providerPendingUsers[msg.sender], _user);
        hasApplied[msg.sender][_user] = false;
        providerRejectedUsers[msg.sender].push(_user);

        users[_user].Status = KYCStatus.REJECTED;

        emit Rejected(_user, msg.sender);
    }

    function requestChangeProvider(address _newProvider) external {
        require(users[msg.sender].kycSubmitted, "KYC not submitted");
        require(isGasProvider[_newProvider], "Invalid provider");
        require(_newProvider != users[msg.sender].currentProvider, "Already with this provider");
        require(!hasApplied[_newProvider][msg.sender], "Already requested");

        providerPendingUsers[_newProvider].push(msg.sender);
        hasApplied[_newProvider][msg.sender] = true;

        emit AppliedToProvider(msg.sender, _newProvider);
    }


    function getKYC(address _user) external view returns (string memory, string memory, address, KYCStatus) {
        User memory u = users[_user];
        return (u.aadhar_ipfsHash, u.electricity_ipfsHash, u.currentProvider, u.Status);
    }

    function viewKYC(address _user) external returns (string memory, string memory, address) {
        emit KYCViewed(msg.sender, _user);
        User memory u = users[_user];
        return (u.aadhar_ipfsHash, u.electricity_ipfsHash, u.currentProvider);
    }

    function getPendingUsers(address _provider) external view returns (address[] memory) {
        return providerPendingUsers[_provider];
    }

    function getApprovedUsers(address _provider) external view returns (address[] memory) {
        return providerApprovedUsers[_provider];
    }

    function getRejectedUsers(address _provider) external view returns (address[] memory) {
        return providerRejectedUsers[_provider];
    }

    function _removeFromArray(address[] storage array, address user) internal returns (bool) {
        for (uint i = 0; i < array.length; i++) {
            if (array[i] == user) {
                array[i] = array[array.length - 1];
                array.pop();
                return true;
            }
        }
        return false;
    }
}
