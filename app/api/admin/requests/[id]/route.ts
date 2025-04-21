import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function PATCH(req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const requestId =  searchParams.get("requestId");

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
            await prisma.gasAdmin.update({
                where: {publicKey: provider.providerPublicKey},
                data: {status: "ACCEPTED"},
            })
        }
        else{
            await prisma.gasAdmin.delete({
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