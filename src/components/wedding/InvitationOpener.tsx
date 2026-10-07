import { useState, useEffect } from "react";
import { couple } from "@/lib/wedding";
import { Sparkles } from "lucide-react";

const SESSION_KEY = "amrutha-ansh-opened-v1";

export function InvitationOpener() {
  const [opened, setOpened] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasOpened = sessionStorage.getItem(SESSION_KEY) === "true";
    if (hasOpened) {
      setOpened(true);
    } else {
      document.body.style.overflow = "hidden";
    }
  }, []);

  function handleOpen() {
    setIsAnimating(true);
    sessionStorage.setItem(SESSION_KEY, "true");
    window.dispatchEvent(new CustomEvent("play-wedding-music"));
    setTimeout(() => {
      setOpened(true);
      document.body.style.overflow = "";
    }, 1200);
  }

  if (opened) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wedding invitation royal opening"
      className={`fixed inset-0 z-[120] flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isAnimating ? "pointer-events-none opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{
        background: "radial-gradient(ellipse at 50% 40%, #1f2720 0%, #0f1410 70%, #080b08 100%)",
      }}
    >
      {/* Decorative Traditional Patterns */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(#d4af37 1px, transparent 1px), radial-gradient(#d4af37 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
      />

      {/* Royal Curtain Effect (split on open) */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#172017] to-[#243124] border-r border-[#d4af37]/30 transition-transform duration-1000 ease-in-out ${
          isAnimating ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#172017] to-[#243124] border-l border-[#d4af37]/30 transition-transform duration-1000 ease-in-out ${
          isAnimating ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Center Invitation Seal Card */}
      <div
        className={`relative z-10 mx-4 max-w-sm w-full p-8 text-center rounded-2xl border border-[#d4af37]/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] bg-[#172018]/90 backdrop-blur-md transition-all duration-700 ${
          isAnimating ? "scale-90 opacity-0" : "scale-100 opacity-100 animate-bloom"
        }`}
      >
        {/* Auspicious Invocation */}
        <p className="font-devanagari text-[#e8c872] text-sm tracking-widest opacity-90">
          ॥ श्री गणेशाय नमः ॥
        </p>

        {/* Monogram Seal with breathing glow */}
        <div className="relative mx-auto mt-6 flex justify-center">
          <div className="absolute inset-0 rounded-full bg-[#d4af37]/20 blur-xl animate-pulse" />
          <div className="relative group cursor-pointer" onClick={handleOpen}>
            <div className="h-32 w-32 rounded-full p-1 bg-gradient-to-tr from-[#996515] via-[#f5e297] to-[#996515] shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="h-full w-full rounded-full bg-[#1b251c] flex items-center justify-center overflow-hidden border border-[#d4af37]/40">
                <img
                  src={couple.monogramUrl}
                  alt="Amrutha & Ansh Monogram"
                  className="h-28 w-28 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            {/* Pulsing ring indicator */}
            <span className="absolute -inset-2 rounded-full border border-[#d4af37]/40 animate-ping opacity-60 pointer-events-none" />
          </div>
        </div>

        {/* Couple Names */}
        <div className="mt-6">
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[#e8c872]/80">
            Wedding Celebrations
          </p>
          <h1 className="mt-2 font-cinzel text-3xl font-semibold text-[#fbf7ee] tracking-wide">
            {couple.brideFirst} &amp; {couple.groomFirst}
          </h1>
          <p className="mt-1 font-script text-lg text-[#e8c872]">Bengaluru &amp; Vadodara</p>
          <p className="mt-2 text-xs text-[#dcd7cb] font-body tracking-wider">
            22nd &amp; 29th November 2026
          </p>
        </div>

        {/* Open Button */}
        <button
          type="button"
          onClick={handleOpen}
          className="mt-7 w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#996515] via-[#d4af37] to-[#996515] text-[#1a1c17] font-body font-medium text-xs tracking-[0.25em] uppercase shadow-[0_8px_20px_rgba(212,175,55,0.35)] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(212,175,55,0.55)] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#f5e297]"
        >
          <Sparkles className="h-4 w-4 text-[#1a1c17]" />
          <span>Tap to Open Invitation</span>
        </button>

        <p className="mt-3 text-[0.62rem] tracking-wider text-[#dcd7cb]/60 uppercase">
          With the blessings of our families
        </p>
      </div>
    </div>
  );
}
