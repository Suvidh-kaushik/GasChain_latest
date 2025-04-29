"use client"

import React, { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Download, FileText, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import axios from "axios"

export default  function VerificationDetailPage({ params }: { params: { id: string } }) {

  const localParams = useParams() as { id: string }
  const { id } = localParams


  const [status, setStatus] = useState<"pending" | "approved" | "rejected">("pending")
  const [feedback, setFeedback] = useState("")
  const [showApproveDialog, setShowApproveDialog] = useState(false)
  const [showRejectDialog, setShowRejectDialog] = useState(false)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState<"success" | "error">("success")

  // Mock data
  const verification = {
    id:id,
    user: {
      id: "USR-1234",
      name: "John Doe",
      email: "john.doe@example.com",
      walletAddress: "0x1234...5678",
      phone: "+1 (555) 123-4567",
      registeredDate: "2023-04-07",
    },
    documents: [
      {
        id: "DOC-1234",
        name: "Identity Proof",
        type: "Passport",
        uploadDate: "2023-04-07",
        ipfsHash: "QmX7b5jxn6Sb4PH8aLzRLCyHBrCr8",
      },
      {
        id: "DOC-1233",
        name: "Address Proof",
        type: "Utility Bill",
        uploadDate: "2023-04-07",
        ipfsHash: "QmY8c6jxn6Sb4PH8aLzRLCyHBrCr9",
      },
      {
        id: "DOC-1232",
        name: "Gas Connection Form",
        type: "Application Form",
        uploadDate: "2023-04-07",
        ipfsHash: "QmZ9d7jxn6Sb4PH8aLzRLCyHBrCr0",
      },
    ],
    submittedDate: "2023-04-07",
    status: "pending",
  }

  type consumerDetails = {
    fullName: string,
    phoneNUmber: string,
    email: string,
    walletId: string,
    kyc : {
      id: string,
      createdAt: string,
      transactionHash: string,
      poiCID: string,
      poaCID: string
    }
  }

  useEffect(() =>{
      async function getDetails(){
          try{
              const {data} = await axios.get(`/api/consumer/${id}`); 
              if(data.consumerDetails){
                console.log(data);
              }
              else alert(data.msg);
          }
          catch(error){
              console.log(error);
          }
      }

      getDetails();
  },[])

  const handleApprove = () => {
    setStatus("approved")
    setShowApproveDialog(false)
    setAlertType("success")
    setAlertMessage("Verification has been approved successfully")
    setShowSuccessAlert(true)
    setTimeout(() => setShowSuccessAlert(false), 5000)
  }

  const handleReject = () => {
    setStatus("rejected")
    setShowRejectDialog(false)
    setAlertType("error")
    setAlertMessage("Verification has been rejected")
    setShowSuccessAlert(true)
    setTimeout(() => setShowSuccessAlert(false), 5000)
  }

  return (
    <div className="container mx-auto px-4 md:px-6">
      {showSuccessAlert && (
        <div className="fixed top-4 right-4 z-50 w-full max-w-md">
          <Alert variant={alertType === "success" ? "default" : "destructive"}>
            <div className="flex items-center">
              {alertType === "success" ? (
                <CheckCircle className="h-4 w-4 mr-2" />
              ) : (
                <XCircle className="h-4 w-4 mr-2" />
              )}
              <AlertTitle>{alertType === "success" ? "Success" : "Rejected"}</AlertTitle>
            </div>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        </div>
      )}

      <div className="flex items-center mb-6">
        <Button variant="outline" size="icon" asChild className="mr-4">
          <Link href="/provider/verification">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Verification Details</h1>
          <p className="text-muted-foreground">
            ID: {verification.id} | Submitted: {verification.submittedDate}
          </p>
        </div>
      </div>

      {status === "pending" && (
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Dialog open={showApproveDialog} onOpenChange={setShowApproveDialog}>
            <DialogTrigger asChild>
              <Button className="flex-1">
                <CheckCircle className="mr-2 h-4 w-4" />
                Approve Verification
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Approve Verification</DialogTitle>
                <DialogDescription>
                  Are you sure you want to approve this verification? This action will update the blockchain record.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Textarea
                  placeholder="Add any comments or notes (optional)"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowApproveDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleApprove}>Confirm Approval</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
            <DialogTrigger asChild>
              <Button variant="destructive" className="flex-1">
                <XCircle className="mr-2 h-4 w-4" />
                Reject Verification
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reject Verification</DialogTitle>
                <DialogDescription>
                  Please provide a reason for rejecting this verification. This will be shared with the user.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Textarea
                  placeholder="Reason for rejection"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[100px]"
                  required
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowRejectDialog(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleReject} disabled={!feedback.trim()}>
                  Confirm Rejection
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {status !== "pending" && (
        <div className="mb-6">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              status === "approved"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            }`}
          >
            {status === "approved" ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Approved
              </>
            ) : (
              <>
                <XCircle className="mr-2 h-4 w-4" />
                Rejected
              </>
            )}
          </div>
          {feedback && (
            <div className="mt-4 p-4 bg-muted rounded-md">
              <p className="font-medium mb-1">Feedback:</p>
              <p className="text-muted-foreground">{feedback}</p>
            </div>
          )}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>User Information</CardTitle>
              <CardDescription>Details of the user requesting verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Name</p>
                <p>{verification.user.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p>{verification.user.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <p>{verification.user.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Wallet Address</p>
                <p className="truncate">{verification.user.walletAddress}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Registered Date</p>
                <p>{verification.user.registeredDate}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href={`/provider/users/${verification.user.id}`}>View Full Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Uploaded documents for verification</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={verification.documents[0].id} className="w-full">
                <TabsList className="w-full justify-start mb-4 overflow-auto">
                  {verification.documents.map((doc) => (
                    <TabsTrigger key={doc.id} value={doc.id} className="flex-shrink-0">
                      {doc.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {verification.documents.map((doc) => (
                  <TabsContent key={doc.id} value={doc.id} className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
                          <Image
                            src="/placeholder.svg?height=600&width=800"
                            alt={doc.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-lg font-medium">{doc.name}</h3>
                          <p className="text-muted-foreground">{doc.type}</p>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Document ID:</span>
                            <span className="text-sm font-medium">{doc.id}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Upload Date:</span>
                            <span className="text-sm font-medium">{doc.uploadDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">IPFS Hash:</span>
                            <span className="text-sm font-medium truncate max-w-[200px]">{doc.ipfsHash}</span>
                          </div>
                        </div>
                        <div className="pt-4">
                          <Button variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download Document
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Verification History</CardTitle>
            <CardDescription>Timeline of actions taken on this verification</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Documents Submitted</p>
                  <p className="text-sm text-muted-foreground">{verification.submittedDate} at 10:30 AM</p>
                  <p className="text-sm mt-1">User uploaded 3 documents for verification</p>
                </div>
              </div>

              {status !== "pending" && (
                <div className="flex">
                  <div
                    className={`mr-4 flex h-10 w-10 items-center justify-center rounded-full ${
                      status === "approved"
                        ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {status === "approved" ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                  </div>
                  <div>
                    <p className="font-medium">Verification {status === "approved" ? "Approved" : "Rejected"}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                    </p>
                    {feedback && <p className="text-sm mt-1">{feedback}</p>}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
