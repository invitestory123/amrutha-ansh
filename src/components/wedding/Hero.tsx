import { couple } from "@/lib/wedding";
import { PetalTap } from "./PetalTap";
import { Heart, Sparkles, MapPin } from "lucide-react";

export function Hero() {
  return (
    <PetalTap>
      <header className="relative min-h-[92svh] overflow-hidden paper flex flex-col items-center justify-between px-4 pt-10 pb-12 text-center">
        {/* Soft Decorative Ambient Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#839482]/15 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
        </div>

        {/* Top: Auspicious Invocation & Monogram */}
        <div className="relative z-10 w-full max-w-md pt-2">
          {/* Sacred Devanagari invocation */}
          <p className="font-devanagari text-sm sm:text-base text-[#9a3412] tracking-widest animate-ink">
            ॥ श्री गणेशाय नमः ॥
          </p>

          {/* Monogram Seal */}
          <div className="mt-5 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-[#d4af37]/25 blur-lg" />
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full p-1 bg-gradient-to-tr from-[#996515] via-[#f5e297] to-[#996515] shadow-xl">
                <div className="h-full w-full rounded-full bg-[#faf6ee] flex items-center justify-center overflow-hidden border border-[#d4af37]/60">
                  <img
                    src={couple.monogramUrl}
                    alt="Amrutha & Ansh Monogram"
                    className="h-24 w-24 sm:h-28 sm:w-28 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 font-vibes text-2xl sm:text-3xl text-[#8c6f37]">
            Together with our families
          </p>
        </div>

        {/* Middle: Parents' Names & Honors */}
        <div className="relative z-10 my-4 max-w-lg w-full px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 px-3 rounded-2xl bg-white/70 border border-[#d4af37]/35 shadow-xs backdrop-blur-xs">
            <div className="text-center sm:text-right sm:border-r border-[#d4af37]/30 sm:pr-4">
              <p className="text-[0.62rem] uppercase tracking-wider text-[#8c6f37] font-semibold">
                Bride&apos;s Parents
              </p>
              <p className="font-display text-sm sm:text-base font-semibold text-[#2c241d] mt-0.5">
                {couple.brideParents}
              </p>
            </div>
            <div className="text-center sm:text-left sm:pl-2">
              <p className="text-[0.62rem] uppercase tracking-wider text-[#8c6f37] font-semibold">
                Groom&apos;s Parents
              </p>
              <p className="font-display text-sm sm:text-base font-semibold text-[#2c241d] mt-0.5">
                {couple.groomParents}
              </p>
            </div>
          </div>
        </div>

        {/* Centerpiece: Couple Names in Regal Heading */}
        <div className="relative z-10 my-2 max-w-lg w-full">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#8c6f37]">
            Cordially invite you to celebrate the wedding of
          </p>

          <h1 className="mt-3 font-cinzel text-4xl sm:text-5xl font-bold tracking-wide text-[#231d16] leading-tight">
            <span>Amrutha V</span>
            <span className="block my-1 font-vibes text-3xl sm:text-4xl text-[#b8860b] font-normal">
              &amp;
            </span>
            <span>Ansh Haresh Shah</span>
          </h1>

          <p className="mt-4 font-display text-base sm:text-lg italic text-[#635341]">
            &ldquo;{couple.tagline}&rdquo;
          </p>
        </div>

        {/* Bottom Dates Ribbon */}
        <div className="relative z-10 mt-4 w-full max-w-md">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs font-medium text-[#4a3e30]">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbf5e7] border border-[#d4af37]/40 shadow-xs">
              <MapPin className="h-3 w-3 text-[#b8860b]" />
              <span>
                <strong>Bengaluru:</strong> 22nd Nov 2026
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbf5e7] border border-[#d4af37]/40 shadow-xs">
              <MapPin className="h-3 w-3 text-[#b8860b]" />
              <span>
                <strong>Vadodara:</strong> 28th &amp; 29th Nov 2026
              </span>
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("replay-wedding-opener"))}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fbf5e7]/90 hover:bg-[#f5e9ce] border border-[#d4af37]/60 text-xs font-serif text-[#7a5c1a] shadow-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#b8860b]" />
              <span>Replay Entry Video</span>
            </button>
          </div>

          <p className="mt-3 text-[0.62rem] uppercase tracking-widest text-[#8c6f37]/80">
            Tap anywhere to shower rose petals
          </p>
        </div>
      </header>
    </PetalTap>
  );
}
