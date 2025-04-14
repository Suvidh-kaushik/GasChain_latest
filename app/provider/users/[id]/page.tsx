"use client"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Clock, FileText, MoreHorizontal, User, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UserDetailPage({ params }: { params: { id: string } }) {
  // Mock data
  const user = {
    id: params.id,
    name: "John Doe",
    email: "john.doe@example.com",
    walletAddress: "0x1234...5678",
    phone: "+1 (555) 123-4567",
    registeredDate: "2023-04-07",
    kycStatus: "approved",
    documents: [
      {
        id: "DOC-1234",
        name: "Identity Proof",
        type: "Passport",
        uploadDate: "2023-04-07",
        status: "approved",
        ipfsHash: "QmX7b5jxn6Sb4PH8aLzRLCyHBrCr8",
      },
      {
        id: "DOC-1233",
        name: "Address Proof",
        type: "Utility Bill",
        uploadDate: "2023-04-07",
        status: "approved",
        ipfsHash: "QmY8c6jxn6Sb4PH8aLzRLCyHBrCr9",
      },
      {
        id: "DOC-1232",
        name: "Gas Connection Form",
        type: "Application Form",
        uploadDate: "2023-04-07",
        status: "approved",
        ipfsHash: "QmZ9d7jxn6Sb4PH8aLzRLCyHBrCr0",
      },
    ],
    verificationHistory: [
      {
        id: "VER-1234",
        date: "2023-04-09",
        status: "approved",
        admin: "Admin User",
      },
    ],
    activity: [
      {
        id: "ACT-1234",
        action: "Document Uploaded",
        document: "Identity Proof",
        date: "2023-04-07",
        time: "10:30 AM",
      },
      {
        id: "ACT-1233",
        action: "Document Uploaded",
        document: "Address Proof",
        date: "2023-04-07",
        time: "10:35 AM",
      },
      {
        id: "ACT-1232",
        action: "Document Uploaded",
        document: "Gas Connection Form",
        date: "2023-04-07",
        time: "10:40 AM",
      },
      {
        id: "ACT-1231",
        action: "Verification Submitted",
        document: "",
        date: "2023-04-07",
        time: "10:45 AM",
      },
      {
        id: "ACT-1230",
        action: "Verification Approved",
        document: "",
        date: "2023-04-09",
        time: "02:15 PM",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex items-center mb-6">
        <Button variant="outline" size="icon" asChild className="mr-4">
          <Link href="/admin/users">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground">
            ID: {user.id} | Registered: {user.registeredDate}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Send Message</DropdownMenuItem>
            <DropdownMenuItem>Reset Password</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Suspend Account</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>User Information</CardTitle>
              <CardDescription>Personal and account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Name</p>
                <p>{user.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <p>{user.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Wallet Address</p>
                <p className="truncate">{user.walletAddress}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Registered Date</p>
                <p>{user.registeredDate}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">KYC Status</p>
                <div className="mt-1">
                  {user.kycStatus === "approved" ? (
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-900"
                    >
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      Approved
                    </Badge>
                  ) : user.kycStatus === "rejected" ? (
                    <Badge
                      variant="outline"
                      className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-900"
                    >
                      <XCircle className="mr-1 h-3 w-3" />
                      Rejected
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900 dark:text-amber-200 dark:hover:bg-amber-900"
                    >
                      <Clock className="mr-1 h-3 w-3" />
                      Pending
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="documents" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="verifications">Verifications</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <CardTitle>User Documents</CardTitle>
                  <CardDescription>Documents uploaded by the user</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-muted-foreground">{doc.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {doc.status === "approved" ? (
                            <Badge
                              variant="outline"
                              className="mr-4 bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-900"
                            >
                              <CheckCircle2 className="mr-1 h-3 w-3" />
                              Approved
                            </Badge>
                          ) : doc.status === "rejected" ? (
                            <Badge
                              variant="outline"
                              className="mr-4 bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-900"
                            >
                              <XCircle className="mr-1 h-3 w-3" />
                              Rejected
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="mr-4 bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900 dark:text-amber-200 dark:hover:bg-amber-900"
                            >
                              <Clock className="mr-1 h-3 w-3" />
                              Pending
                            </Badge>
                          )}
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin/documents/${doc.id}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="verifications">
              <Card>
                <CardHeader>
                  <CardTitle>Verification History</CardTitle>
                  <CardDescription>Past verification requests and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  {user.verificationHistory.length > 0 ? (
                    <div className="space-y-4">
                      {user.verificationHistory.map((verification) => (
                        <div
                          key={verification.id}
                          className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                                verification.status === "approved"
                                  ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200"
                                  : verification.status === "rejected"
                                    ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200"
                                    : "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-200"
                              }`}
                            >
                              {verification.status === "approved" ? (
                                <CheckCircle2 className="h-5 w-5" />
                              ) : verification.status === "rejected" ? (
                                <XCircle className="h-5 w-5" />
                              ) : (
                                <Clock className="h-5 w-5" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">Verification {verification.id}</p>
                              <p className="text-sm text-muted-foreground">
                                {verification.date} by {verification.admin}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin/verification/${verification.id}`}>View Details</Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No verification history found</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>User Activity</CardTitle>
                  <CardDescription>Recent actions performed by the user</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.activity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                            {activity.action.includes("Uploaded") ? (
                              <FileText className="h-5 w-5" />
                            ) : activity.action.includes("Approved") ? (
                              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                            ) : activity.action.includes("Rejected") ? (
                              <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                            ) : (
                              <User className="h-5 w-5" />
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
