"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios"
import { Clock, Users, XCircle } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
    {
      name: "Total Gas Providers",
      value: "1,234",
      change: "+12%",
      icon: Users,
    },
    {
      name: "Pending Requests",
      value: "42",
      change: "-5%",
      icon: Clock,
    },
    {
      name: "Rejected Requests",
      value: "123",
      change: "+2%",
      icon: XCircle,
    },
  ]

  async function handleApprove(requestId: string) {
    try{
      const response = await axios.patch(`http://localhost:3000/api/admin/requests/${requestId}`,{
        status: true
      })
      console.log(response.data)
      alert(response.data.msg)
    }
    catch(error: any){
      console.error(error)
      alert("Something went wrong");
    }
  }

  async function handleReject(requestId: string) {
      try{
        const response = await axios.patch(`http://localhost:3000/api/admin/requests/${requestId}`,{
          status: false
        });
        console.log(response.data)
        alert(response.data.msg);
      }
      catch(error: any){
        console.error(error)
        alert("Something went wrong");
      }
  }

  type pendingRequestsType = {
    id: string,
    providerPublicKey: string,
    createdAt: string,
    provider: {
      companyName: string,
    }
  }

function formatDate(data: string): string{
  const date = new Date(data);
  
  const formatted = date.toLocaleDateString();

  return formatted;
}

export default function AdminDashBoard(){
  const [pendingRequests, setPendingRequest] = useState<pendingRequestsType[] | []>([]);

  useEffect(() =>{
    async function getPendingRequest(){
      const response = await axios.get("http://localhost:3000/api/admin/requests");
      setPendingRequest(response.data.pendingRequests);
      console.log(response.data);
    }

    getPendingRequest();
  },[])

    return (
        <div >
            <div>
                <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-muted-foreground">Monitor and manage Gas Providers requests</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
                    {stats.map((stat) => (
                      <Card key={stat.name} className="relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
                          <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <p className={`text-xs ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                            {stat.change} from last month
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                </div>

                <Card className="relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    <CardHeader>
                      <CardTitle>Pending Requets</CardTitle>
                      <CardDescription>Gas Provider awaiting requests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-2">ID</th>
                              <th className="text-left py-3 px-2">Company Name</th>
                              <th className="text-left py-3 px-2">WalletId</th>
                              <th className="text-left py-3 px-2">Submitted Date</th>
                              <th className="text-center py-3 px-2">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {pendingRequests.map((request) => (
                              <tr key={request.id} className="border-b">
                                <td className="py-3 px-2 font-medium">{request.id.slice(0, 4) + "..." + request.id.slice(-4)}</td>
                                <td className="py-3 px-2">{request.provider.companyName}</td>
                                <td className="py-3 px-2">{request.providerPublicKey.slice(0,4) + "..." + request.providerPublicKey.slice(-4)}</td>
                                <td className="py-3 px-2">{formatDate(request.createdAt)}</td>
                                <td className="py-3 px-2">
                                  <div className="flex space-x-2 justify-center">
                                    <Button onClick={() => handleApprove(request.id)} size="sm" variant="outline" className="bg-green-600" >
                                      Approve
                                    </Button>
                                    <Button onClick={() => handleReject(request.id)} size="sm" variant="outline" className="bg-red-600">
                                      Reject
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
            </div>
        </div>
    )
}