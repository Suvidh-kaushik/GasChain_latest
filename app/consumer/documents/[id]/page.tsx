"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, Clock, Download, FileText, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function DocumentDetailPage({ params }: { params: { id: string } }) {
  // Mock data
  const document = {
    id: params.id,
    name: "Identity Proof",
    type: "Passport",
    uploadDate: "2023-04-07",
    status: "approved",
    ipfsHash: "QmX7b5jxn6Sb4PH8aLzRLCyHBrCr8",
    feedback: "Document verified successfully. All information is clear and matches our records.",
    verifiedBy: "Admin User",
    verifiedDate: "2023-04-09",
  }

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex items-center mb-6">
        <Button variant="outline" size="icon" asChild className="mr-4">
          <Link href="/consumer/documents">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{document.name}</h1>
          <p className="text-muted-foreground">
            ID: {document.id} | Uploaded: {document.uploadDate}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Document Preview</CardTitle>
            <CardDescription>View your uploaded document</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
              <Image src="/placeholder.svg?height=600&width=800" alt={document.name} fill className="object-contain" />
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Document
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Document Information</CardTitle>
            <CardDescription>Details and verification status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Status</h3>
                {document.status === "approved" ? (
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-900"
                  >
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Approved
                  </Badge>
                ) : document.status === "rejected" ? (
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
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Document Type:</span>
                  <span className="text-sm font-medium">{document.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Upload Date:</span>
                  <span className="text-sm font-medium">{document.uploadDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">IPFS Hash:</span>
                  <span className="text-sm font-medium truncate max-w-[200px]">{document.ipfsHash}</span>
                </div>
                {document.status === "approved" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Verified By:</span>
                      <span className="text-sm font-medium">{document.verifiedBy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Verified Date:</span>
                      <span className="text-sm font-medium">{document.verifiedDate}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {document.feedback && (
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Feedback</h3>
                <div className="p-4 bg-muted rounded-md">
                  <p className="text-sm">{document.feedback}</p>
                </div>
              </div>
            )}

            <div className="pt-4">
              {document.status === "rejected" && (
                <Button className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Upload New Version
                </Button>
              )}
              {document.status === "pending" && (
                <div className="text-center p-4 bg-muted rounded-md">
                  <Clock className="h-5 w-5 mx-auto mb-2 text-amber-600 dark:text-amber-400" />
                  <p className="text-sm font-medium">Your document is being reviewed</p>
                  <p className="text-xs text-muted-foreground mt-1">This usually takes 1-2 business days</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Document History</CardTitle>
            <CardDescription>Timeline of actions for this document</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Document Uploaded</p>
                  <p className="text-sm text-muted-foreground">{document.uploadDate} at 10:30 AM</p>
                </div>
              </div>

              {document.status !== "pending" && (
                <div className="flex">
                  <div
                    className={`mr-4 flex h-10 w-10 items-center justify-center rounded-full ${
                      document.status === "approved"
                        ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {document.status === "approved" ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <XCircle className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">Document {document.status === "approved" ? "Approved" : "Rejected"}</p>
                    <p className="text-sm text-muted-foreground">{document.verifiedDate} at 02:15 PM</p>
                    {document.feedback && <p className="text-sm mt-1">{document.feedback}</p>}
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
