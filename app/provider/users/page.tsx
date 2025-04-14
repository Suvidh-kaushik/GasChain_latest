"use client"

import { useState } from "react"
import { CheckCircle2, Clock, MoreHorizontal, Search, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data
  const users = [
    {
      id: "USR-1234",
      name: "John Doe",
      email: "john.doe@example.com",
      walletAddress: "0x1234...5678",
      kycStatus: "approved",
      registeredDate: "2023-03-15",
    },
    {
      id: "USR-1233",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      walletAddress: "0x2345...6789",
      kycStatus: "pending",
      registeredDate: "2023-03-18",
    },
    {
      id: "USR-1232",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      walletAddress: "0x3456...7890",
      kycStatus: "rejected",
      registeredDate: "2023-03-20",
    },
    {
      id: "USR-1231",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      walletAddress: "0x4567...8901",
      kycStatus: "approved",
      registeredDate: "2023-03-22",
    },
    {
      id: "USR-1230",
      name: "Robert Brown",
      email: "robert.brown@example.com",
      walletAddress: "0x5678...9012",
      kycStatus: "approved",
      registeredDate: "2023-03-25",
    },
    {
      id: "USR-1229",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      walletAddress: "0x6789...0123",
      kycStatus: "pending",
      registeredDate: "2023-03-28",
    },
    {
      id: "USR-1228",
      name: "David Wilson",
      email: "david.wilson@example.com",
      walletAddress: "0x7890...1234",
      kycStatus: "rejected",
      registeredDate: "2023-04-01",
    },
    {
      id: "USR-1227",
      name: "Lisa Martinez",
      email: "lisa.martinez@example.com",
      walletAddress: "0x8901...2345",
      kycStatus: "approved",
      registeredDate: "2023-04-05",
    },
  ]

  // Filter users based on search query
  const filteredUsers = users.filter((user) => {
    return (
      user.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.walletAddress.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage registered users and their KYC status</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by ID, name, email or wallet..."
            className="pl-8 w-full md:w-[350px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Card className="relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">ID</th>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Wallet Address</th>
                  <th className="text-left py-3 px-4">KYC Status</th>
                  <th className="text-left py-3 px-4">Registered Date</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-3 px-4 font-medium">{user.id}</td>
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.walletAddress}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        {user.kycStatus === "approved" ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                            Approved
                          </span>
                        ) : user.kycStatus === "rejected" ? (
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
                    <td className="py-3 px-4">{user.registeredDate}</td>
                    <td className="py-3 px-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>View Documents</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Reset Password</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Suspend User</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
