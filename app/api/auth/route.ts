import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import generateToken from "@/lib/generateToken";
import{ethers} from "ethers"

function getNonce(walletId: String, role: String){
    const date = new Date().toString();
    const nonce = `Sign this message date: ${date}, ${"\n\n"} Role: ${role}, ${"\n\n"} walletId: ${walletId}`;
    return nonce;
}

export async function GET(req: NextRequest){
    const {searchParams} = new URL(req.url);
    const walletId =  searchParams.get("address");
    const role = searchParams.get("role");

    if(!walletId) return NextResponse.json({nonce: "", msg: "Wallet Address Required"});
    if(!role) return NextResponse.json({nonce: "", msg: "Role is required"});

    const nonce = getNonce(walletId, role);

    try{
        // console.log("Nonce: " + nonce);
        let user;
        if(role == "consumer"){
            user = await prisma.consumer.upsert({
                where: {publicKey: walletId},
                create: {publicKey: walletId, nonce},
                update: {nonce},
            });
        }
        if(role == "provider"){
            console.log("Role (provider): " + role);
            user = await prisma.gasAdmin.update({
                where: {publicKey: walletId},
                data: {nonce},
            });
        }
        else if(role == "admin"){
            console.log("Role (admin): " + role);
            user = await prisma.admin.upsert({
                where: {publicKey: walletId},
                create: {publicKey: walletId, nonce},
                update: {nonce},
            });
        }

        return NextResponse.json({nonce: nonce, msg: "Nonce created"});
    }
    catch(error: any){
        console.error(error);
        return NextResponse.json({nonce : "", msg : error.message});
    }

}


function verifySignature(signature: any, userNonce: any, address: String): boolean{
    const userAddress = ethers.verifyMessage(userNonce, signature);
    if(userAddress.toLowerCase() == address.toLowerCase()) return true;
    return false;
}


export async function POST(req: NextRequest){
    const {signature, walletId, role} = await req.json();
    console.log("Signature: "+ signature);
    try{
        let user;
        if(role == "consumer"){
            user = await prisma.consumer.findUnique({
                where: {publicKey: walletId},
            });
        }
        else if(role == "provider"){
            user = await prisma.gasAdmin.findUnique({
                where: {publicKey: walletId},
            });
        }
        else if(role == "admin"){
            user = await prisma.admin.findUnique({
                where: {publicKey: walletId},
            });
        }

        console.log("User: " + user);

        if(!user)   return NextResponse.json({msg: "User not found", isVerified: false});
        if(user.nonce == null)  return NextResponse.json({msg: "Nonce not found", isVerified: false});

        const isVerified = verifySignature(signature, user.nonce, walletId);

        if(isVerified){
            const jwtToken = generateToken(walletId, role);
            console.log(jwtToken);
            return NextResponse.json({isVerified: true, msg: "Verified", token: jwtToken});
        }
        else{
            return NextResponse.json({isVerified: false, msg: "Verification failed"});
        }
    }
    catch(error: any){
        console.error(error);
        return NextResponse.json({isVerified: false, msg : error.message});
    }
}