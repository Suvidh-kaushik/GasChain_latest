"use client"

import DashboardLayout from "@/components/layout/DashboardLayout"
import { Home, Settings, Store, FileText } from "lucide-react"

const navigation = [
    { name: "Dashboard", href: "/consumer/dashboard", icon: Home },
    { name: "My Documents", href: "/consumer/documents", icon: FileText },
    { name: "Gas Providers", href: "/consumer/providers", icon: Store },
    { name: "Settings", href: "/consumer/settings", icon: Settings },
  ]

export default function AdminClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      navigation={navigation}
      baseHref="/consumer/dashboard"
      label="Consumer"
      accentColor="purple"
      profilePath="/consumer/settings"
      settingsPath="/consumer/settings"
    >
      {children}
    </DashboardLayout>
  )
}
