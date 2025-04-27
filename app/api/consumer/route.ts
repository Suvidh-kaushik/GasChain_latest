import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";


// export async function GET(req: NextRequest){
//     const {searchParams} = new URL(req.url);
//     const walletId = searchParams.get("walletId");

//     if(!walletId) return NextResponse.json({consumer: null, msg: "Required Wallet Address"});

//     try{
//         const consumer = await prisma.consumer.findUnique({
//             where: {publicKey: walletId}
//         })
//         if(!consumer) return NextResponse.json({consumer: null, msg: "User not found"});
//         return NextResponse.json({consumer, msg: "Consumer details"});
//     }
//     catch(error: any){
//         console.log(error.message);
//         return NextResponse.json({msg: "Something went wrong"})
//     }
// }

export function GET(req: NextRequest){
    const {searchParams} = new URL(req.url);
    const requestId = searchParams.get("requestId");

    if(!requestId) return NextResponse.json({msg: "Require Request Id"});

    try{
        const consumerDetails = prisma.consumerProviderRequests.findUnique({
            where: {id: requestId},
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