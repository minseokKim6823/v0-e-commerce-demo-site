import { getBestSellers } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturedProducts() {
  const products = getBestSellers()

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-2">
              Best Sellers
            </p>
            <h2 className="text-3xl font-light">베스트셀러</h2>
          </div>
          <Link
            href="/products"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            전체보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
