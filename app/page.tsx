"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme as useNextTheme } from "next-themes"

import { Button } from "@/components/ui/button"
// import { useTheme } from "@/components/theme-provider"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const router = useRouter()
  const { theme, setTheme } = useNextTheme()

  const menuItems = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Features", href: "#features" },
    { title: "How it Works", href: "#how-it-works" },
    { title: "Contact", href: "#contact" },
  ]

  const features = [
    {
      title: "Secure Document Storage",
      description: "All documents are securely stored on IPFS with encryption",
      icon: "🔒",
    },
    {
      title: "Blockchain Verification",
      description: "Immutable verification records on the blockchain",
      icon: "⛓️",
    },
    {
      title: "Fast Approval Process",
      description: "Quick verification and approval by authorized admins",
      icon: "⚡",
    },
    {
      title: "Transparent System",
      description: "Full transparency in the verification process",
      icon: "👁️",
    },
  ]

  const handleRegister = () => {
    router.push("/register")
  }

  const handleLogin = () => {
    router.push("/login")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between relative z-50">
        <div className="flex items-center">
          <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="mr-2" />
          <span className="text-xl font-bold">GasChain KYC</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="relative flex items-center justify-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium"
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {activeItem === index && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-md -z-10 dark:from-purple-500/30 dark:to-blue-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.title}
              </Link>
            ))}
          </div>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button className="" onClick={handleRegister}>Register</Button>
          <Button className="" onClick={handleLogin}>Login</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b z-40 p-4">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            {/* <Button onClick={handleConnect} className="w-full">
              Connect Wallet
            </Button> */}
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 md:py-32 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--purple-500),0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_70%)]"></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Blockchain-Powered KYC Verification
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          Secure, transparent, and efficient KYC verification for gas connections using blockchain technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={handleRegister}>
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#how-it-works">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Our Platform</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Revolutionizing Gas Connection KYC</h3>
              <p className="text-muted-foreground mb-6">
                Our platform leverages blockchain technology to create a secure, transparent, and efficient KYC
                verification process for gas connections. By storing documents on IPFS and verification records on the
                blockchain, we ensure data integrity and security.
              </p>
              <p className="text-muted-foreground">
                Consumers can easily upload their documents and track verification status, while admins can quickly
                review and approve applications, making the entire process faster and more reliable.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Blockchain KYC Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-background p-6 rounded-lg border hover:border-purple-500 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 dark:bg-purple-900 dark:text-purple-200">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Your Wallet</h3>
              <p className="text-muted-foreground">
                Sign up or sign in using MetaMask to access the platform as a consumer or admin.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 dark:bg-purple-900 dark:text-purple-200">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Documents</h3>
              <p className="text-muted-foreground">
                Consumers upload their KYC documents which are securely stored on IPFS.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 dark:bg-purple-900 dark:text-purple-200">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Verification Process</h3>
              <p className="text-muted-foreground">
                Admins review and verify the documents, with all verification records stored on the blockchain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/80">
            Join our platform today and experience the future of KYC verification for gas connections.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={handleRegister}
            className="bg-white text-purple-600 hover:bg-white/90"
          >
            Connect Wallet
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold">GasChain KYC</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-purple-500">
                Terms
              </Link>
              <Link href="#" className="hover:text-purple-500">
                Privacy
              </Link>
              <Link href="#" className="hover:text-purple-500">
                Support
              </Link>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GasChain KYC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
