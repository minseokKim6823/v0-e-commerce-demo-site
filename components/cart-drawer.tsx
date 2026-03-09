"use client"

import Image from "next/image"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/products"
import { Button } from "@/components/ui/button"

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotalPrice } = useCart()
  const totalPrice = getTotalPrice()
  const shippingFee = totalPrice >= 50000 ? 0 : 3000

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold">장바구니</h2>
          <Button variant="ghost" size="icon" onClick={closeCart}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingBag className="h-16 w-16 stroke-1" />
            <p>장바구니가 비어있습니다</p>
            <Button variant="outline" onClick={closeCart}>
              쇼핑 계속하기
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4">
                  <div className="relative h-24 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">{item.product.name}</h3>
                    <div className="text-xs text-muted-foreground mt-1">
                      {item.selectedColor && <span>{item.selectedColor}</span>}
                      {item.selectedColor && item.selectedSize && <span> / </span>}
                      {item.selectedSize && <span>{item.selectedSize}</span>}
                    </div>
                    <p className="text-sm font-semibold mt-1">{formatPrice(item.product.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-auto text-muted-foreground"
                        onClick={() => removeItem(item.product.id)}
                      >
                        삭제
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">상품 금액</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">배송비</span>
                  <span>{shippingFee === 0 ? "무료" : formatPrice(shippingFee)}</span>
                </div>
                {totalPrice < 50000 && (
                  <p className="text-xs text-muted-foreground">
                    {formatPrice(50000 - totalPrice)} 더 구매시 무료배송
                  </p>
                )}
                <div className="flex justify-between pt-2 border-t border-border text-base font-semibold">
                  <span>총 결제금액</span>
                  <span>{formatPrice(totalPrice + shippingFee)}</span>
                </div>
              </div>
              <Button className="w-full" size="lg">
                결제하기
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
