// 나라 하나 = Country 객체 하나. 새 나라는 data/countries/ 에 파일 하나 추가하고
// data/countries/index.ts 에 등록하면 홈 카드·나라 페이지·루트 페이지가 자동으로 생겨요.

export type Photo = {
  src: string; // /images/<나라>/<파일>.jpg
  alt: string;
  caption?: string;
};

export type Tip = {
  title: string;
  body: string;
  photo?: Photo;
  tone?: "tip" | "warn";
};

export type Stop = {
  time: string; // "18:40"
  title: string;
  area?: string;
  body: string;
  photos: Photo[];
  price?: string;
  tips?: string[]; // 💡
  warns?: string[]; // ⚠️
  map?: string; // 구글맵 검색어
  night?: boolean; // 밤 섹션(다크)으로 표시
  move?: { icon: "walk" | "metro" | "bike"; text: string }; // 다음 장소까지 이동
};

export type BudgetRow = { item: string; cost: string; strong?: boolean };

export type Country = {
  slug: string; // URL: /singapore
  name: string; // 싱가포르
  nameEn: string; // Singapore
  flag: string;
  status: "live" | "soon";
  cover?: Photo;
  accent?: string; // 카드 색 (soon 카드 배경)
  tagline: string;
  period?: string;
  leave?: string; // 연차 사용
  chips?: string[];
  facts?: { label: string; value: string; note?: string }[];
  tips?: Tip[];
  gallery?: Photo[];
  reelUrl?: string; // 댓글 달 릴스
  route?: {
    slug: string; // 숨김 URL: /r/<slug>  (DM으로만 공유)
    title: string;
    summary: string[];
    stops: Stop[];
    budget: BudgetRow[];
    checklist: string[];
    updated: string;
  };
};
