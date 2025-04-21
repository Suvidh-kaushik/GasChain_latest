import { JSX } from "react";
import { Home, Settings, Store, FileText } from "lucide-react"
import DashboardLayout from "./DashboardLayout";

const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: Home },
    { name: "Requests", href: "/admin/requests", icon: FileText },
    { name: "Settings", href: "/consumer/settings", icon: Settings },
  ]

export default function AdminLayout({children}: {children: React.ReactNode}): JSX.Element{
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