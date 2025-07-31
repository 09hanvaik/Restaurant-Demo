"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, MenuIcon } from "lucide-react"
import { useState } from "react"
import CartSidebar from "@/components/ui/cart-sidebar"
import LoginSignupModal from "@/components/ui/login-signup-modal"
import { useCartStore } from "@/lib/store"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const totalCartItems = useCartStore((state) => state.getTotalItems())

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-xl">
          <img src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=1258&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Restaurant Logo" className="h-8 w-8" />
          <span>FastBites</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/menu" className="hover:text-primary transition-colors">
            Menu
          </Link>
          <Link href="/track-order" className="hover:text-primary transition-colors">
            Track Order
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setIsLoginModalOpen(true)}>
            <User className="h-5 w-5" />
            <span className="sr-only">Login / Sign Up</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)} className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {totalCartItems}
              </span>
            )}
            <span className="sr-only">View Cart</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                <Link
                  href="/"
                  className="hover:text-primary transition-colors"
                  onClick={() => {
                    /* Close sheet */
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  className="hover:text-primary transition-colors"
                  onClick={() => {
                    /* Close sheet */
                  }}
                >
                  Menu
                </Link>
                <Link
                  href="/track-order"
                  className="hover:text-primary transition-colors"
                  onClick={() => {
                    /* Close sheet */
                  }}
                >
                  Track Order
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                  onClick={() => {
                    /* Close sheet */
                  }}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <LoginSignupModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </header>
  )
}
