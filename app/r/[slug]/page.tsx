import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getRoute, liveCountries } from "@/data/countries";
import type { Stop } from "@/data/types";
import { site } from "@/data/site";
import { Footer, Header } from "@/components/Chrome";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Bike, Check, Metro, Pin, Walk } from "@/components/Icons";

// DM으로만 공유하는 상세 루트 페이지
// - 메뉴/홈에서 링크 안 걸림
// - 검색엔진 노출 안 됨 (noindex)
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return liveCountries.filter((c) => c.route).map((c) => ({ slug: c.route!.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getRoute((await params).slug);
  return {
    title: c?.route?.title ?? "루트",
    robots: { index: false, follow: false, nocache: true },
    openGraph: { images: c?.cover ? [c.cover.src] : [] },
  };
}

const moveIcon = { walk: Walk, metro: Metro, bike: Bike };

export default async function RoutePage({ params }: Props) {
  const c = getRoute((await params).slug);
  if (!c?.route) notFound();
  const r = c.route;
  const day = r.stops.filter((s) => !s.night);
  const night = r.stops.filter((s) => s.night);

  return (
    <>
      <Header />
      <main>
        {/* 표지 */}
        <section className="px-5 pb-10 pt-28 sm:px-8 sm:pt-36">
          <div className="mx-auto max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-lime px-3 py-1 text-xs font-bold">💌 DM으로 받은 분만 보는 페이지</p>
            <h1 className="mt-5 text-[clamp(40px,8vw,72px)] font-black leading-[0.95] tracking-[-0.055em]">
              {c.flag} {r.title}
            </h1>
            <p className="mt-4 text-[17px] text-muted">
              {c.leave} · 혼자 · {c.period} · 실제 다닌 시간과 결제 금액 기준
            </p>
            <div className="mt-8 grid gap-2.5 sm:grid-cols-3">
              {r.summary.map((s) => (
                <div key={s} className="rounded-2xl border border-ink/10 bg-white/70 p-4 text-[15px] font-semibold leading-snug">{s}</div>
              ))}
            </div>
          </div>
        </section>

        {/* 시간 점프 */}
        <nav className="sticky top-[76px] z-40 px-5 sm:px-8">
          <div className="mx-auto flex max-w-3xl gap-1.5 overflow-x-auto rounded-full border border-ink/10 bg-paper/80 p-1.5 backdrop-blur-xl no-scrollbar">
            {r.stops.map((s) => (
              <a key={s.time} href={`#t${s.time.replace(":", "")}`} className="shrink-0 rounded-full px-3 py-1.5 font-serif text-[17px] italic transition hover:bg-ink hover:text-paper">
                {s.time}
              </a>
            ))}
            <a href="#budget" className="shrink-0 rounded-full px-3 py-1.5 text-[13px] font-bold transition hover:bg-ink hover:text-paper">예산</a>
          </div>
        </nav>

        {/* 낮 */}
        <section className="px-5 pb-10 pt-14 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <PartTitle en="Day" ko={r.dayLabel ?? "오전 ~ 오후 · 더위 피해서 움직이기"} />
            <ol>{day.map((s, i) => <StopItem key={s.time} s={s} last={i === day.length - 1 && night.length === 0} />)}</ol>
          </div>
        </section>

        {/* 밤 */}
        {night.length > 0 && (
          <section className="bg-night px-5 pb-16 pt-20 text-white sm:px-8">
            <div className="mx-auto max-w-3xl">
              <PartTitle en="Night" ko={r.nightLabel ?? "노을 ~ 밤 · 이 루트의 메인"} dark />
              <ol>{night.map((s, i) => <StopItem key={s.time} s={s} dark last={i === night.length - 1} />)}</ol>
            </div>
          </section>
        )}

        {/* 예산 + 체크리스트 */}
        <section id="budget" className="scroll-mt-32 px-5 py-20 sm:px-8">
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            <Reveal className="rounded-[28px] bg-ink p-7 text-paper">
              <p className="font-serif text-2xl italic text-lime">Budget</p>
              <p className="mt-1 text-xl font-bold">1인 예산 (입장·체험)</p>
              <ul className="mt-6 divide-y divide-white/10">
                {r.budget.map((b) => (
                  <li key={b.item} className={`flex items-baseline justify-between gap-4 py-3 ${b.strong ? "text-lime" : ""}`}>
                    <span className={`text-[15px] ${b.strong ? "font-bold" : "text-white/75"}`}>{b.item}</span>
                    <span className={`shrink-0 ${b.strong ? "text-2xl font-black" : "font-semibold"}`}>{b.cost}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} className="rounded-[28px] border border-ink/10 bg-white/70 p-7">
              <p className="font-serif text-2xl italic text-sun">Checklist</p>
              <p className="mt-1 text-xl font-bold">가기 전에 챙기기</p>
              <ul className="mt-6 space-y-3">
                {r.checklist.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-snug">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-lime"><Check className="size-3" /></span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-[28px] border border-dashed border-ink/25 p-7 text-center">
            <p className="text-lg font-bold">도움 됐으면 저장하고, 같이 갈 사람한테 공유해주세요 ✈️</p>
            <p className="mt-1 text-sm text-muted">가격·운영시간은 {r.updated} 공식 홈페이지 기준이에요. 가기 전에 한 번 더 확인하세요.</p>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-paper">
              다음 루트도 받아보기 {site.author} <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PartTitle({ en, ko, dark }: { en: string; ko: string; dark?: boolean }) {
  return (
    <Reveal className="mb-10 flex items-baseline gap-3">
      <p className={`font-serif text-5xl italic ${dark ? "text-lime" : "text-sun"}`}>{en}</p>
      <p className={`text-[15px] font-semibold ${dark ? "text-white/60" : "text-muted"}`}>{ko}</p>
    </Reveal>
  );
}

function StopItem({ s, dark, last }: { s: Stop; dark?: boolean; last?: boolean }) {
  const Move = s.move ? moveIcon[s.move.icon] : null;
  const sub = dark ? "text-white/65" : "text-muted";
  return (
    <li id={`t${s.time.replace(":", "")}`} className="relative scroll-mt-36 pl-[74px] sm:pl-24">
      {/* 타임라인 선 */}
      {!last && <span className={`absolute bottom-0 left-[27px] top-14 w-px sm:left-[35px] ${dark ? "bg-white/15" : "bg-ink/15"}`} />}
      <span
        className={`absolute left-0 top-0 grid size-14 place-items-center rounded-full font-serif text-[19px] italic sm:size-[70px] sm:text-2xl ${
          dark ? "bg-lime text-ink" : "bg-ink text-paper"
        }`}
      >
        {s.time}
      </span>

      <Reveal className="pb-6">
        {s.area && <p className={`pt-1 text-sm font-semibold ${sub}`}>{s.area}</p>}
        <h3 className="mt-0.5 text-[26px] font-extrabold leading-tight tracking-[-0.04em] sm:text-3xl">{s.title}</h3>

        {/* 사진 */}
        <div className="-mr-5 mt-5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-1 pr-5 no-scrollbar sm:mr-0 sm:pr-0">
          {s.photos.map((p, i) => (
            <div key={p.src} className={`relative shrink-0 snap-start overflow-hidden rounded-[20px] ${i === 0 ? "aspect-[4/5] w-[68%] sm:w-[48%]" : "aspect-[4/5] w-[46%] sm:w-[32%]"}`}>
              <Image src={p.src} alt={p.alt} fill sizes="(min-width:640px) 320px, 70vw" className="object-cover" />
            </div>
          ))}
        </div>

        <p className={`mt-5 text-[16px] leading-relaxed ${dark ? "text-white/85" : "text-ink-2"}`}>{s.body}</p>

        <div className="mt-4 space-y-2">
          {s.price && (
            <p className={`inline-flex rounded-full px-3.5 py-1.5 text-sm font-bold ${dark ? "bg-white text-ink" : "bg-lime"}`}>🎟 {s.price}</p>
          )}
          {s.tips?.map((t) => (
            <p key={t} className={`rounded-2xl px-4 py-3 text-[15px] font-medium ${dark ? "bg-[#1e2230]" : "bg-[#fff6d6]"}`}>💡 {t}</p>
          ))}
          {s.warns?.map((t) => (
            <p key={t} className={`rounded-2xl px-4 py-3 text-[15px] font-medium ${dark ? "bg-[#3a1a14] text-[#ffc9b8]" : "bg-[#ffe6dd] text-[#8a2a10]"}`}>⚠️ {t}</p>
          ))}
        </div>

        {s.map && (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.map)}`}
            target="_blank"
            rel="noreferrer"
            className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline ${sub}`}
          >
            <Pin /> 구글맵에서 보기
          </a>
        )}

        {s.move && Move && (
          <div className={`mt-6 flex items-start gap-3 rounded-2xl border border-dashed p-4 text-[15px] leading-snug ${dark ? "border-white/20 text-white/80" : "border-ink/20 text-ink-2"}`}>
            <span className={`grid size-8 shrink-0 place-items-center rounded-full ${dark ? "bg-white/10" : "bg-ink/5"}`}>
              <Move />
            </span>
            <span className="pt-1">{s.move.text}</span>
          </div>
        )}
      </Reveal>
    </li>
  );
}
