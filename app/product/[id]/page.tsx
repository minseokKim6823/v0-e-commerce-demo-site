"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { ProductCard } from "@/components/product-card"
import { getProductById, products, formatPrice } from "@/lib/products"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Minus, Plus, ChevronLeft, Truck, RefreshCw, Shield } from "lucide-react"

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const product = getProductById(id)
  
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "")
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "")
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedColor, selectedSize)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/products"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            상품 목록으로
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-foreground text-background text-sm px-3 py-1 rounded">
                  NEW
                </span>
              )}
              {product.isBestSeller && !product.isNew && (
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm px-3 py-1 rounded">
                  BEST
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-2xl sm:text-3xl font-medium">{product.name}</h1>
              
              <div className="flex items-center gap-3 mt-4">
                <span className="text-2xl font-semibold">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {product.colors && product.colors.length > 0 && (
                <div className="mt-8">
                  <p className="text-sm font-medium mb-3">컬러: {selectedColor}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <Button
                        key={color}
                        variant={selectedColor === color ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-medium mb-3">사이즈: {selectedSize}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <p className="text-sm font-medium mb-3">수량</p>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                size="lg"
                className="mt-8"
                onClick={handleAddToCart}
              >
                장바구니 담기 - {formatPrice(product.price * quantity)}
              </Button>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Truck className="h-5 w-5" />
                  <span>5만원 이상 무료배송 / 1-3일 내 출고</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <RefreshCw className="h-5 w-5" />
                  <span>7일 이내 교환/반품 가능</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Shield className="h-5 w-5" />
                  <span>100% 정품 보장</span>
                </div>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <h2 className="text-2xl font-light mb-8">관련 상품</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
