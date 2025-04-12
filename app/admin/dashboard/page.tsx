"use client"

import { useState } from "react"
import { CheckCircle2, Clock, Users, XCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "@/components/ui/chart"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const stats = [
    {
      name: "Total Users",
      value: "1,234",
      change: "+12%",
      icon: Users,
    },
    {
      name: "Pending Verifications",
      value: "42",
      change: "-5%",
      icon: Clock,
    },
    {
      name: "Approved KYCs",
      value: "876",
      change: "+18%",
      icon: CheckCircle2,
    },
    {
      name: "Rejected KYCs",
      value: "123",
      change: "+2%",
      icon: XCircle,
    },
  ]

  const recentActivity = [
    {
      id: "VER-1234",
      user: "John Doe",
      action: "KYC Approved",
      time: "2 hours ago",
      status: "approved",
    },
    {
      id: "VER-1233",
      user: "Jane Smith",
      action: "KYC Rejected",
      time: "3 hours ago",
      status: "rejected",
    },
    {
      id: "VER-1232",
      user: "Mike Johnson",
      action: "Documents Uploaded",
      time: "5 hours ago",
      status: "pending",
    },
    {
      id: "VER-1231",
      user: "Sarah Williams",
      action: "KYC Approved",
      time: "1 day ago",
      status: "approved",
    },
    {
      id: "VER-1230",
      user: "Robert Brown",
      action: "KYC Rejected",
      time: "1 day ago",
      status: "rejected",
    },
  ]

  const pendingVerifications = [
    {
      id: "VER-1229",
      user: "Emily Davis",
      documentCount: 3,
      submittedDate: "2023-04-09",
      status: "pending",
    },
    {
      id: "VER-1228",
      user: "David Wilson",
      documentCount: 4,
      submittedDate: "2023-04-08",
      status: "pending",
    },
    {
      id: "VER-1227",
      user: "Lisa Martinez",
      documentCount: 2,
      submittedDate: "2023-04-08",
      status: "pending",
    },
    {
      id: "VER-1226",
      user: "Thomas Anderson",
      documentCount: 3,
      submittedDate: "2023-04-07",
      status: "pending",
    },
    {
      id: "VER-1225",
      user: "Jennifer Taylor",
      documentCount: 5,
      submittedDate: "2023-04-07",
      status: "pending",
    },
  ]

  // Chart data
  const kycData = [
    { name: "Jan", approved: 65, rejected: 12, pending: 23 },
    { name: "Feb", approved: 78, rejected: 15, pending: 18 },
    { name: "Mar", approved: 90, rejected: 20, pending: 15 },
    { name: "Apr", approved: 85, rejected: 18, pending: 22 },
    { name: "May", approved: 92, rejected: 14, pending: 10 },
    { name: "Jun", approved: 105, rejected: 10, pending: 8 },
  ]

  const pieData = [
    { name: "Approved", value: 876, color: "#22c55e" },
    { name: "Pending", value: 42, color: "#f59e0b" },
    { name: "Rejected", value: 123, color: "#ef4444" },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage KYC verifications</p>
        </div>
        <Button asChild className="mt-4 md:mt-0">
          <Link href="/admin/verification">View All Verifications</Link>
        </Button>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="pending">Pending Verifications</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <CardHeader>
                <CardTitle>KYC Verification Trends</CardTitle>
                <CardDescription>Monthly verification statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={kycData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="approved" fill="#22c55e" name="Approved" />
                      <Bar dataKey="rejected" fill="#ef4444" name="Rejected" />
                      <Bar dataKey="pending" fill="#f59e0b" name="Pending" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <CardHeader>
                <CardTitle>KYC Status Distribution</CardTitle>
                <CardDescription>Current verification status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-6">
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
                      <th className="text-left py-3 px-2">User</th>
                      <th className="text-left py-3 px-2">Documents</th>
                      <th className="text-left py-3 px-2">Submitted Date</th>
                      <th className="text-left py-3 px-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingVerifications.map((verification) => (
                      <tr key={verification.id} className="border-b">
                        <td className="py-3 px-2 font-medium">{verification.id}</td>
                        <td className="py-3 px-2">{verification.user}</td>
                        <td className="py-3 px-2">{verification.documentCount} documents</td>
                        <td className="py-3 px-2">{verification.submittedDate}</td>
                        <td className="py-3 px-2">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/admin/verification/${verification.id}`}>View</Link>
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

        <TabsContent value="activity" className="space-y-6">
          <Card className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                          activity.status === "approved"
                            ? "bg-green-100 text-green-600"
                            : activity.status === "rejected"
                              ? "bg-red-100 text-red-600"
                              : "bg-amber-100 text-amber-600"
                        }`}
                      >
                        {activity.status === "approved" ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : activity.status === "rejected" ? (
                          <XCircle className="h-5 w-5" />
                        ) : (
                          <Clock className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{activity.user}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{activity.id}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
