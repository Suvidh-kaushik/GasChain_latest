"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, FileText, Home, LogOut, Menu, Moon, Settings, Store, Sun, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useTheme as useNextTheme } from "next-themes"

export default function ConsumerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useNextTheme()

  const navigation = [
    { name: "Dashboard", href: "/consumer/dashboard", icon: Home },
    { name: "My Documents", href: "/consumer/documents", icon: FileText },
    { name: "Gas Providers", href: "/consumer/providers", icon: Store },
    { name: "Settings", href: "/consumer/settings", icon: Settings },
  ]

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex flex-col h-full">
            <div className="px-4 py-6 border-b">
              <Link href="/consumer/dashboard" className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2 dark:bg-blue-900 dark:text-blue-200">
                  C
                </div>
                <span className="font-semibold">Consumer Portal</span>
              </Link>
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.href
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r bg-background">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex items-center flex-shrink-0 px-4 mb-5">
              <Link href="/consumer/dashboard" className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2 dark:bg-blue-900 dark:text-blue-200">
                  C
                </div>
                <span className="font-semibold">Consumer Portal</span>
              </Link>
            </div>
            <nav className="mt-5 flex-1 space-y-1 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    pathname === item.href
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-md transition-opacity duration-300 -z-10"></div>
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      pathname === item.href
                        ? "text-blue-600 dark:text-blue-200"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t p-4">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 bg-background border-b">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open sidebar</span>
              </Button>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Bell className="h-5 w-5" />
                </Button>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <div className=" h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                      C
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/consumer/settings/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/consumer/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <main className="flex-1">
          <div className="py-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
