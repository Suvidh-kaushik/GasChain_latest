import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {

    try{
        const pendingRequests = await prisma.providerRequest.findMany({
            where: {status: "PENDING"},
            select: {
                id: true,
                providerPublicKey: true,
                createdAt: true,
                provider: {
                    select: {
                        companyName: true
                    }
                }        
            }
        });

        return NextResponse.json({pendingRequests: pendingRequests});
    }
    catch(error: any){
        console.log(error.message);
        return NextResponse.json({error: error.message});
    }
}