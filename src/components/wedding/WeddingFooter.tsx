import { useState } from "react";
import { couple, downloadICS } from "@/lib/wedding";
import { Heart, Share2, Copy, Check, Calendar, Download } from "lucide-react";

export function WeddingFooter() {
  const [copied, setCopied] = useState(false);

  async function copyInvitation() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  }

  function shareWhatsApp() {
    const text = encodeURIComponent(
      `Together with our families, Amrutha & Ansh invite you to their wedding celebrations!\n\n` +
        `📅 Wedding: Sunday, 22 Nov 2026 (Bengaluru)\n` +
        `📅 Garba: Saturday, 28 Nov 2026 (Vadodara)\n` +
        `📅 Reception: Sunday, 29 Nov 2026 (Vadodara)\n\n` +
        `View the complete invitation & details here:\n${window.location.href}`,
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  }

  return (
    <footer className="relative bg-[#1c221b] text-[#fbf7ee] pt-20 pb-12 px-4 overflow-hidden border-t-2 border-[#d4af37]/40 text-center">
      {/* Background radial gold glow */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#d4af37] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-lg">
        {/* Monogram Seal */}
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full p-1 bg-gradient-to-tr from-[#996515] via-[#f5e297] to-[#996515] shadow-xl">
            <div className="h-full w-full rounded-full bg-[#172018] flex items-center justify-center overflow-hidden border border-[#d4af37]/50">
              <img
                src={couple.monogramUrl}
                alt="Amrutha & Ansh Monogram"
                className="h-20 w-20 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Closing Headline */}
        <p className="font-vibes text-3xl text-[#d4af37]">We cannot wait to celebrate with you</p>
        <h2 className="mt-2 font-cinzel text-3xl sm:text-4xl font-bold tracking-wide">
          Amrutha &amp; Ansh
        </h2>

        {/* Milestone Recap */}
        <div className="mt-8 grid grid-cols-2 border-y border-[#d4af37]/30 py-4 text-left max-w-md mx-auto">
          <div className="border-r border-[#d4af37]/30 pr-4">
            <p className="text-[0.68rem] uppercase tracking-wider text-[#d4af37] font-semibold">
              The Wedding
            </p>
            <p className="mt-1 font-display text-base sm:text-lg">22 November 2026</p>
            <p className="text-xs text-[#a0ad9f]">MLR Convention, Bengaluru</p>
          </div>
          <div className="pl-4">
            <p className="text-[0.68rem] uppercase tracking-wider text-[#d4af37] font-semibold">
              The Reception
            </p>
            <p className="mt-1 font-display text-base sm:text-lg">29 November 2026</p>
            <p className="text-xs text-[#a0ad9f]">Shiv Farm, Vadodara</p>
          </div>
        </div>

        {/* Share & Calendar Buttons */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <button
            type="button"
            onClick={shareWhatsApp}
            className="px-5 py-2.5 rounded-full bg-[#25D366] text-[#0f2414] font-medium text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#20ba59] transition-colors shadow-sm"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>Share on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={copyInvitation}
            className="px-5 py-2.5 rounded-full border border-[#d4af37]/60 bg-white/10 text-[#fbf7ee] text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-white/20 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => downloadICS()}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#b8860b] to-[#996515] text-white text-xs uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Save to Calendar</span>
          </button>
        </div>

        {/* Loving Family Note */}
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-[#b8c2b7] space-y-1">
          <p className="font-display italic text-sm text-[#fbf7ee]">
            &ldquo;With loving blessings and warm regards&rdquo;
          </p>
          <p className="font-medium text-[#d4af37]">{couple.brideParents}</p>
          <p className="font-medium text-[#d4af37]">{couple.groomParents}</p>
        </div>

        {/* Credits */}
        <p className="mt-8 text-[0.68rem] text-white/40 uppercase tracking-[0.2em] flex items-center justify-center gap-1.5">
          Created with <Heart className="h-3 w-3 text-[#d4af37] fill-current" /> for Amrutha &amp;
          Ansh
        </p>

        <a
          href="https://www.instagram.com/invitestory.in/"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-[0.62rem] uppercase tracking-[0.25em] text-[#d4af37]/60 hover:text-[#d4af37] transition-colors"
        >
          @invitestory.in
        </a>
      </div>
    </footer>
  );
}
