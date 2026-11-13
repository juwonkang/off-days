import Link from "next/link";
import { site } from "@/data/site";
import { ArrowUpRight, Instagram } from "./Icons";

export function Header({ dark = false }: { dark?: boolean }) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl sm:px-5 ${
          dark ? "border-white/15 bg-black/30 text-white" : "border-ink/10 bg-paper/70 text-ink"
        }`}
      >
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-[22px] italic leading-none">Off-Day Atlas</span>
          <span className={`hidden text-xs sm:inline ${dark ? "text-white/60" : "text-muted"}`}>{site.nameKo}</span>
        </Link>
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-semibold transition ${
            dark ? "bg-white text-ink hover:bg-lime" : "bg-ink text-paper hover:bg-sun"
          }`}
        >
          <Instagram className="size-3.5" />
          {site.author}
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-20 text-paper sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-serif text-[clamp(44px,9vw,120px)] italic leading-[0.9] tracking-tight">
          See you on
          <br />
          your next <span className="text-lime">off-day.</span>
        </p>
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-white/60">{site.description}</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-lime px-5 py-3 text-sm font-bold text-ink"
          >
            인스타에서 다음 여행 보기
            <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
        <p className="mt-10 text-xs text-white/35">© {new Date().getFullYear()} {site.author} · 모든 사진은 직접 촬영</p>
      </div>
    </footer>
  );
}
