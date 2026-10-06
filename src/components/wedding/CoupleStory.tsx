import { useState } from "react";
import { couple } from "@/lib/wedding";
import { Heart, Sparkles, X } from "lucide-react";

export function CoupleStory() {
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);

  return (
    <section className="relative px-4 py-16 overflow-hidden">
      <div className="mx-auto max-w-xl">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2 text-[#b8860b]">
            <span className="h-px w-8 bg-[#b8860b]/40" />
            <Heart className="h-3.5 w-3.5 fill-[#b8860b]" />
            <span className="h-px w-8 bg-[#b8860b]/40" />
          </div>
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[#8c6f37] font-medium">
            Our Love Story
          </p>
          <h2 className="mt-2 font-cinzel text-3xl sm:text-4xl font-semibold text-[#2c241d] tracking-wide">
            Amrutha &amp; Ansh
          </h2>
          <p className="mt-3 font-display text-base sm:text-lg leading-relaxed text-[#5c4a38] max-w-md mx-auto italic">
            &ldquo;From two different paths to one shared journey of smiles, vows, and
            forever.&rdquo;
          </p>
        </div>

        {/* The Two Couple Photos Gallery */}
        <div className="space-y-8">
          {/* Photo 1: Traditional Portrait (Image 4) */}
          <div className="relative group rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-[#dfb76c] via-[#b8860b] to-[#8c6f37] shadow-[0_18px_40px_rgba(140,111,55,0.2)]">
            <div className="rounded-[1.3rem] overflow-hidden bg-[#faf6ee] border border-white/60 relative">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <img
                  src={couple.portraitUrl}
                  alt="Amrutha and Ansh in traditional attire"
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                  onClick={() => setActiveModalImg(couple.portraitUrl)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

                {/* Photo Caption Badge */}
                <div className="absolute bottom-4 inset-x-4 text-white text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[0.62rem] uppercase font-semibold tracking-widest bg-[#d4af37] text-[#1a1c17] mb-1">
                      Our Beginning
                    </span>
                    <h3 className="font-display text-2xl font-bold tracking-wide text-white drop-shadow-md">
                      Amrutha &amp; Ansh
                    </h3>
                    <p className="text-xs text-white/90 font-light">
                      Bengaluru &amp; Vadodara unite in love
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModalImg(couple.portraitUrl)}
                    className="self-center sm:self-end px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-[0.65rem] tracking-wider uppercase border border-white/40 text-white transition-colors"
                  >
                    Tap to expand
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Romantic Narrative Interlude */}
          <div className="text-center px-4 py-4 rounded-2xl bg-[#faf6ee]/90 border border-[#d4af37]/30 shadow-xs">
            <p className="font-devanagari text-xs text-[#9a3412] tracking-wider">
              ॥ यदेतद्धृदयं तव तदस्तु हृदयं मम ॥
            </p>
            <p className="mt-2 text-xs text-[#6e5d47] leading-relaxed">
              &ldquo;May your heart be my heart, and may my heart be yours.&rdquo;
              <br />
              Together with our beloved parents, we look forward to having you witness our union.
            </p>
          </div>

          {/* Photo 2: The Proposal Stage Moment (Image 3) */}
          <div className="relative group rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-[#8c6f37] via-[#b8860b] to-[#dfb76c] shadow-[0_18px_40px_rgba(140,111,55,0.2)]">
            <div className="rounded-[1.3rem] overflow-hidden bg-[#faf6ee] border border-white/60 relative">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src={couple.proposalUrl}
                  alt="Ansh proposing to Amrutha on stage"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                  onClick={() => setActiveModalImg(couple.proposalUrl)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Photo Caption Badge */}
                <div className="absolute bottom-4 inset-x-4 text-white text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[0.62rem] uppercase font-semibold tracking-widest bg-rose-500 text-white mb-1">
                      The Proposal
                    </span>
                    <h3 className="font-display text-2xl font-bold tracking-wide text-white drop-shadow-md">
                      When She Said Yes
                    </h3>
                    <p className="text-xs text-white/90 font-light">A moment etched in eternity</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModalImg(couple.proposalUrl)}
                    className="self-center sm:self-end px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-[0.65rem] tracking-wider uppercase border border-white/40 text-white transition-colors"
                  >
                    Tap to expand
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Lightbox for full size viewing */}
        {activeModalImg && (
          <div
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setActiveModalImg(null)}
          >
            <div className="relative max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20">
              <button
                type="button"
                onClick={() => setActiveModalImg(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={activeModalImg}
                alt="Amrutha & Ansh"
                className="max-h-[85vh] w-auto object-contain mx-auto rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
