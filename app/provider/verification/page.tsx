"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, Clock, Eye, Search, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VerificationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data
  const verifications = [
    {
      id: "VER-1234",
      user: "John Doe",
      email: "john.doe@example.com",
      documentCount: 3,
      submittedDate: "2023-04-09",
      status: "pending",
    },
    {
      id: "VER-1233",
      user: "Jane Smith",
      email: "jane.smith@example.com",
      documentCount: 4,
      submittedDate: "2023-04-08",
      status: "approved",
    },
    {
      id: "VER-1232",
      user: "Mike Johnson",
      email: "mike.johnson@example.com",
      documentCount: 2,
      submittedDate: "2023-04-08",
      status: "pending",
    },
    {
      id: "VER-1231",
      user: "Sarah Williams",
      email: "sarah.williams@example.com",
      documentCount: 3,
      submittedDate: "2023-04-07",
      status: "rejected",
    },
    {
      id: "VER-1230",
      user: "Robert Brown",
      email: "robert.brown@example.com",
      documentCount: 5,
      submittedDate: "2023-04-07",
      status: "approved",
    },
    {
      id: "VER-1229",
      user: "Emily Davis",
      email: "emily.davis@example.com",
      documentCount: 3,
      submittedDate: "2023-04-06",
      status: "pending",
    },
    {
      id: "VER-1228",
      user: "David Wilson",
      email: "david.wilson@example.com",
      documentCount: 4,
      submittedDate: "2023-04-05",
      status: "rejected",
    },
    {
      id: "VER-1227",
      user: "Lisa Martinez",
      email: "lisa.martinez@example.com",
      documentCount: 2,
      submittedDate: "2023-04-05",
      status: "approved",
    },
  ]

  // Filter verifications based on search query and status
  const filteredVerifications = verifications.filter((verification) => {
    const matchesSearch =
      verification.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verification.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verification.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || verification.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">KYC Verification</h1>
          <p className="text-muted-foreground">Manage and verify user documents</p>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="all" onClick={() => setStatusFilter("all")}>
              All
            </TabsTrigger>
            <TabsTrigger value="pending" onClick={() => setStatusFilter("pending")}>
              Pending
            </TabsTrigger>
            <TabsTrigger value="completed" onClick={() => setStatusFilter("approved")}>
              Approved
            </TabsTrigger>
          </TabsList>

          <div className="flex w-full md:w-auto gap-2">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by ID, name or email..."
                className="pl-8 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="space-y-6">
          <Card className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">ID</th>
                      <th className="text-left py-3 px-4">User</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Documents</th>
                      <th className="text-left py-3 px-4">Submitted Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVerifications.map((verification) => (
                      <tr key={verification.id} className="border-b">
                        <td className="py-3 px-4 font-medium">{verification.id}</td>
                        <td className="py-3 px-4">{verification.user}</td>
                        <td className="py-3 px-4">{verification.email}</td>
                        <td className="py-3 px-4">{verification.documentCount} documents</td>
                        <td className="py-3 px-4">{verification.submittedDate}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            {verification.status === "approved" ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <CheckCircle2 className="mr-1 h-3 w-3" />
                                Approved
                              </span>
                            ) : verification.status === "rejected" ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                <XCircle className="mr-1 h-3 w-3" />
                                Rejected
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                <Clock className="mr-1 h-3 w-3" />
                                Pending
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/provider/verification/${verification.id}`}>
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Link>
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
        </TabsContent>

        <TabsContent value="pending" className="space-y-6">
          {/* Same content as "all" tab but filtered for pending */}
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          {/* Same content as "all" tab but filtered for approved */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
