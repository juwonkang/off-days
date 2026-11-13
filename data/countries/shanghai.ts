import type { Country } from "../types";

const img = (name: string) => `/images/shanghai/${name}.jpg`;

// TODO 표시된 곳만 채우면 돼요 (가게 이름·가격·시간 등 내가 직접 다녀온 정보)

export const shanghai: Country = {
  slug: "shanghai",
  name: "상하이",
  nameEn: "Shanghai",
  flag: "🇨🇳",
  status: "live",
  cover: { src: img("pudong-night"), alt: "와이탄에서 본 푸동 야경과 동방명주" },
  tagline: "와이탄 야경, 사람 바다 말고 32층에서 조용히",
  period: "2026.09 · 3박 4일",
  leave: "목 퇴근 후 출발 + 연차 1개", // TODO 확인
  chips: ["무비자 30일", "와이탄 걸어서 가는 숙소", "야경 + 양꼬치"],
  reelUrl: "https://www.instagram.com/juwon_ick/reels/", // TODO 상하이 릴스 주소로
  facts: [
    { label: "비자", value: "무비자", note: "한국인 30일 · 2026년 말까지 연장 (가기 전 확인)" },
    { label: "숙소", value: "와이탄 도보", note: "한커우루 호스텔, 야경 보고 걸어서 복귀" },
    { label: "도착", value: "21:40", note: "목요일 밤 홍차오 T1" },
    { label: "야경 명당", value: "32층", note: "강변 인파 피해서 위에서" },
  ],
  tips: [
    {
      title: "와이탄 야경은 32층에서",
      body: "강변은 밤마다 사람 바다라 사진 한 장 찍기도 힘들어요. 위에서 보면 황푸강이 휘어지는 게 한눈에 보이고 조용해요.", // TODO 장소 이름·가는 법 추가
      photo: { src: img("high-view"), alt: "높은 곳에서 본 푸동 야경" },
    },
    {
      title: "강변 가기 전 과일가게에서 망고",
      body: "와이탄 가는 길 과일가게에서 망고 컵 하나 사서 들고 가요. 동방명주 보면서 먹는 게 이 코스 포인트.", // TODO 가게 위치·가격
      photo: { src: img("fruit-shop"), alt: "상하이 과일가게" },
    },
    {
      title: "난징동루 로컬 양꼬치",
      body: "관광객 식당 말고 현지인 가득한 양꼬치집에서 칭다오 한 병. 난징동루에서 와이탄까지 걸어서 이어져요.", // TODO 가게 이름
      photo: { src: img("skewers"), alt: "양꼬치와 칭다오 맥주" },
    },
    {
      title: "숙소는 와이탄 걸어갈 거리로",
      body: "야경을 늦게까지 보고 걸어서 들어갈 수 있는 게 제일 편해요. 한커우루 쪽은 와이탄 옛 건물 거리랑 바로 붙어 있어요.",
      photo: { src: img("bund-street"), alt: "와이탄 옛 건물 거리" },
    },
    {
      title: "낮엔 쑤저우허 강변 + M50",
      body: "산처럼 생긴 건물 천안천수(1000 Trees) 옆 강변 산책하고, 바로 옆 M50 창의원 갤러리 구경. 사람 적고 사진 잘 나와요.",
      photo: { src: img("trees-river"), alt: "쑤저우허 강변과 천안천수" },
    },
    {
      title: "결제는 알리페이에 카드 연결",
      body: "출국 전에 알리페이 앱에 해외결제 카드 연결해두면 식당·과일가게·지하철까지 거의 다 돼요.",
      tone: "warn",
      photo: { src: img("nanjing-road"), alt: "난징동루 밤거리" },
    },
  ],
  gallery: [
    { src: img("pudong-night"), alt: "푸동 야경", caption: "와이탄에서 본 동방명주" },
    { src: img("high-river"), alt: "높은 곳에서 본 황푸강", caption: "위에서 본 황푸강" },
    { src: img("alley"), alt: "식물 가득한 골목", caption: "M50 가는 골목" },
    { src: img("m50-art"), alt: "M50 갤러리 작품", caption: "M50 창의원" },
    { src: img("clock-tower"), alt: "와이탄 시계탑", caption: "와이탄 시계탑" },
    { src: img("bund-building"), alt: "와이탄 건물", caption: "와이탄 옛 건물들" },
    { src: img("mango"), alt: "망고 컵", caption: "망고 들고 야경" },
    { src: img("river-night"), alt: "황푸강 유람선", caption: "황푸강 유람선" },
    { src: img("balcony"), alt: "와이탄 강변", caption: "와이탄 강변" },
    { src: img("nanjing-road"), alt: "난징동루", caption: "난징동루" },
  ],
  route: {
    slug: "sh-0918-p4x8",
    title: "상하이 하루 루트",
    updated: "2026.11",
    headline: ["낮엔 강변 산책,", "밤엔 와이탄 위에서"],
    dayLabel: "낮 · 쑤저우허 강변이랑 갤러리",
    nightLabel: "밤 · 양꼬치 → 망고 → 와이탄 야경",
    summary: [
      "🌳 낮엔 쑤저우허 강변 + M50 갤러리",
      "🍢 저녁은 난징동루 로컬 양꼬치",
      "🌃 망고 들고 와이탄, 마무리는 32층",
    ],
    stops: [
      {
        time: "오후", // TODO 실제 시간 (예: 14:00)
        title: "M50 창의원",
        area: "모간산루 · 갤러리 거리",
        body: "옛 공장 건물을 갤러리로 바꾼 예술 거리. 식물 가득한 골목이랑 작은 갤러리들 구경하면서 천천히 걷기 좋아요.",
        photos: [
          { src: img("m50-gallery"), alt: "M50 갤러리 앞" },
          { src: img("m50-art"), alt: "M50 갤러리 작품" },
          { src: img("alley"), alt: "식물 가득한 골목" },
        ],
        map: "M50 Creative Park Shanghai",
        move: { icon: "walk", text: "바로 옆 쑤저우허 강변으로" },
      },
      {
        time: "산책",
        title: "쑤저우허 강변 · 천안천수",
        area: "1000 Trees",
        body: "나무 심은 기둥이 산처럼 쌓인 건물 천안천수 옆 강변 산책로. 앉아서 쉬기 좋은 자리가 많아요.",
        photos: [{ src: img("trees-river"), alt: "쑤저우허 강변과 천안천수" }],
        map: "1000 Trees Shanghai",
        move: { icon: "metro", text: "지하철로 난징동루 방향" }, // TODO 노선·역 이름
      },
      {
        time: "저녁",
        title: "난징동루 로컬 양꼬치",
        area: "난징동루", // TODO 가게 이름
        body: "현지인 가득한 양꼬치집에서 양꼬치에 칭다오 한 병.",
        photos: [
          { src: img("skewers"), alt: "양꼬치와 칭다오" },
          { src: img("nanjing-road"), alt: "난징동루 밤거리" },
        ],
        // price: "TODO",
        tips: ["난징동루 메인 거리는 밤에 사람이 엄청 많아요"],
        map: "Nanjing Road East Shanghai",
        night: true,
        move: { icon: "walk", text: "난징동루 따라 와이탄 방향으로 걷기" },
      },
      {
        time: "밤",
        title: "과일가게에서 망고 사기",
        area: "와이탄 가는 길", // TODO 가게 위치
        body: "와이탄 들어가기 전 과일가게에서 망고 컵 하나. 강변에서 야경 보면서 먹어요.",
        photos: [
          { src: img("fruit-shop"), alt: "과일가게" },
          { src: img("mango"), alt: "망고 컵과 동방명주" },
        ],
        night: true,
        move: { icon: "walk", text: "길 건너 와이탄 강변으로" },
      },
      {
        time: "야경",
        title: "와이탄 강변",
        area: "The Bund",
        body: "건너편 푸동의 동방명주랑 고층 빌딩, 등 뒤로는 불 켜진 옛 유럽풍 건물들. 강변은 사람 바다라 사진은 빈자리 보이면 바로.",
        photos: [
          { src: img("pudong-night"), alt: "와이탄에서 본 푸동" },
          { src: img("river-night"), alt: "황푸강 유람선" },
          { src: img("clock-tower"), alt: "와이탄 시계탑" },
          { src: img("bund-building"), alt: "와이탄 옛 건물" },
        ],
        map: "The Bund Shanghai",
        night: true,
        move: { icon: "walk", text: "인파 피해서 32층으로" }, // TODO 가는 법
      },
      {
        time: "32층",
        title: "위에서 조용히 보는 와이탄", // TODO 장소 이름
        area: "32층",
        body: "강변 인파 없이 황푸강이 휘어지는 모습까지 한눈에. 이 루트의 하이라이트예요.",
        photos: [
          { src: img("high-view"), alt: "높은 곳에서 본 푸동" },
          { src: img("high-river"), alt: "높은 곳에서 본 황푸강" },
        ],
        // price: "TODO 입장료/음료값",
        map: "The Bund Shanghai", // TODO 장소 영문 이름
        night: true,
        move: { icon: "walk", text: "와이탄 옛 건물 거리 따라 숙소까지 걸어서" },
      },
      {
        time: "귀가",
        title: "와이탄 옛 건물 거리 → 숙소",
        area: "한커우루",
        body: "불 켜진 옛 건물 거리 따라 걸으면 숙소까지 야경 산책 코스.",
        photos: [
          { src: img("bund-street"), alt: "와이탄 옛 건물 거리" },
          { src: img("balcony"), alt: "와이탄 강변" },
        ],
        night: true,
      },
    ],
    budget: [
      { item: "M50 · 쑤저우허 강변 · 와이탄", cost: "무료" },
      { item: "양꼬치 + 칭다오", cost: "TODO" },
      { item: "망고 컵", cost: "TODO" },
      { item: "32층", cost: "TODO" },
      { item: "합계", cost: "TODO", strong: true },
    ],
    checklist: [
      "여권 (한국인 무비자 30일 · 출발 전 정책 확인)",
      "알리페이에 해외결제 카드 연결",
      "와이탄 걸어서 갈 수 있는 숙소",
      "밤 강변은 사람 많으니 가방은 앞으로",
    ],
  },
};
