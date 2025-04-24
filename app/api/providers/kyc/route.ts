import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){

    try{
        const requests = await prisma?.consumerProviderRequests.findMany({
            select: {
                
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