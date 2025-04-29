import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest, {params}: {params: {id: string}}){
    const {id} = params;

    if(!id) return NextResponse.json({msg: "Require Request Id"});

    try{
        const consumerDetails = await prisma.consumerProviderRequests.findUnique({
            where: {id: id},
            select :{
                id: true,
                createdAt: true,
                transactionHash: true,
                consumer: {
                    select:{
                        fullName: true,
                    }
                }
            }
        })
        
        return NextResponse.json({consumerDetails, msg: "Got consumer details"});
    }
    catch(error: any){
        console.log(error);
        return NextResponse.json({consumerDetails: null, msg: error.message});
    }
}
