import { NextRequest, NextResponse } from "next/server";
import { pinata } from "@/lib/pinata";

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

    const aadharRespones = await uploadFileToPinata(aadhar);
    const electricityRespones = await uploadFileToPinata(electricity);


    return NextResponse.json({aadharRespones, electricityRespones});
}