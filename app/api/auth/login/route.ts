import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { isCancel } from "axios";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const walletId = searchParams.get('address');
    const role = searchParams.get("role");

    if(!walletId) return NextResponse.json({isAccepted: false, msg: "Wallet address required"})

    try{

        if(role == "provider"){
            const provider = await prisma.gasProvider.findUnique({
                where: { publicKey: walletId}
            })
            if(!provider) return NextResponse.json({isAccepted: false, msg: "You are not registered as a gas provider for any company."});
            if(provider.status == "PENDING") return NextResponse.json({isAccepted: false, msg: "Your registration request is currently under review. Please wait for admin approval."})
            return NextResponse.json({isAccepted: true});
        }
        else if(role == "consumer"){
            const consumer = await prisma.consumer.findUnique({
                where: { publicKey: walletId}
            })
            if(!consumer) return NextResponse.json({isAccepted: false, msg: "Please Register First"})
            return NextResponse.json({isAccepted: true});
        }
        else if(role == "admin"){
            const admin = await prisma.admin.findUnique({
                where: {publicKey: walletId}
            })
            console.log("Admin: " + admin);
            if(!admin) return NextResponse.json({isAccepted: false, msg: "You are not an admin"});
            return NextResponse.json({isAccepted: true, msg: "Verified as admin"});
        }

    }
    catch(error: any){
        console.error("Error verifying gas provider status:", error);
        return NextResponse.json({isAccepted:  false, msg: "Something went wrong"})
    }
}