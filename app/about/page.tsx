import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative h-[60vh] flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80"
            alt="About hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="relative z-10 text-center text-background">
            <p className="text-sm tracking-widest uppercase mb-4">About MODO</p>
            <h1 className="text-4xl sm:text-5xl font-light">우리의 이야기</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light mb-8">브랜드 철학</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MODO는 이탈리아어로 &apos;방식&apos;을 의미합니다.
              우리는 옷이 단순한 의복이 아닌, 자신을 표현하는 하나의 방식이라고 믿습니다.
              불필요한 것을 덜어내고 본질에 집중하는 미니멀한 디자인,
              그리고 일상에서 편안하게 착용할 수 있는 품질.
              MODO는 당신의 일상에 조용한 품격을 더합니다.
            </p>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-foreground/10 flex items-center justify-center">
                  <span className="text-2xl font-light">01</span>
                </div>
                <h3 className="text-xl font-medium mb-4">미니멀 디자인</h3>
                <p className="text-muted-foreground leading-relaxed">
                  불필요한 장식을 배제하고 깔끔한 실루엣과 절제된 디테일로
                  시간이 지나도 변하지 않는 스타일을 추구합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-foreground/10 flex items-center justify-center">
                  <span className="text-2xl font-light">02</span>
                </div>
                <h3 className="text-xl font-medium mb-4">프리미엄 소재</h3>
                <p className="text-muted-foreground leading-relaxed">
                  캐시미어, 메리노 울, 이탈리안 레더 등
                  엄선된 최고급 소재만을 사용하여 제작합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-foreground/10 flex items-center justify-center">
                  <span className="text-2xl font-light">03</span>
                </div>
                <h3 className="text-xl font-medium mb-4">지속 가능성</h3>
                <p className="text-muted-foreground leading-relaxed">
                  환경을 생각하는 생산 공정과 윤리적인 소싱으로
                  지속 가능한 패션을 실천합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&q=80"
                    alt="Fashion detail 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
                    alt="Fashion detail 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
                  Our Process
                </p>
                <h2 className="text-3xl font-light mb-6">장인 정신</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  각 제품은 숙련된 장인들의 손을 거쳐 탄생합니다.
                  디자인부터 생산까지 모든 과정에서 품질에 대한 타협 없이,
                  오래도록 사랑받을 수 있는 제품을 만들기 위해 노력합니다.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  하나의 코트를 완성하기까지 약 200개의 공정과
                  40시간 이상의 작업 시간이 소요됩니다.
                  이러한 정성이 MODO 제품의 완성도를 만들어냅니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-foreground text-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light mb-6">컬렉션 둘러보기</h2>
            <p className="text-background/70 mb-8">
              MODO의 새로운 시즌 컬렉션을 만나보세요.
            </p>
            <Button asChild size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
              <Link href="/products">
                쇼핑하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
