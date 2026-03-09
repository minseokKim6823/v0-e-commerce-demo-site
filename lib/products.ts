export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  category: string
  image: string
  description: string
  colors?: string[]
  sizes?: string[]
  isNew?: boolean
  isBestSeller?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "미니멀 울 코트",
    price: 289000,
    originalPrice: 350000,
    category: "아우터",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    description: "프리미엄 울 소재로 제작된 미니멀한 디자인의 코트입니다. 깔끔한 실루엣과 고급스러운 마감이 특징입니다.",
    colors: ["블랙", "카멜", "그레이"],
    sizes: ["S", "M", "L", "XL"],
    isBestSeller: true,
  },
  {
    id: "2",
    name: "오버사이즈 니트",
    price: 128000,
    category: "상의",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    description: "부드러운 촉감의 캐시미어 블렌드 니트입니다. 편안한 핏으로 데일리하게 착용하기 좋습니다.",
    colors: ["아이보리", "네이비", "베이지"],
    sizes: ["FREE"],
    isNew: true,
  },
  {
    id: "3",
    name: "와이드 슬랙스",
    price: 98000,
    category: "하의",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    description: "세련된 와이드 핏의 슬랙스입니다. 고급 원단을 사용하여 착용감이 뛰어납니다.",
    colors: ["블랙", "차콜", "베이지"],
    sizes: ["S", "M", "L"],
    isBestSeller: true,
  },
  {
    id: "4",
    name: "레더 토트백",
    price: 248000,
    originalPrice: 298000,
    category: "가방",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    description: "천연 가죽으로 제작된 클래식한 토트백입니다. 넉넉한 수납 공간과 세련된 디자인이 특징입니다.",
    colors: ["블랙", "브라운", "탄"],
    isNew: true,
  },
  {
    id: "5",
    name: "캐시미어 머플러",
    price: 158000,
    category: "악세서리",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80",
    description: "100% 캐시미어로 제작된 부드러운 머플러입니다. 가볍고 따뜻한 착용감을 제공합니다.",
    colors: ["그레이", "카멜", "버건디"],
    isBestSeller: true,
  },
  {
    id: "6",
    name: "미니멀 셔츠",
    price: 88000,
    category: "상의",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    description: "깔끔한 핏의 코튼 셔츠입니다. 다양한 스타일링에 활용하기 좋은 베이직 아이템입니다.",
    colors: ["화이트", "스카이블루", "스트라이프"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "7",
    name: "울 블렌드 가디건",
    price: 138000,
    category: "상의",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    description: "따뜻한 울 블렌드 소재의 가디건입니다. 레이어드하기 좋은 디자인입니다.",
    colors: ["크림", "그레이", "네이비"],
    sizes: ["S", "M", "L"],
    isNew: true,
  },
  {
    id: "8",
    name: "레더 벨트",
    price: 68000,
    category: "악세서리",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    description: "이탈리안 레더로 제작된 클래식한 벨트입니다. 어떤 스타일에도 잘 어울립니다.",
    colors: ["블랙", "브라운"],
  },
]

export const categories = ["전체", "아우터", "상의", "하의", "가방", "악세서리"]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ko-KR").format(price) + "원"
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "전체") return products
  return products.filter((p) => p.category === category)
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller)
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew)
}
