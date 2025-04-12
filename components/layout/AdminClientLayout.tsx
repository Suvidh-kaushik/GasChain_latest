"use client"

import DashboardLayout from "@/components/layout/DashboardLayout"
import { Home, FileCheck, Users, Settings } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: Home },
  { name: "KYC Verification", href: "/admin/verification", icon: FileCheck },
  { name: "User Management", href: "/admin/users", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      navigation={navigation}
      baseHref="/admin/dashboard"
      label="Admin"
      accentColor="purple"
      profilePath="/admin/settings"
      settingsPath="/admin/settings"
    >
      {children}
    </DashboardLayout>
  )
}
