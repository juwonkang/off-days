import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCountry, liveCountries } from "@/data/countries";
import { Footer, Header } from "@/components/Chrome";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Lock } from "@/components/Icons";

type Props = { params: Promise<{ country: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return liveCountries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCountry((await params).country);
  if (!c) return {};
  return {
    title: `${c.name} 꿀팁`,
    description: `${c.name} ${c.tagline} · ${c.leave}`,
    openGraph: { images: c.cover ? [c.cover.src] : [] },
  };
}

export default async function CountryPage({ params }: Props) {
  const c = getCountry((await params).country);
  if (!c) notFound();
  const stops = c.route?.stops ?? [];

  return (
    <>
      <Header dark />
      <main>
        {/* HERO */}
        <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink text-white">
          {c.cover && <Image src={c.cover.src} alt={c.cover.alt} fill priority sizes="100vw" className="object-cover" />}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8 sm:pb-20">
            <p className="font-serif text-[clamp(28px,4vw,44px)] italic text-white/80">{c.flag} {c.nameEn}</p>
            <h1 className="text-[clamp(64px,15vw,180px)] font-black leading-[0.85] tracking-[-0.06em]">{c.name}</h1>
            <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">{c.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[c.period, c.leave].filter(Boolean).map((t) => (
                <span key={t} className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm backdrop-blur">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 숫자로 보기 */}
        {c.facts && (
          <section className="px-5 py-16 sm:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4">
              {c.facts.map((f, i) => (
                <Reveal key={f.label} delay={i * 70} className={`rounded-[24px] p-5 sm:p-6 ${i === 1 ? "bg-lime" : "border border-ink/10 bg-white/60"}`}>
                  <p className="text-sm font-semibold text-muted">{f.label}</p>
                  <p className="mt-3 text-[clamp(32px,5vw,48px)] font-black leading-none tracking-[-0.05em]">{f.value}</p>
                  {f.note && <p className="mt-2 text-[13px] leading-snug text-ink/60">{f.note}</p>}
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* 꿀팁 */}
        {c.tips && (
          <section className="px-5 pb-24 sm:px-8">
            <div className="mx-auto max-w-6xl">
              <SectionTitle en="Local tips" ko={`${c.name} 꿀팁 ${c.tips.length}`} />
              <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
                {c.tips.map((t, i) => (
                  <Reveal as="article" key={t.title} delay={(i % 3) * 80} className="w-[80vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[28px] border border-ink/10 bg-white sm:w-auto sm:max-w-none">
                    {t.photo && (
                      <div className="relative aspect-[4/3]">
                        <Image src={t.photo.src} alt={t.photo.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 80vw" className="object-cover" />
                        <span className="absolute left-4 top-4 grid size-10 place-items-center rounded-full bg-white font-serif text-xl italic">{i + 1}</span>
                      </div>
                    )}
                    <div className="p-6">
                      <p className="flex items-start gap-2 text-lg font-bold leading-snug tracking-tight">
                        <span>{t.tone === "warn" ? "⚠️" : "💡"}</span>
                        {t.title}
                      </p>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted">{t.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 하루 루트 미리보기 (잠금) */}
        {stops.length > 0 && (
          <section className="bg-night px-5 py-24 text-white sm:px-8">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <Reveal>
                <p className="font-serif text-2xl italic text-lime">One-day route</p>
                <h2 className="mt-2 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
                  아침 9시 반부터
                  <br />
                  밤 10시까지, {stops.length}곳
                </h2>
                <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/65">
                  시간대별 동선, 역 출구 번호, 입구 위치, 예산표까지 정리한 전체 루트는
                  인스타 릴스에 <b className="text-white">아무 댓글</b>이나 남기면 DM으로 보내드려요.
                </p>
                {c.reelUrl && (
                  <a
                    href={c.reelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-[15px] font-bold text-ink"
                  >
                    릴스에 댓글 남기고 루트 받기
                    <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </Reveal>

              <Reveal delay={120} className="relative">
                <ol className="space-y-2.5">
                  {stops.slice(0, 5).map((s, i) => {
                    const locked = i >= 2;
                    return (
                      <li
                        key={s.time}
                        className={`flex items-center gap-4 rounded-2xl border border-white/10 bg-night-2 p-3 pr-5 ${locked ? "select-none blur-[3px]" : ""}`}
                        aria-hidden={locked}
                      >
                        <div className="relative size-14 shrink-0 overflow-hidden rounded-xl">
                          <Image src={s.photos[0].src} alt="" fill sizes="56px" className="object-cover" />
                        </div>
                        <span className="w-12 font-serif text-xl italic text-lime">{s.time}</span>
                        <span className="truncate font-semibold">{s.title}</span>
                      </li>
                    );
                  })}
                </ol>
                <div className="absolute inset-x-0 bottom-0 top-[140px] flex items-center justify-center bg-gradient-to-b from-night/0 via-night/60 to-night">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2.5 text-sm font-semibold backdrop-blur">
                    <Lock /> 나머지 {stops.length - 2}곳은 DM으로
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* 갤러리 */}
        {c.gallery && (
          <section className="px-5 py-24 sm:px-8">
            <div className="mx-auto max-w-6xl">
              <SectionTitle en="Photo log" ko="직접 찍은 사진들" />
              <div className="columns-2 gap-3 sm:gap-4 lg:columns-3">
                {c.gallery.map((p, i) => (
                  <Reveal key={p.src} delay={(i % 3) * 60} className="mb-3 break-inside-avoid sm:mb-4">
                    <figure className="group relative overflow-hidden rounded-[20px] bg-paper-2">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        width={1080}
                        height={i % 3 === 1 ? 1080 : 1440}
                        sizes="(min-width:1024px) 33vw, 50vw"
                        className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"}`}
                      />
                      {p.caption && (
                        <figcaption className="absolute inset-x-2 bottom-2 rounded-full bg-black/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                          {p.caption}
                        </figcaption>
                      )}
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function SectionTitle({ en, ko }: { en: string; ko: string }) {
  return (
    <Reveal className="mb-10">
      <p className="font-serif text-2xl italic text-sun">{en}</p>
      <h2 className="mt-1 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">{ko}</h2>
    </Reveal>
  );
}
