import { useEffect, useMemo, useRef, useState } from "react";
import { couple, events } from "@/lib/wedding";

function useCountdown(iso: string) {
  const target = useMemo(() => new Date(iso).getTime(), [iso]);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: diff <= 0,
  };
}

function FlipCell({ value, label }: { value: number; label: string }) {
  const text = String(value).padStart(2, "0");
  const prev = useRef(text);
  const [flipKey, setFlipKey] = useState(0);

  useEffect(() => {
    if (prev.current !== text) {
      prev.current = text;
      setFlipKey((k) => k + 1);
    }
  }, [text]);

  return (
    <div className="flex flex-1 flex-col items-center gap-2">
      <div
        className="relative w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#fffefc] to-[#f7eed9] border border-[#d4af37]/40 shadow-xs px-1 py-3 text-center"
        style={{ perspective: "320px" }}
      >
        <span
          key={flipKey}
          className="block origin-top font-display text-3xl sm:text-4xl font-bold leading-none text-[#2c241d]"
          style={{ animation: "flip-in 520ms cubic-bezier(.22,1,.36,1)" }}
        >
          {text}
        </span>
        <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-[#d4af37]/25" />
      </div>
      <span className="text-[0.62rem] sm:text-xs uppercase tracking-widest text-[#78634a] font-medium">
        {label}
      </span>
    </div>
  );
}

export function Countdown({ iso = couple.weddingISO }: { iso?: string }) {
  const [targetISO, setTargetISO] = useState<string>(iso);
  const [activeLabel, setActiveLabel] = useState<string>("Wedding Ceremony (Bengaluru)");
  const t = useCountdown(targetISO);

  return (
    <div className="w-full max-w-md mx-auto text-center">
      {/* Event Selector for Countdown */}
      <div className="mb-4 inline-flex items-center gap-1 p-1 rounded-full bg-[#f3ebd7] border border-[#d4af37]/30 text-xs">
        <button
          type="button"
          onClick={() => {
            setTargetISO(couple.weddingISO);
            setActiveLabel("Wedding Ceremony (Bengaluru)");
          }}
          className={`px-3 py-1 rounded-full transition-all ${
            targetISO === couple.weddingISO
              ? "bg-[#2c332b] text-white shadow-xs font-medium"
              : "text-[#554533] hover:text-black"
          }`}
        >
          Wedding (22 Nov)
        </button>
        <button
          type="button"
          onClick={() => {
            setTargetISO(couple.receptionISO);
            setActiveLabel("Reception (Vadodara)");
          }}
          className={`px-3 py-1 rounded-full transition-all ${
            targetISO === couple.receptionISO
              ? "bg-[#2c332b] text-white shadow-xs font-medium"
              : "text-[#554533] hover:text-black"
          }`}
        >
          Reception (29 Nov)
        </button>
      </div>

      <p className="text-xs text-[#8c6f37] font-medium mb-3">Counting down to our {activeLabel}</p>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        <FlipCell value={t.days} label="Days" />
        <FlipCell value={t.hours} label="Hours" />
        <FlipCell value={t.minutes} label="Mins" />
        <FlipCell value={t.seconds} label="Secs" />
      </div>
    </div>
  );
}
