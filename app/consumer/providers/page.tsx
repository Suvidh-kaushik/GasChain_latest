"use client"

import { useState } from "react"
import { MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProvidersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")

  // Mock data
  const gasProviders = [
    {
      id: "GP-1234",
      name: "GasConnect Ltd",
      location: "New York",
      description: "Leading provider of gas connections with over 20 years of experience.",
      rating: 4.8,
      connectionFee: "$50",
      connectionTime: "3-5 days",
    },
    {
      id: "GP-1233",
      name: "EnergyGas Co",
      location: "Los Angeles",
      description: "Affordable gas connections with excellent customer service.",
      rating: 4.5,
      connectionFee: "$45",
      connectionTime: "4-6 days",
    },
    {
      id: "GP-1232",
      name: "MetroGas Services",
      location: "Chicago",
      description: "Fast and reliable gas connection services for residential and commercial properties.",
      rating: 4.7,
      connectionFee: "$55",
      connectionTime: "2-4 days",
    },
    {
      id: "GP-1231",
      name: "CityGas Solutions",
      location: "New York",
      description: "Comprehensive gas connection services with 24/7 customer support.",
      rating: 4.6,
      connectionFee: "$52",
      connectionTime: "3-5 days",
    },
    {
      id: "GP-1230",
      name: "PrimeGas Network",
      location: "Houston",
      description: "Premium gas connection services with guaranteed satisfaction.",
      rating: 4.9,
      connectionFee: "$60",
      connectionTime: "1-3 days",
    },
    {
      id: "GP-1229",
      name: "EcoGas Systems",
      location: "Los Angeles",
      description: "Eco-friendly gas connection solutions for modern homes.",
      rating: 4.4,
      connectionFee: "$48",
      connectionTime: "4-7 days",
    },
  ]

  // Filter providers based on search query and location
  const filteredProviders = gasProviders.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesLocation = locationFilter === "all" || provider.location === locationFilter

    return matchesSearch && matchesLocation
  })

  // Get unique locations for filter
  const locations = ["all", ...new Set(gasProviders.map((provider) => provider.location))]

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Gas Providers</h1>
          <p className="text-muted-foreground">Find and connect with gas providers in your area</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search providers..."
            className="pl-8 w-full md:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={locationFilter} onValueChange={setLocationFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location === "all" ? "All Locations" : location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProviders.map((provider) => (
          <Card key={provider.id} className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{provider.name}</CardTitle>
                <div className="flex items-center text-amber-500">
                  <Star className="fill-current h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{provider.rating}</span>
                </div>
              </div>
              <CardDescription className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {provider.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{provider.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Connection Fee</p>
                  <p className="font-medium">{provider.connectionFee}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Connection Time</p>
                  <p className="font-medium">{provider.connectionTime}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply for Connection</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
