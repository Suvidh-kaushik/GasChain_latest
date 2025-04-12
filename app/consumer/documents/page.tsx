"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2, Clock, FileText, Plus, Upload, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const mockDocuments = [
  { id: "DOC-1", name: "Identity Proof", type: "Passport", uploadDate: "2023-04-07", status: "approved", ipfsHash: "QmX..." },
  { id: "DOC-2", name: "Address Proof", type: "Utility Bill", uploadDate: "2023-04-09", status: "pending", ipfsHash: "QmY..." },
  { id: "DOC-3", name: "Gas Connection", type: "Application", uploadDate: "2023-04-09", status: "pending", ipfsHash: "QmZ..." },
]

const statusIcon = {
  approved: <CheckCircle2 className="h-5 w-5 text-green-600" />,
  pending: <Clock className="h-5 w-5 text-amber-600" />,
  rejected: <XCircle className="h-5 w-5 text-red-600" />,
}

export default function DocumentsPage() {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [documentType, setDocumentType] = useState("")
  const [documents, setDocuments] = useState(mockDocuments)

  const handleUpload = () => {
    if (!selectedFile || !documentType) return
    const newDoc = {
      id: `DOC-${Date.now()}`,
      name: "New Document",
      type: documentType,
      uploadDate: new Date().toISOString().split("T")[0],
      status: "pending",
      ipfsHash: "QmNewHash123", // Replace with real one
    }
    setDocuments([...documents, newDoc])
    setUploadDialogOpen(false)
    setSelectedFile(null)
    setDocumentType("")
  }

  const filteredDocs = (status?: string) =>
    status ? documents.filter((doc) => doc.status === status) : documents

  const UploadDialog = () => (
    <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
      <DialogTrigger asChild>
        <Button><Upload className="mr-2 h-4 w-4" /> Upload Document</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload New Document</DialogTitle>
          <DialogDescription>Upload your document to IPFS for secure storage and verification.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Document Type</Label>
            <Select value={documentType} onValueChange={setDocumentType}>
              <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Identity Proof">Identity Proof</SelectItem>
                <SelectItem value="Address Proof">Address Proof</SelectItem>
                <SelectItem value="Gas Connection">Gas Connection Form</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>File</Label>
            <Input type="file" onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} />
            {selectedFile && <p className="text-sm text-muted-foreground">Selected: {selectedFile.name}</p>}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setUploadDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleUpload} disabled={!selectedFile || !documentType}>Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )

  const DocumentCard = ({ doc }: { doc: typeof documents[0] }) => (
    <Card key={doc.id}>
      <CardHeader className="pb-2 flex justify-between items-start">
        <div>
          <CardTitle className="text-lg">{doc.name}</CardTitle>
          <CardDescription>{doc.type}</CardDescription>
        </div>
        {statusIcon[doc.status as keyof typeof statusIcon]}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Upload Date:</span><span>{doc.uploadDate}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Status:</span>
          <span className={`capitalize ${
            doc.status === "approved" ? "text-green-600" :
            doc.status === "rejected" ? "text-red-600" : "text-amber-600"
          }`}>
            {doc.status}
          </span>
        </div>
        <div className="flex justify-between text-sm truncate">
          <span>IPFS Hash:</span><span className="max-w-[150px] truncate">{doc.ipfsHash}</span>
        </div>
        <Button variant="outline" size="sm" className="w-full mt-2">
          <FileText className="mr-2 h-4 w-4" /> View
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">My Documents</h1>
          <p className="text-muted-foreground">Manage your KYC documents</p>
        </div>
        <UploadDialog />
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid grid-cols-4 max-w-md mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        {["all", "pending", "approved", "rejected"].map((status) => (
          <TabsContent key={status} value={status} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDocs(status === "all" ? undefined : status).map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
            <Card className="border-dashed flex flex-col items-center justify-center py-10">
              <Dialog>

                <DialogTrigger asChild>
                  <Button variant="outline" className="h-20 w-20 rounded-full">
                    <Plus className="h-10 w-10" />
                  </Button>
                </DialogTrigger>
              </Dialog>
              <p className="mt-4 font-medium">Upload New Document</p>
              <p className="text-sm text-muted-foreground text-center mt-2">Click to upload a new document</p>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
