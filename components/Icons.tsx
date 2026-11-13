type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const ArrowUpRight = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ArrowRight = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Walk = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><circle cx="13" cy="4" r="2" /><path d="m7 21 3-6 3 2v4M10 15l1-6 4 3 3 1M8 10l3-1" /></svg>
);
export const Metro = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><rect x="5" y="3" width="14" height="14" rx="3" /><path d="M5 11h14M8 21l2-4M16 21l-2-4" /><circle cx="9" cy="14" r=".6" /><circle cx="15" cy="14" r=".6" /></svg>
);
export const Bike = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><circle cx="6" cy="17" r="3.5" /><circle cx="18" cy="17" r="3.5" /><path d="m6 17 4-8h5l3 8M10 9 8 6H6M15 9l-3 8" /></svg>
);
export const Pin = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const Lock = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><rect x="4.5" y="10.5" width="15" height="10" rx="2.5" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" /></svg>
);
export const Instagram = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>
);
export const Check = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
