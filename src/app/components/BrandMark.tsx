interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950 shadow-lg shadow-indigo-500/25 ring-1 ring-white/10 ${className}`}
      aria-hidden="true"
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(34,211,238,0.45),transparent_34%),radial-gradient(circle_at_78%_75%,rgba(167,139,250,0.5),transparent_38%)]" />
      <svg viewBox="0 0 64 64" className="relative h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 22L9 32L16 42" stroke="#22D3EE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M48 22L55 32L48 42" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 17V38C28 44.2 24.2 48 18.5 48C15.7 48 13.4 47.2 11.8 45.7" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 47V17H45C51.1 17 55 20.7 55 26.1C55 31.7 51.1 35.4 45 35.4H35" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 50L39 14" stroke="#F97316" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}
