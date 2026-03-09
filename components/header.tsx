"use client"

import Link from "next/link"
import { ShoppingBag, Menu, X, Search, User } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems, openCart } = useCart()
  const totalItems = getTotalItems()

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              MODO
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                전체 상품
              </Link>
              <Link
                href="/products?category=아우터"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                아우터
              </Link>
              <Link
                href="/products?category=상의"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                상의
              </Link>
              <Link
                href="/products?category=하의"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                하의
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                브랜드
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={openCart}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-foreground text-background text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/products" className="text-sm hover:text-muted-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                전체 상품
              </Link>
              <Link href="/products?category=아우터" className="text-sm hover:text-muted-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                아우터
              </Link>
              <Link href="/products?category=상의" className="text-sm hover:text-muted-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                상의
              </Link>
              <Link href="/products?category=하의" className="text-sm hover:text-muted-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                하의
              </Link>
              <Link href="/about" className="text-sm hover:text-muted-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                브랜드
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
