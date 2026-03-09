import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              MODO
            </Link>
            <p className="mt-4 text-sm text-background/70 max-w-sm leading-relaxed">
              미니멀하고 세련된 라이프스타일을 제안합니다.
              일상에 품격을 더하는 프리미엄 아이템을 만나보세요.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">쇼핑</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link href="/products" className="hover:text-background transition-colors">
                  전체 상품
                </Link>
              </li>
              <li>
                <Link href="/products?category=아우터" className="hover:text-background transition-colors">
                  아우터
                </Link>
              </li>
              <li>
                <Link href="/products?category=상의" className="hover:text-background transition-colors">
                  상의
                </Link>
              </li>
              <li>
                <Link href="/products?category=하의" className="hover:text-background transition-colors">
                  하의
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">고객지원</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  브랜드 소개
                </Link>
              </li>
              <li>
                <span className="hover:text-background transition-colors cursor-pointer">
                  배송 안내
                </span>
              </li>
              <li>
                <span className="hover:text-background transition-colors cursor-pointer">
                  교환/반품
                </span>
              </li>
              <li>
                <span className="hover:text-background transition-colors cursor-pointer">
                  FAQ
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/50">
              © 2026 MODO. All rights reserved. 데모 사이트입니다.
            </p>
            <div className="flex items-center gap-6 text-xs text-background/50">
              <span className="hover:text-background/70 cursor-pointer">이용약관</span>
              <span className="hover:text-background/70 cursor-pointer">개인정보처리방침</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
