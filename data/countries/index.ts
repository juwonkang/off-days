import type { Country } from "../types";
import { singapore } from "./singapore";
import { shanghai } from "./shanghai";

// 홈 화면 카드 순서 = 이 배열 순서
// 다음 나라 공개할 땐 singapore.ts 복사해서 만들고 status: "live" 로 바꾸면 돼요.
export const countries: Country[] = [
  singapore,
  {
    slug: "batam",
    name: "바탐",
    nameEn: "Batam",
    flag: "🇮🇩",
    status: "soon",
    accent: "from-[#0f766e] to-[#14b8a6]",
    tagline: "싱가포르에서 페리 타고 1시간, 하루 숙박비 3만원대",
  },
  shanghai,
  {
    slug: "nha-trang",
    name: "나트랑",
    nameEn: "Nha Trang",
    flag: "🇻🇳",
    status: "soon",
    accent: "from-[#9a3412] to-[#f59e0b]",
    tagline: "카피바라 보러 간 바닷가 도시",
  },
  {
    slug: "okinawa",
    name: "오키나와",
    nameEn: "Okinawa",
    flag: "🇯🇵",
    status: "soon",
    accent: "from-[#0c4a6e] to-[#38bdf8]",
    tagline: "12월 출발 예정",
  },
];

export const liveCountries = countries.filter((c) => c.status === "live");
export const getCountry = (slug: string) => countries.find((c) => c.slug === slug && c.status === "live");
export const getRoute = (routeSlug: string) => liveCountries.find((c) => c.route?.slug === routeSlug);
