"use client"

import DashboardLayout from "@/components/layout/DashboardLayout"
import { Home, FileCheck, Users, Settings } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/provider/dashboard", icon: Home },
  { name: "KYC Verification", href: "/provider/verification", icon: FileCheck },
  { name: "User Management", href: "/provider/users", icon: Users },
  { name: "Settings", href: "/provider/settings", icon: Settings },
]

export default function providerClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      navigation={navigation}
      baseHref="/provider/dashboard"
      label="Provider"
      accentColor="purple"
      profilePath="/provider/settings"
      settingsPath="/provider/settings"
    >
      {children}
    </DashboardLayout>
  )
}
