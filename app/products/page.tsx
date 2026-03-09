"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/products"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "전체")
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default")

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === "전체"
      ? products
      : products.filter((p) => p.category === selectedCategory)

    if (sortBy === "price-asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [selectedCategory, sortBy])

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10">
            <h1 className="text-3xl font-light">전체 상품</h1>
            <p className="text-muted-foreground mt-2">
              {filteredProducts.length}개의 상품
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-3 py-2 text-sm border border-border rounded-md bg-background"
            >
              <option value="default">기본 정렬</option>
              <option value="price-asc">낮은 가격순</option>
              <option value="price-desc">높은 가격순</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">해당 카테고리에 상품이 없습니다.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
