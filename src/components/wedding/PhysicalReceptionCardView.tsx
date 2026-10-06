import { useState } from "react";
import { couple, events, downloadICS } from "@/lib/wedding";
import { MapPin, Calendar, ExternalLink, Image as ImageIcon, Sparkles } from "lucide-react";

export function PhysicalReceptionCardView() {
  const [viewMode, setViewMode] = useState<"card" | "original">("card");
  const receptionEvent = events.find((e) => e.id === "reception") || events[2];

  return (
    <section className="relative px-4 py-16 overflow-hidden">
      <div className="mx-auto max-w-lg">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="font-devanagari text-base text-[#728471] tracking-widest">
            ॥ रिसेप्शन निमंत्रण ॥
          </p>
          <h2 className="mt-2 font-cinzel text-3xl sm:text-4xl font-semibold text-[#2f392f] tracking-wide">
            The Vadodara Reception
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5a675a] max-w-sm mx-auto">
            Inspired by the physical heirloom card for the reception ceremony hosted in Vadodara.
          </p>

          {/* Toggle between Digital Heirloom Replica & Original Printed Reference */}
          <div className="mt-5 inline-flex items-center rounded-full p-1 bg-[#dbe4da] border border-[#a8baa6]">
            <button
              type="button"
              onClick={() => setViewMode("card")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                viewMode === "card"
                  ? "bg-[#3e503e] text-white shadow-xs"
                  : "text-[#3e503e] hover:text-black"
              }`}
            >
              Digital Heirloom Card
            </button>
            <button
              type="button"
              onClick={() => setViewMode("original")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide flex items-center gap-1.5 transition-all ${
                viewMode === "original"
                  ? "bg-[#3e503e] text-white shadow-xs"
                  : "text-[#3e503e] hover:text-black"
              }`}
            >
              <ImageIcon className="h-3.5 w-3.5" />
              <span>Printed Card Scan</span>
            </button>
          </div>
        </div>

        {viewMode === "original" ? (
          /* Original Printed Card Scan View */
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#b8860b]/40 shadow-2xl bg-[#faf6ee] p-2 sm:p-4 text-center">
            <p className="text-[0.68rem] uppercase tracking-wider text-[#6b4f17] mb-2 font-medium">
              Physical Card Reference (Vadodara Reception)
            </p>
            <img
              src="/images/reception-card.png"
              alt="Physical copy of Vadodara reception card"
              className="w-full max-h-[750px] object-contain rounded-xl mx-auto shadow-md"
            />
            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href={receptionEvent.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#3e503e] text-white text-xs tracking-wider uppercase shadow-xs hover:bg-[#2f3e2f] transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" />
                <span>Navigate to Shiv Farm</span>
              </a>
            </div>
          </div>
        ) : (
          /* Digital Re-creation matching the Physical Card Reference (Image 2) */
          <div className="relative rounded-[2rem] p-3 sm:p-6 sage-linen-bg shadow-[0_24px_50px_rgba(40,55,40,0.28)] border-4 border-[#fff]/40">
            {/* Fine outer gold contour */}
            <div className="cream-arch-inner rounded-[1.8rem] p-6 sm:p-8 text-center border-2 border-[#c5a059] shadow-inner relative overflow-hidden">
              {/* Inner Arch Golden Crest Motif */}
              <div className="relative flex justify-center mb-3">
                <svg
                  className="h-14 w-14 text-[#758a74] opacity-85"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <path d="M50 8 C48 18 40 26 36 36 C32 46 36 54 44 58 C47 50 49 42 50 32 C51 42 53 50 56 58 C64 54 68 46 64 36 C60 26 52 18 50 8 Z" />
                  <path
                    d="M50 35 C42 45 30 52 24 64 C20 72 24 80 32 82 C37 74 42 66 46 58 C44 70 42 82 40 94 C48 93 52 93 60 94 C58 82 56 70 54 58 C58 66 63 74 68 82 C76 80 80 72 76 64 C70 52 58 45 50 35 Z"
                    opacity="0.85"
                  />
                </svg>
              </div>

              {/* Sunday 29 Nov 2026 Date Block */}
              <div className="space-y-0.5">
                <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#2c332b] uppercase">
                  Sunday
                </p>
                <p className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-[#1c221b] leading-none my-1">
                  29
                </p>
                <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#2c332b] uppercase">
                  Nov 2026
                </p>
              </div>

              {/* Hindi Calligraphy "रिसेप्शन" */}
              <div className="my-5">
                <h3 className="font-devanagari text-3xl sm:text-4xl text-[#1e261e] tracking-wide">
                  रिसेप्शन
                </h3>
                <div className="flex items-center justify-center gap-2 mt-2 text-[#b8860b]">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#b8860b]" />
                  <span className="text-xs">❖</span>
                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#b8860b]" />
                </div>
              </div>

              {/* Invitation Host Text from Parents */}
              <div className="space-y-1.5 text-[#303830]">
                <p className="font-cinzel text-xs sm:text-sm font-bold tracking-wider text-[#1d241d]">
                  DR. MONA &amp; DR. HARESH SHAH
                </p>
                <p className="text-[0.78rem] sm:text-xs leading-relaxed text-[#4e5a4e]">
                  request the honour of your presence to grace
                  <br />
                  the wedding reception of our beloved son
                </p>
              </div>

              {/* Couple Names */}
              <div className="my-5">
                <p className="font-vibes text-3xl sm:text-4xl text-[#1d261e]">
                  <span>Ansh</span>{" "}
                  <span className="text-xl font-normal text-[#758a74] italic">with</span>{" "}
                  <span>Amrutha</span>
                </p>
                <p className="mt-2 text-[0.68rem] sm:text-xs font-semibold tracking-wider text-[#4d594c] uppercase">
                  (D/O SMT. A. SANDHYA PRASAD &amp; SRI R. VENKATESH PRASAD)
                </p>
              </div>

              {/* Event Schedule & Blessings */}
              <div className="my-5 space-y-1 text-xs sm:text-sm font-medium tracking-wide text-[#2b332b] border-y border-[#c5a059]/30 py-3.5">
                <p className="font-cinzel text-xs font-semibold text-[#1e261e] tracking-widest">
                  7:00 PM ONWARDS
                </p>
                <p className="text-[0.72rem] tracking-wider text-[#526052] uppercase">
                  Followed by Dinner
                </p>
                <p className="text-[0.68rem] tracking-widest text-[#728471] font-semibold uppercase">
                  Blessings Only
                </p>
              </div>

              {/* Venue Details */}
              <div className="space-y-1 text-xs sm:text-sm text-[#2f382f]">
                <p className="font-cinzel text-xs font-bold tracking-widest text-[#1a211a]">
                  ✦ VENUE ✦
                </p>
                <p className="font-display text-lg sm:text-xl font-semibold text-[#171f17]">
                  Shiv Farm
                </p>
                <p className="text-[0.75rem] sm:text-xs text-[#525e52] leading-tight">
                  Behind H L Patel Party Plot,
                  <br />
                  Near Vasna Jakat Naka,
                  <br />
                  Vasna bhayli Road, Vadodara.
                </p>
              </div>

              {/* Botanical Floral base illustration with songbirds tribute */}
              <div className="relative mt-8 pt-4 border-t border-[#c5a059]/40 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-3 text-[#758a74]">
                  <span className="text-sm">🌸</span>
                  <span className="text-xs italic text-[#596659]">
                    Vintage Flora &amp; Songbirds
                  </span>
                  <span className="text-sm">🐦</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <a
                    href={receptionEvent.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3e503e] text-white text-[0.68rem] font-medium tracking-wider uppercase shadow-xs hover:bg-[#2f3e2f] transition-all"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => downloadICS(receptionEvent.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#3e503e] text-[#2d3a2d] text-[0.68rem] font-medium tracking-wider uppercase bg-white/70 hover:bg-white transition-all"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Add Reception to Calendar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
