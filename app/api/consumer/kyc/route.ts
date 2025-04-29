import { NextRequest, NextResponse } from "next/server";
import { pinata } from "@/lib/pinata";
import prisma from "@/lib/db";
import { request } from "http";

async function uploadFileToPinata(file: File){
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);
    try{
        const { cid } = await pinata.upload.public.file(file)
        const url = await pinata.gateways.public.convert(cid);
        console.log({cid, url});
        return {cid, url};
    }
    catch(error: any){
        console.error("Error uploading files to pinata");
        console.error(error.message);
    }

    return {cid: null, url: null};
}

export async function POST(req: NextRequest){
    const data = await req.formData();
    const fullName = data.get("fullName");
    const email = data.get("email");
    const aadhar: File | null = data.get("aadharCard") as unknown as File;
    const electricity: File | null  = data.get("electricityBill") as unknown as File;
    const dateOfBirth = data.get("dateOfBirth");
    const phoneNumber = data.get("phoneNumber");
    const consumerPublicKey = data.get("consumerPublicKey");
    const providerPublicKey = data.get("gasProviderPublicKey");

    if(!consumerPublicKey) return NextResponse.json({isSubmitted: false, msg: "Require consumer walletId"})
    if(!providerPublicKey) return NextResponse.json({isSubmitted: false, msg: "Require gas provider walletId"});

    const aadharRespones = await uploadFileToPinata(aadhar);
    const electricityRespones = await uploadFileToPinata(electricity);

    console.log(aadharRespones);
    console.log(electricityRespones);
    // Call the contract
    //It returns

    try{
        const requestRespone = await prisma.consumerProviderRequests.create({
            data: {
                consumerPublicKey: consumerPublicKey.toString(),
                providerPublicKey: providerPublicKey.toString(),
                status: "PENDING",
                transactionHash: "#",
            },
            select: {
                id: true,
            }
        })

        if(requestRespone) return NextResponse.json({requestRespone, isSubmitted: true, msg: "KYC submitted",aadharCid:aadharRespones.cid,electricityCid:electricityRespones.cid});
        else return NextResponse.json({isSubmitted: false, msg: "Failed to submit KYC"});
    }
    catch(error: any){
        console.error(error.message);
        return NextResponse.json({isSubmitted: false, msg: "Something went wrong, Try again later."})
    }
}


export async function PATCH(req:NextRequest){
    const {dbId,transactionHash}=await req.json();

    try{
        const response=await prisma.consumerProviderRequests.update({
            where:{
                id:dbId
            },
            data:{
                transactionHash:transactionHash
            }
        })
        if(response) return NextResponse.json({isSubmitted: true, msg: "Updated"});
        else return NextResponse.json({isSubmitted: false, msg: "Failed to upodate"});
    }
    catch(error:any){
        console.error(error.message);
        return NextResponse.json({isSubmitted: false, msg: "Something went wrong, Try again later."})
    }
}