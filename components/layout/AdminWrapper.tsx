"use client"

import AdminClientLayout from "@/components/layout/AdminClientLayout"

export default function AdminWrapper({ children }: { children: React.ReactNode }) {
  return <AdminClientLayout>{children}</AdminClientLayout>
}
