"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItem {
  name: string
  href: string
  icon: React.ElementType
}

interface SidebarProps {
  navigation: NavItem[]
  baseHref: string
  label: string
  accentColor: string
}

export default function Sidebar({ navigation, baseHref, label, accentColor }: SidebarProps) {
  const pathname = usePathname()

  const highlight = `bg-${accentColor}-100 text-${accentColor}-600 dark:bg-${accentColor}-900 dark:text-${accentColor}-200`

  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col border-r bg-background">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex items-center px-4 mb-5">
          <Link href={baseHref} className="flex items-center">
            <div className={`w-8 h-8 rounded-full bg-${accentColor}-100 text-${accentColor}-600 dark:bg-${accentColor}-900 dark:text-${accentColor}-200 flex items-center justify-center mr-2`}>
              {label.charAt(0)}
            </div>
            <span className="font-semibold">{label} Portal</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 px-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  isActive ? highlight : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <item.icon className={`mr-3 h-5 w-5 ${isActive ? highlight : "group-hover:text-foreground"}`} />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="border-t p-4">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  )
}
