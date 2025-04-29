"use client"
import { useEffect, useState } from "react"
import prisma from "@/lib/db"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import axios from "axios"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export default function KYCSubmission(){
    return (
        <div className="container mx-auto px-4 md:px-6ner">
            <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">Submit Your KYC</h1>
                </div>
            </div>

            <div>
                <KYCForm/>
            </div>
        </div>
    )
}


function KYCForm() {

    const [name, setName] = useState<string>("")
    const [check, setCheck] = useState<null | "true" | "false">("false")
    const [aadharCard, setAadharCard] = useState<File | null>(null)
    const [electricityBill, setElectricityBill] = useState<File | null>(null);
    const [gasProviders, setGasProviders] = useState([]);
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      dateOfBirth: null,
      phoneNumber: "",
      gasProvider: "",
    })
    
    useEffect(() =>{
      async function getAllProviders(){
        console.log("Fetching....");
        try{
          const response = await axios.get('http://localhost:3000/api/provider');
          console.log(response.data);

          if(response.data.providers.length > 0) setGasProviders(response.data.providers);
          else alert(response.data.msg);
        }
        catch(error: any){
          console.log(error);
        }
      }

      async function getUserDeatils(){
        const walletId = localStorage.getItem("walletId");
          try{
            const response = await axios.get(`http://localhost:3000/api/consumer?walletId=${walletId}`)
            
            if(response.data.consumer){
              setName(response.data.consumer.fullName);
            }
            else alert(response.data.msg);
          }
          catch(error: any){
            console.log(error.message);
          }
      }

      getAllProviders();
      getUserDeatils();
    },[])

    async function handleSubmit(event: React.FormEvent){
      event.preventDefault()
      alert("KYC submitted successfully!")

      try{

        const form = new FormData();
        form.append("fullName", formData.fullName);
        form.append("email", formData.email);
        form.append("dateOfBirth", formData.dateOfBirth);
        form.append("phoneNumber", formData.phoneNumber);
        form.append("consumerPublicKey", localStorage.getItem("walletId"));
        form.append("gasProviderPublicKey", formData.gasProvider);
        console.log(formData);
        if(aadharCard) form.append("aadharCard", aadharCard);
        if(electricityBill) form.append("electricityBill", electricityBill);


        console.log("Form: " + form);
        const response = await axios.post("http://localhost:3000/api/consumer/kyc", form,{
            headers: {
                "Content-Type": "multipart/form-data",
            }    
        })
        console.log(response.data)
      }
      catch(error){
        console.log(error)
      }
    }
  
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
  

  return (
    <Card>
      <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto py-10">
              <div className="space-y-2">
                  <Label>Enter Your Name</Label>
                  <Input required onChange={handleChange} name="fullName" value={name} disabled placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                  <Label>Enter Your Email</Label>
                  <Input required onChange={handleChange} name="email" value={formData.email} type="email" placeholder="Email" />
              </div>
              <div className="space-y-2">
                  <Label>Enter Your DOB</Label>
                  <Input required onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value})} name="dateOfBirth" value={formData.dateOfBirth || ""}  type="date"/>
              </div>
              <div className="space-y-2">
                  <Label>Enter Your Phone Number</Label>
                  <Input required onChange={handleChange} type="tel" name="phoneNumber" value={formData.phoneNumber} placeholder="Phone Number"/>
              </div>
              <div className="space-y-2">
                  <Label>Upload Aadhar Card PDf</Label>
                  <Input required onChange={(e) => setAadharCard(e.target.files?.[0] || null)} type="file" name="aadharCard" accept="application/pdf"/>
              </div>
              <div className="space-y-2">
                  <Label>Upload Electricity Bill PDf</Label>
                  <Input required onChange={(e) => setElectricityBill(e.target.files?.[0] || null)} type="file" name="electricityBill" accept="application/pdf"/>
              </div>
              <div className="space-y-2">
                  <Select onValueChange={(e: string) =>{setFormData({...formData, "gasProvider": e})}}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Gas Provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                      {
                        gasProviders.map((provider, idx) =>{
                          return <SelectItem key={idx} value={provider.publicKey} >{provider.companyName}</SelectItem>
                        })
                      }
                        {/* <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem> */}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
              </div>
              <div className="flex items-center space-x-2">
                <p>Checked: {check}</p>
                  <Checkbox required onClick={(e) => setCheck(e.currentTarget.ariaChecked?.toString())} />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Please check files before submitting
                  </label>
              </div>
              <div>
                  
              <Button disabled={check=="true" ? true : false} >Submit KYC</Button>

              </div>
          </form>
      </CardContent>
    </Card>
  )
}
