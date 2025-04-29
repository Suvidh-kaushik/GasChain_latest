// We need to verify them first once the 
import prisma from "@/lib/db";
import generateToken from "@/lib/generateToken";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
    const {walletId, name, role} = await req.json();

    if(!walletId) return NextResponse.json({isCreated : false, msg: "Wallet address Required"})
    if(!name) return NextResponse.json({isCreated : false, msg: "Full Name Required"})
    if(!role) return NextResponse.json({isCreated : false, msg: "Role Required"})

    if(role == "consumer"){
        const consumer = await prisma.consumer.create({
            data: {
                publicKey: walletId,
                fullName: name,
            }
        })
        if(consumer){
            return NextResponse.json({isCreated : true, msg: "Consumer Created Successfully"});
        }
        else return NextResponse.json({isCreated : false, msg: "Failed to Create Consumer"})
    }
    else if(role == "provider"){
        const gasProvider = await prisma.gasProvider.findUnique({
            where: { companyName : name, publicKey: walletId}
        })
        if(gasProvider?.status == "PENDING") return NextResponse.json({isCreated: false, msg: "Registration request is already submitted, still in pending state"});
        if(gasProvider?.status == "ACCEPTED") return NextResponse.json({isCreated: false, msg: "Already registered, Please Login"})
        
        const provider = await prisma.gasProvider.create({
            data: {
                companyName: name,
                publicKey: walletId,
            }
        })
        const providerRequest = await prisma.providerRequest.create({
            data : {
                providerPublicKey: walletId,
                adminPublicKey: "0x00fd25E833A5b001AE3a91505c203aDc95b0AA6a"
            }
        })
        if(provider && providerRequest) return NextResponse.json({isCreated: true, msg: "Request generated successfully"});
        else return NextResponse.json({isCreated: false, msg: "Failed to create request"});
    }
}