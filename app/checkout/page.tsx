"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useCartStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart)
  const getTotalPrice = useCartStore((state) => state.getTotalPrice)
  const clearCart = useCartStore((state) => state.clearCart)
  const router = useRouter()

  const [deliveryOption, setDeliveryOption] = useState("delivery")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  })

  const subtotal = getTotalPrice()
  const taxRate = 0.08 // 8% tax
  const tax = subtotal * taxRate
  const deliveryFee = deliveryOption === "delivery" ? 5.0 : 0
  const total = subtotal + tax + deliveryFee

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before checking out.")
      return
    }
    // Mock order placement
    alert("Order placed successfully! Redirecting to track order page.")
    clearCart() // Clear cart after mock order
    router.push("/track-order")
  }

  return (
    <div className="container py-12 md:py-16 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">Checkout</h1>

        {/* Delivery/Pickup Options */}
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Delivery Options</h2>
          <RadioGroup defaultValue="delivery" onValueChange={setDeliveryOption} className="grid grid-cols-2 gap-4">
            <Label
              htmlFor="delivery"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
            >
              <RadioGroupItem id="delivery" value="delivery" className="sr-only" />
              <span className="mb-2 text-lg font-medium">Delivery</span>
              <span className="text-sm text-muted-foreground">Get it delivered to your door</span>
            </Label>
            <Label
              htmlFor="pickup"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
            >
              <RadioGroupItem id="pickup" value="pickup" className="sr-only" />
              <span className="mb-2 text-lg font-medium">Pickup</span>
              <span className="text-sm text-muted-foreground">Pick up at our location</span>
            </Label>
          </RadioGroup>
        </div>

        {/* Contact Details Form */}
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
          <form className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            {deliveryOption === "delivery" && (
              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea
                  id="address"
                  placeholder="123 Main St, Apt 4B, City, State, Zip"
                  value={formData.address}
                  onChange={handleInputChange}
                  required={deliveryOption === "delivery"}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="notes">Special Instructions (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="e.g., No pickles, extra sauce"
                value={formData.notes}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1 bg-card p-6 rounded-lg shadow-sm h-fit sticky top-24">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {cart.length === 0 ? (
          <p className="text-muted-foreground text-center py-4">Your cart is empty.</p>
        ) : (
          <ul className="space-y-3">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center text-sm">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <Separator className="my-4" />
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax ({taxRate * 100}%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          {deliveryOption === "delivery" && (
            <div className="flex justify-between">
              <span>Delivery Fee:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
          )}
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button className="w-full mt-6" size="lg" onClick={handlePlaceOrder} disabled={cart.length === 0}>
          Place Order
        </Button>
      </div>
    </div>
  )
}
