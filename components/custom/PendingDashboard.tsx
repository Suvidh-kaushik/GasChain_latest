"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import axios from "axios";
import { Button } from "../ui/button";
import Link from "next/link";


import formatDate from "@/utils/DateFormat";




export default function PendingDashboard(){

    const [pendingVerifications, setPendingVerification] = useState<any>([]);


    useEffect(() =>{
        async function getPendingVerification(){
          const walletId = localStorage.getItem("walletId");
          console.log("Gas Provider WalletId: " + walletId);
          try{
            const response = await axios.get(`http://localhost:3000/api/provider/kyc?walletId=${walletId}`);
            console.log(response.data.allRequests);

            if(response.data.allRequests.length > 0) setPendingVerification(response.data.allRequests);
            else alert(response.data.msg);
          }
          catch(error){
            console.log(error);
          }
        }

        getPendingVerification();
    }, [])

    return (
        <Card className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <CardHeader>
              <CardTitle>Pending Verifications</CardTitle>
              <CardDescription>KYC documents awaiting verification</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">ID</th>
                      <th className="text-left py-3 px-2">Consumer</th>
                      {/* <th className="text-left py-3 px-2">Documents</th> */}
                      <th className="text-left py-3 px-2">Submitted Date</th>
                      <th className="text-left py-3 px-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingVerifications.map((verification) => (
                      <tr key={verification.id} className="border-b">
                        <td className="py-3 px-2 font-medium">{verification.id.slice(0, 4) + "..." + verification.id.slice(-4)}</td>
                        <td className="py-3 px-2">{verification.consumerPublicKey.slice(0,15) + "..." + verification.consumerPublicKey.slice(-4)}</td>
                        {/* <td className="py-3 px-2">{verification.documentCount || 2} documents</td> */}
                        <td className="py-3 px-2">{formatDate(verification.createdAt)}</td>
                        <td className="py-3 px-2">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/provider/verification/${verification.id}`}>View</Link>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
    )
}