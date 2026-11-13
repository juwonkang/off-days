import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-6 text-center">
      <div>
        <p className="font-serif text-7xl italic text-sun">404</p>
        <p className="mt-3 text-xl font-bold">아직 안 가본 곳이에요</p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-ink px-5 py-3 text-sm font-bold text-paper">홈으로</Link>
      </div>
    </main>
  );
}
