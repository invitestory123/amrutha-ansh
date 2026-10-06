import { useState } from "react";
import { events } from "@/lib/wedding";
import { MapPin, Navigation, Copy, Check, ExternalLink } from "lucide-react";

export function VenueSection() {
  const [activeVenueId, setActiveVenueId] = useState<string>("wedding");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentEvent = events.find((e) => e.id === activeVenueId) || events[0];

  function copyAddress(address: string, id: string) {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <section className="relative px-4 py-16 overflow-hidden">
      <div className="mx-auto max-w-xl">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[#8c6f37] font-medium">
            Find Your Way
          </p>
          <h2 className="mt-2 font-cinzel text-3xl sm:text-4xl font-semibold text-[#2c241d] tracking-wide">
            Venues &amp; Directions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6b5842] max-w-sm mx-auto">
            Celebrations across two heritage cities: Bengaluru &amp; Vadodara.
          </p>

          {/* Venue Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {events.map((ev) => (
              <button
                key={ev.id}
                type="button"
                onClick={() => setActiveVenueId(ev.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  activeVenueId === ev.id
                    ? "bg-[#2c332b] text-white shadow-xs"
                    : "bg-[#faf6ee] text-[#554533] border border-[#d4af37]/40 hover:bg-[#f5ecda]"
                }`}
              >
                {ev.city}: {ev.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Venue Details Card */}
        <div className="rounded-2xl p-6 bg-gradient-to-b from-[#fffcf7] to-[#fbf5e7] border-2 border-[#d4af37]/45 shadow-[0_12px_32px_rgba(180,140,50,0.15)]">
          <div className="flex items-center justify-between border-b border-[#d4af37]/30 pb-3">
            <span className="font-devanagari text-xs text-[#9a3412]">
              {currentEvent.hindi} · {currentEvent.city}
            </span>
            <span className="text-[0.68rem] uppercase tracking-wider text-[#8c6f37] font-semibold">
              {currentEvent.date.split(",")[0]}
            </span>
          </div>

          <div className="mt-4">
            <h3 className="font-cinzel text-2xl font-bold text-[#2c241d]">
              {currentEvent.venueName}
            </h3>
            <p className="mt-2 text-sm text-[#544636] leading-relaxed">{currentEvent.address}</p>
            <p className="mt-2 text-xs font-medium text-[#8c6f37]">
              Event: {currentEvent.name} ({currentEvent.time})
            </p>
          </div>

          {/* Action Links */}
          <div className="mt-6 pt-4 border-t border-[#d4af37]/30 flex flex-wrap gap-2.5">
            <a
              href={currentEvent.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-h-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2c332b] to-[#1c221b] text-white text-xs uppercase font-medium tracking-wider flex items-center justify-center gap-2 shadow-xs hover:bg-black transition-colors"
            >
              <Navigation className="h-4 w-4 text-[#d4af37]" />
              <span>Open in Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>

            <button
              type="button"
              onClick={() =>
                copyAddress(`${currentEvent.venueName}, ${currentEvent.address}`, currentEvent.id)
              }
              className="min-h-[44px] px-4 py-2.5 rounded-xl border border-[#b8860b] bg-white text-[#6b4f17] text-xs uppercase font-medium tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#faf6ee] transition-colors"
            >
              {copiedId === currentEvent.id ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick summary of all 3 venues */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          {events.map((ev) => (
            <div
              key={ev.id}
              onClick={() => setActiveVenueId(ev.id)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                activeVenueId === ev.id
                  ? "border-[#b8860b] bg-[#faf3e0] shadow-xs"
                  : "border-[#d4af37]/20 bg-white/60 hover:bg-white"
              }`}
            >
              <p className="text-[0.62rem] uppercase font-semibold text-[#8c6f37]">{ev.city}</p>
              <p className="font-display font-semibold text-sm text-[#2c241d] truncate">
                {ev.venueName}
              </p>
              <p className="text-[0.65rem] text-[#705e49]">
                {ev.date.split(" ")[0]} {ev.date.split(" ")[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
