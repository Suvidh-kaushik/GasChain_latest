import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { Provider } from "@radix-ui/react-toast";

export async function GET(req: NextRequest){
    
    try{
        const providers = await prisma.gasProvider.findMany({
            where: {status: "ACCEPTED"},
            select: {
                companyName: true,
                publicKey: true,
            },
        })

        if(providers.length > 0) return NextResponse.json({providers, "msg": "Fetched providers list"});
        else return NextResponse.json({providers: [], "msg": "No providers found"});
    }
    catch(error: any){
        console.error(error);
        return NextResponse.json({providers: [], msg: "Error in fetching gas provider"});
    }
}