"use client"

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import React from "react"

type NavItem = {
    name: string
    href: string
    icon: LucideIcon
}

interface DashboardLayoutProps {
  children: React.ReactNode
  navigation: { name: string; href: string; icon: React.ElementType }[]
  baseHref: string
  label: string
  accentColor: string
  profilePath: string
  settingsPath: string
}

export default function DashboardLayout({
    children,
    navigation,
    baseHref,
    label,
    accentColor = "blue",
    profilePath,
    settingsPath,
}: {
    children: React.ReactNode
    navigation: NavItem[]
    baseHref: string
    label: string
    accentColor?: string
    profilePath: string
    settingsPath: string
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <Sidebar navigation={navigation} baseHref={baseHref} label={label} accentColor={accentColor} />
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <Sidebar navigation={navigation} baseHref={baseHref} label={label} accentColor={accentColor} />

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <Topbar label={label} profilePath={profilePath} settingsPath={settingsPath} />
        <main className="flex-1 py-6 px-4 md:px-6">{children}</main>
      </div>

      {/* Mobile button */}
      <div className="absolute top-4 left-4 md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
