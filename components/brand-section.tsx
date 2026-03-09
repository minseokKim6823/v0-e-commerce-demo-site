import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function BrandSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Brand story"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:pl-8">
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-light leading-tight text-balance">
              절제된 아름다움,
              <br />
              <span className="font-medium">일상의 품격</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              MODO는 &apos;방식&apos;을 의미하는 이탈리아어에서 영감을 받았습니다.
              우리는 옷을 입는 것이 단순한 행위가 아닌, 자신을 표현하는 하나의 방식이라고 믿습니다.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              불필요한 것을 덜어내고 본질에 집중하는 미니멀한 디자인,
              그리고 편안한 착용감을 위한 프리미엄 소재.
              MODO와 함께 당신만의 스타일을 완성하세요.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/about">브랜드 더 알아보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
