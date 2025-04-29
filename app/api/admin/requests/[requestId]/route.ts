import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { ethers } from "ethers";
import KYCGasConsumerABI from "@/abi/KycContract.json";

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS||"";
const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/lD-zkHvWdHuNLtqW4LE82y15bBK3r3tH");
const PRIVATE_KEY =process.env.PRIVATE_KEY||"";
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, KYCGasConsumerABI, wallet);

export async function PATCH(req: NextRequest, context: {params: {requestId: string}}) {
    const {requestId} =  context.params;
    console.log(context.params);
    const {status} = await req.json();

    if(!requestId) return NextResponse.json({msg: "Request ID  required"})

    try{
        const provider = await prisma.providerRequest.update({
            where: {id: requestId},
            data: {status: status ? "ACCEPTED" : "REJECTED"},
            select: {
                providerPublicKey: true
            }
        })

        if(status){
            await prisma.gasProvider.update({
                where: {publicKey: provider.providerPublicKey},
                data: {status: "ACCEPTED"},
            })
         
          try{
            const tx=await contract.addProvider(provider.providerPublicKey);
            await tx.wait();
          }catch(err){
            console.log(err);
            return NextResponse.json({msg:"Error in updating gasProvider in contract"});
          }

        }
        else{
            await prisma.gasProvider.delete({
                where: {publicKey: provider.providerPublicKey},
            })
        }
        return NextResponse.json({msg: "Request updated successfully"})
    }
    catch(error: any){
        console.error(error)
        return NextResponse.json({isUpdated: false, msg: error.message});
    }
}