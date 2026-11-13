import Image from "next/image";
import Link from "next/link";
import { countries } from "@/data/countries";
import { singapore } from "@/data/countries/singapore";
import { Footer, Header } from "@/components/Chrome";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";
import type { Country } from "@/data/types";

const strip = [
  "celavi-aerial", "merlion", "cloud-forest-falls", "shophouse-color", "barrage-sunset",
  "maxwell", "spectra", "buddha-tooth", "flyer-garden", "bay-end",
].map((n) => `/images/singapore/${n}.jpg`);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold text-muted">
                <span className="size-1.5 rounded-full bg-sun" /> 직장인 · 혼자 · 연차 최소
              </p>
              <h1 className="text-[clamp(40px,7.4vw,84px)] font-extrabold leading-[1.02] tracking-[-0.045em]">
                연차 쪼개서,
                <br />
                혼자 떠난 <span className="font-serif font-normal italic tracking-[-0.02em] text-sun">기록</span>
              </h1>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
                남들 다 가는 데 말고, 실제로 걸은 동선과 결제한 금액 그대로.
                <br className="hidden sm:block" /> 나라별 꿀팁만 골라 담았어요.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#countries" className="rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-paper transition hover:bg-sun">
                  나라별 노트 보기
                </a>
                <Link href={`/${singapore.slug}`} className="rounded-full border border-ink/20 px-6 py-3.5 text-sm font-bold transition hover:border-ink">
                  🇸🇬 최신: 싱가포르
                </Link>
              </div>
            </div>

            {/* 사진 스택 */}
            <div className="relative mx-auto h-[420px] w-full max-w-[460px] sm:h-[520px]">
              {[
                { src: "celavi-aerial", cls: "left-0 top-6 w-[52%] [--r:-7deg]", d: "0s" },
                { src: "barrage-lawn", cls: "right-0 top-0 w-[50%] [--r:6deg]", d: "1.2s" },
                { src: "cloud-forest-falls", cls: "bottom-0 left-[24%] w-[50%] [--r:-2deg]", d: "2.4s" },
              ].map((p) => (
                <div
                  key={p.src}
                  className={`absolute aspect-[3/4] animate-float overflow-hidden rounded-[22px] border-[6px] border-white bg-white shadow-[0_30px_60px_-20px_rgba(21,19,16,0.45)] ${p.cls}`}
                  style={{ animationDelay: p.d }}
                >
                  <Image src={`/images/singapore/${p.src}.jpg`} alt="" fill sizes="240px" className="object-cover" priority />
                </div>
              ))}
              <div className="absolute -right-2 bottom-10 rotate-6 rounded-full bg-lime px-4 py-2 text-sm font-bold shadow-lg">
                전부 직접 찍음 📸
              </div>
            </div>
          </div>
        </section>

        {/* 사진 흐름 */}
        <section aria-hidden className="overflow-hidden border-y border-ink/10 bg-paper-2 py-4">
          <div className="flex w-max animate-marquee gap-3">
            {[...strip, ...strip].map((src, i) => (
              <div key={i} className="relative h-28 w-20 shrink-0 overflow-hidden rounded-xl sm:h-36 sm:w-28">
                <Image src={src} alt="" fill sizes="112px" className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* 나라 카드 */}
        <section id="countries" className="scroll-mt-24 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="font-serif text-2xl italic text-sun">Countries</p>
                <h2 className="mt-1 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">어디로 가볼까요</h2>
              </div>
              <p className="hidden max-w-xs text-right text-sm text-muted sm:block">다녀온 순서대로 하나씩 열려요. 다음 나라는 인스타에서 먼저 공개!</p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {countries.map((c, i) => (
                <Reveal key={c.slug} delay={i * 70} className={i === 0 ? "sm:col-span-2 lg:col-span-4 lg:row-span-2" : i <= 2 ? "lg:col-span-2" : "lg:col-span-3"}>
                  <CountryCard c={c} big={i === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 원칙 */}
        <section className="px-5 pb-28 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
            {[
              { n: "01", t: "연차는 최소로", b: "공휴일·창립기념일 끼워서 연차 1~2개로 다녀와요." },
              { n: "02", t: "금액은 실제 결제 기준", b: "공식 홈페이지에서 한 번 더 확인한 가격만 적어요." },
              { n: "03", t: "동선은 걸은 그대로", b: "몇 시에 어디서 어디로, 출구 번호까지." },
            ].map((x, i) => (
              <Reveal key={x.n} delay={i * 90} className="rounded-[28px] border border-ink/10 bg-white/50 p-7">
                <p className="font-serif text-5xl italic text-sun">{x.n}</p>
                <p className="mt-6 text-xl font-bold tracking-tight">{x.t}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{x.b}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CountryCard({ c, big }: { c: Country; big?: boolean }) {
  if (c.status === "soon") {
    return (
      <div className={`relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-[28px] bg-gradient-to-br p-6 text-white ${c.accent}`}>
        <div className="flex items-center justify-between">
          <span className="text-3xl">{c.flag}</span>
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">곧 공개</span>
        </div>
        <div>
          <p className="font-serif text-lg italic text-white/70">{c.nameEn}</p>
          <p className="text-2xl font-extrabold tracking-tight">{c.name}</p>
          <p className="mt-1 text-sm text-white/80">{c.tagline}</p>
        </div>
        <span className="pointer-events-none absolute -bottom-6 -right-2 font-serif text-[120px] italic leading-none text-white/10">
          {c.nameEn.slice(0, 2)}
        </span>
      </div>
    );
  }
  return (
    <Link
      href={`/${c.slug}`}
      className={`group relative block h-full overflow-hidden rounded-[28px] bg-ink text-white ${big ? "min-h-[460px] lg:min-h-[560px]" : "min-h-[320px]"}`}
    >
      {c.cover && (
        <Image src={c.cover.src} alt={c.cover.alt} fill sizes="(min-width:1024px) 66vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/0" />
      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">NEW</span>
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">{c.period}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="font-serif text-2xl italic text-white/80">{c.flag} {c.nameEn}</p>
        <p className="mt-1 text-[clamp(36px,6vw,64px)] font-extrabold leading-none tracking-[-0.045em]">{c.name}</p>
        <p className="mt-3 text-[15px] text-white/85">{c.tagline}</p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {c.chips?.map((t) => (
            <span key={t} className="rounded-full border border-white/25 px-3 py-1 text-xs font-medium">{t}</span>
          ))}
          <span className="ml-auto grid size-12 place-items-center rounded-full bg-white text-ink transition group-hover:rotate-45 group-hover:bg-lime">
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </Link>
  );
}
