"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Package, Bike, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TrackOrderPage() {
  const [orderStatus, setOrderStatus] = useState(0) // 0: Placed, 1: Preparing, 2: Out for Delivery, 3: Delivered
  const statuses = [
    { label: "Order Placed", icon: CheckCircle },
    { label: "Preparing Your Order", icon: Package },
    { label: "Out for Delivery", icon: Bike },
    { label: "Delivered!", icon: Home },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderStatus((prevStatus) => {
        if (prevStatus < statuses.length - 1) {
          return prevStatus + 1
        }
        clearInterval(interval)
        return prevStatus
      })
    }, 3000) // Update status every 3 seconds for demo

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container py-12 md:py-16 px-4 md:px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Track Your Order</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Order ID: <span className="font-semibold">#FB123456789</span>
      </p>

      <div className="relative flex justify-between items-center max-w-3xl mx-auto mb-12">
        {statuses.map((status, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-500 ${
                orderStatus >= index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              <status.icon className="h-6 w-6" />
            </div>
            <p
              className={`mt-2 text-sm font-medium text-center ${orderStatus >= index ? "text-primary" : "text-muted-foreground"}`}
            >
              {status.label}
            </p>
          </div>
        ))}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-muted z-0">
          <div
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{ width: `${(orderStatus / (statuses.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-sm max-w-md mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Current Status:</h2>
        <p className="text-3xl font-bold text-primary">{statuses[orderStatus].label}</p>
        {orderStatus < statuses.length - 1 && (
          <p className="text-muted-foreground">
            Estimated delivery in {Math.max(0, (statuses.length - 1 - orderStatus) * 5)} minutes.
          </p>
        )}
        {orderStatus === statuses.length - 1 && (
          <p className="text-muted-foreground">Your order has been successfully delivered! Enjoy your meal.</p>
        )}
      </div>

      <div className="mt-12 flex justify-center gap-4">
        <Button asChild>
          <Link href="/menu">Order Again</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  )
}
