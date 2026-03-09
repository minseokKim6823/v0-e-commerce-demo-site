import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <p className="text-background/80 text-sm tracking-widest uppercase mb-4">
            2026 Spring Collection
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-background leading-tight text-balance">
            미니멀한 일상의
            <br />
            <span className="font-medium">새로운 시작</span>
          </h1>
          <p className="mt-6 text-background/80 text-lg leading-relaxed max-w-md">
            절제된 아름다움과 편안한 착용감.
            MODO의 새로운 컬렉션을 만나보세요.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link href="/products">
                컬렉션 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-background text-background hover:bg-background/10">
              <Link href="/about">브랜드 스토리</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
