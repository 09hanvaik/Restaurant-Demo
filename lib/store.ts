import { create } from "zustand"

export type MenuItem = {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
}

export type CartItem = MenuItem & {
  quantity: number
}

type StoreState = {
  cart: CartItem[]
  addToCart: (item: MenuItem) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  getTotalItems: () => number
  getTotalPrice: () => number
  clearCart: () => void
}

export const useCartStore = create<StoreState>((set, get) => ({
  cart: [],
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
          ),
        }
      } else {
        return { cart: [...state.cart, { ...item, quantity: 1 }] }
      }
    })
  },
  removeFromCart: (itemId) => {
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== itemId),
    }))
  },
  updateQuantity: (itemId, quantity) => {
    set((state) => ({
      cart: state.cart
        .map((cartItem) => (cartItem.id === itemId ? { ...cartItem, quantity: Math.max(0, quantity) } : cartItem))
        .filter((cartItem) => cartItem.quantity > 0), // Remove if quantity is 0
    }))
  },
  getTotalItems: () => get().cart.reduce((total, item) => total + item.quantity, 0),
  getTotalPrice: () => get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
  clearCart: () => set({ cart: [] }),
}))
