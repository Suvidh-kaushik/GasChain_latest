"use client"
import Link from "next/link"
import { CheckCircle2, Clock, FileText, Upload, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ConsumerDashboard() {
  // Mock data
  const kycStatus = {
    status: "pending",
    progress: 60,
    documents: [
      { name: "Identity Proof", status: "approved" },
      { name: "Address Proof", status: "pending" },
      { name: "Gas Connection Form", status: "pending" },
    ],
    lastUpdated: "2023-04-09",
  }

  const recentActivity = [
    {
      id: "ACT-1234",
      action: "Document Uploaded",
      document: "Address Proof",
      date: "2023-04-09",
      time: "14:30",
    },
    {
      id: "ACT-1233",
      action: "Document Approved",
      document: "Identity Proof",
      date: "2023-04-08",
      time: "10:15",
    },
    {
      id: "ACT-1232",
      action: "Document Uploaded",
      document: "Identity Proof",
      date: "2023-04-07",
      time: "16:45",
    },
    {
      id: "ACT-1231",
      action: "Profile Created",
      document: "",
      date: "2023-04-06",
      time: "09:20",
    },
  ]

  const gasProviders = [
    {
      id: "GP-1234",
      name: "GasConnect Ltd",
      location: "New York",
      rating: 4.8,
      connectionFee: "$50",
    },
    {
      id: "GP-1233",
      name: "EnergyGas Co",
      location: "Los Angeles",
      rating: 4.5,
      connectionFee: "$45",
    },
    {
      id: "GP-1232",
      name: "MetroGas Services",
      location: "Chicago",
      rating: 4.7,
      connectionFee: "$55",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Consumer Dashboard</h1>
          <p className="text-muted-foreground">Manage your KYC verification and gas connection</p>
        </div>
        <Button asChild className="mt-4 md:mt-0">
          <Link href="/consumer/documents">
            <Upload className="mr-2 h-4 w-4" />
            Upload Documents
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="relative group overflow-hidden md:col-span-2 lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          <CardHeader>
            <CardTitle>KYC Verification Status</CardTitle>
            <CardDescription>Current status of your verification</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              {kycStatus.status === "approved" ? (
                <div className="flex items-center text-green-600">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  <span className="font-medium">Approved</span>
                </div>
              ) : kycStatus.status === "rejected" ? (
                <div className="flex items-center text-red-600">
                  <XCircle className="mr-2 h-5 w-5" />
                  <span className="font-medium">Rejected</span>
                </div>
              ) : (
                <div className="flex items-center text-amber-600">
                  <Clock className="mr-2 h-5 w-5" />
                  <span className="font-medium">Pending Verification</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Verification Progress</span>
                <span>{kycStatus.progress}%</span>
              </div>
              <Progress value={kycStatus.progress} className="h-2" />
            </div>
            <div className="mt-6 space-y-4">
              <h4 className="text-sm font-medium">Document Status</h4>
              <div className="space-y-2">
                {kycStatus.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{doc.name}</span>
                    </div>
                    {doc.status === "approved" ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        Approved
                      </span>
                    ) : doc.status === "rejected" ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                        Rejected
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                        Pending
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">Last updated: {kycStatus.lastUpdated}</CardFooter>
        </Card>

        <Card className="relative group overflow-hidden md:col-span-2">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                      {activity.action.includes("Uploaded") ? (
                        <Upload className="h-5 w-5" />
                      ) : activity.action.includes("Approved") ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <FileText className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      {activity.document && <p className="text-sm text-muted-foreground">{activity.document}</p>}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{activity.date}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="relative group overflow-hidden lg:col-span-3">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          <CardHeader>
            <CardTitle>Recommended Gas Providers</CardTitle>
            <CardDescription>Gas providers available in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Provider</th>
                    <th className="text-left py-3 px-2">Location</th>
                    <th className="text-left py-3 px-2">Rating</th>
                    <th className="text-left py-3 px-2">Connection Fee</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {gasProviders.map((provider) => (
                    <tr key={provider.id} className="border-b">
                      <td className="py-3 px-2 font-medium">{provider.name}</td>
                      <td className="py-3 px-2">{provider.location}</td>
                      <td className="py-3 px-2">{provider.rating}/5</td>
                      <td className="py-3 px-2">{provider.connectionFee}</td>
                      <td className="py-3 px-2">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/consumer/providers">View All Providers</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
