import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest){
    const {searchParams} = new URL(req.url);
    const walletId = searchParams.get("walletId");
    console.log("Server WalletId: " + walletId);
    if(!walletId) return NextResponse.json({allRequests: [], msg: "Required Gas Provider Wallet Address"});
    try{
        const requests = await prisma.consumerProviderRequests.findMany({
            where: {providerPublicKey: walletId, status: "PENDING"},
            select: { 
                id: true,
                transactionHash: true,
                createdAt: true,
                consumerPublicKey: true,
            }
        });
        console.log(requests);

        if(requests && requests.length > 0) return NextResponse.json({allRequests: requests});
        else return NextResponse.json({allRequests: requests, msg: "No pending requests"});
    }
    catch(error: any){
        console.log(error.message);
        return NextResponse.json({allRequests: [], msg: "Error fetching requests"});
    }
}