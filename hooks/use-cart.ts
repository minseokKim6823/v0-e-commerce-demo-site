"use client"

import { create } from "zustand"
import type { Product } from "@/lib/products"

export interface CartItem {
  product: Product
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, color?: string, size?: string) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (product, color, size) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === color &&
          item.selectedSize === size
      )

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id &&
            item.selectedColor === color &&
            item.selectedSize === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          isOpen: true,
        }
      }

      return {
        items: [...state.items, { product, quantity: 1, selectedColor: color, selectedSize: size }],
        isOpen: true,
      }
    })
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    }))
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId)
      return
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    }))
  },

  clearCart: () => set({ items: [] }),

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0)
  },

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  },
}))
