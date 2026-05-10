interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950 shadow-lg shadow-indigo-500/20 ring-1 ring-slate-900/10 dark:ring-white/10 ${className}`}
      aria-hidden="true"
    >
      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(79,70,229,0.28),transparent_42%),radial-gradient(circle_at_75%_20%,rgba(34,211,238,0.28),transparent_28%)]" />
      <svg viewBox="0 0 64 64" className="relative h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25 16V39C25 45 21 49 15.5 49C12.6 49 10.4 48.1 8.8 46.6"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 49V16H46C52 16 56 20 56 26.2C56 32.4 52 36.4 46 36.4H36"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M31 50V14" stroke="#22D3EE" strokeWidth="2.75" strokeLinecap="round" />
        <circle cx="47" cy="26" r="3" fill="#A78BFA" />
      </svg>
    </span>
  );
}
