import Image from "next/image"
import Link from "next/link"
import { type Product, formatPrice } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-foreground text-background text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        {product.isBestSeller && !product.isNew && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
            BEST
          </span>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-balance">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {product.colors && (
          <div className="flex items-center gap-1 pt-1">
            {product.colors.slice(0, 3).map((color) => (
              <span
                key={color}
                className="text-xs text-muted-foreground"
              >
                {color}
              </span>
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
