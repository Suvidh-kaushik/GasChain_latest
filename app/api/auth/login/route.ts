import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const walletId = searchParams.get('address');

    if(!walletId) return NextResponse.json({isAccepted: false, msg: "Wallet address required"})

    try{
        const provider = await prisma.gasAdmin.findUnique({
            where: { publicKey: walletId}
        })
        if(!provider) return NextResponse.json({isAccepted: false, msg: "You are not registered as a gas provider for any company."});
        if(provider.status == "PENDING") return NextResponse.json({isAccepted: false, msg: "Your registration request is currently under review. Please wait for admin approval."})
        return NextResponse.json({isAccepted: true});

    }
    catch(error: any){
        console.error("Error verifying gas provider status:", error);
        return NextResponse.json({isAccepted:  false, msg: "Something went wrong"})
    }
}