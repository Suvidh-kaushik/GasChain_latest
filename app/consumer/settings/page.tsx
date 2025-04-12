"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Moon, Shield, Sun, User } from "lucide-react"
import { useTheme as useNextTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
// import { useTheme } from "@/components/theme-provider"

export default function ConsumerSettingsPage() {
  const { theme, setTheme } = useNextTheme()
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardContent className="p-4">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/consumer/settings"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200"
              >
                <User className="mr-3 h-5 w-5" />
                Profile
              </Link>
              <Link
                href="/consumer/settings/notifications"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted"
              >
                <Bell className="mr-3 h-5 w-5" />
                Notifications
              </Link>
              <Link
                href="/consumer/settings/security"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted"
              >
                <Shield className="mr-3 h-5 w-5" />
                Security
              </Link>
              <Link
                href="/consumer/settings/appearance"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted"
              >
                {theme === "dark" ? <Moon className="mr-3 h-5 w-5" /> : <Sun className="mr-3 h-5 w-5" />}
                Appearance
              </Link>
            </nav>
          </CardContent>
        </Card>

        <div className="md:col-span-3">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="w-full grid grid-cols-4 mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue="1234 Main St, Anytown, CA 12345" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="walletAddress">Wallet Address</Label>
                    <Input id="walletAddress" defaultValue="0x1234...5678" disabled />
                    <p className="text-xs text-muted-foreground">Your wallet address cannot be changed</p>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-notifications">All Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive all notifications via email</p>
                        </div>
                        <Switch
                          id="email-notifications"
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-kyc">KYC Verification Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications about verification status changes
                          </p>
                        </div>
                        <Switch id="email-kyc" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-documents">Document Status</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications when your documents are approved or rejected
                          </p>
                        </div>
                        <Switch id="email-documents" defaultChecked />
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Push Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="push-notifications">All Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive all notifications on your device</p>
                        </div>
                        <Switch
                          id="push-notifications"
                          checked={pushNotifications}
                          onCheckedChange={setPushNotifications}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="push-kyc">KYC Verification Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications about verification status changes
                          </p>
                        </div>
                        <Switch id="push-kyc" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="push-documents">Document Status</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications when your documents are approved or rejected
                          </p>
                        </div>
                        <Switch id="push-documents" defaultChecked />
                      </div>
                    </div>
                  </div>
                  <Button>Save Preferences</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Change Password</h3>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    <Button>Update Password</Button>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                      <Switch id="two-factor" checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
                    </div>
                    {twoFactorAuth && (
                      <div className="p-4 bg-muted rounded-md">
                        <p className="text-sm">
                          Two-factor authentication is now enabled. You will be prompted to set up an authenticator app.
                        </p>
                      </div>
                    )}
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Session Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage your active sessions and sign out from other devices
                    </p>
                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-muted-foreground">Last active: Just now</p>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-900"
                        >
                          Active
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline">Sign Out From All Other Devices</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                  <CardDescription>Customize the look and feel of the application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Theme</h3>
                    <RadioGroup defaultValue={theme} onValueChange={(value) => setTheme(value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="light" id="theme-light" />
                        <Label htmlFor="theme-light" className="flex items-center">
                          <Sun className="mr-2 h-4 w-4" />
                          Light
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dark" id="theme-dark" />
                        <Label htmlFor="theme-dark" className="flex items-center">
                          <Moon className="mr-2 h-4 w-4" />
                          Dark
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="system" id="theme-system" />
                        <Label htmlFor="theme-system">System</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button>Save Preferences</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
