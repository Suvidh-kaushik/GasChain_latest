import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";


export async function GET(req: NextRequest){
    const {searchParams} = new URL(req.url);
    const walletId = searchParams.get("walletId");

    if(!walletId) return NextResponse.json({consumer: null, msg: "Required Wallet Address"});

    try{
        const consumer = await prisma.consumer.findUnique({
            where: {publicKey: walletId}
        })
        if(!consumer) return NextResponse.json({consumer: null, msg: "User not found"});
        return NextResponse.json({consumer, msg: "Consumer details"});
    }
    catch(error: any){
        console.log(error.message);
        return NextResponse.json({msg: "Something went wrong"})
    }
}

