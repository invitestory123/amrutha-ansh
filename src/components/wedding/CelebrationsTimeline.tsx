import { events, downloadICS } from "@/lib/wedding";
import { Calendar, MapPin, Navigation, Clock, Download, Sparkles } from "lucide-react";

export function CelebrationsTimeline() {
  return (
    <section className="relative px-4 py-16 overflow-hidden">
      <div className="mx-auto max-w-xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-devanagari text-sm text-[#9a3412] tracking-widest">
            ॥ मङ्गलम् भगवान् विष्णुः ॥
          </p>
          <p className="mt-1 text-[0.68rem] uppercase tracking-[0.35em] text-[#8c6f37] font-medium">
            Wedding Itinerary
          </p>
          <h2 className="mt-2 font-cinzel text-3xl sm:text-4xl font-semibold text-[#2c241d] tracking-wide">
            The Celebrations
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6b5842] max-w-md mx-auto">
            Join us in commemorating our joyous milestone moments across Bengaluru and Vadodara.
          </p>

          {/* Quick download all button */}
          <div className="mt-5">
            <button
              type="button"
              onClick={() => downloadICS()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#b8860b] to-[#996515] text-white text-xs uppercase font-medium tracking-wider shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download className="h-4 w-4" />
              <span>Download All Events (.ics)</span>
            </button>
          </div>
        </div>

        {/* 3 Event Cards */}
        <div className="space-y-6">
          {events.map((ev, index) => (
            <article
              key={ev.id}
              className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#fffcf7] to-[#fbf5e7] border border-[#d4af37]/40 shadow-[0_10px_30px_rgba(180,140,50,0.12)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Event Badge / Step Indicator */}
              <div className="flex items-center justify-between border-b border-[#d4af37]/30 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="h-8 w-8 rounded-full bg-[#f3ebd7] border border-[#b8860b]/40 text-[#996515] flex items-center justify-center font-cinzel text-xs font-bold">
                    0{index + 1}
                  </span>
                  <div>
                    <span className="font-devanagari text-xs text-[#9a3412] font-medium">
                      {ev.hindi}
                    </span>
                    <p className="text-[0.65rem] uppercase tracking-wider text-[#8c6f37]">
                      {ev.city}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-[0.68rem] font-semibold bg-[#faf3e0] text-[#854d0e] border border-[#d4af37]/40">
                  {ev.dayNumber} Nov 2026
                </span>
              </div>

              {/* Title & Date */}
              <div className="mt-4">
                <h3 className="font-cinzel text-2xl font-bold text-[#2c241d]">{ev.name}</h3>
                <p className="mt-1 font-display text-base text-[#6b5842] font-medium">{ev.date}</p>
              </div>

              {/* Timing & Venue details */}
              <div className="mt-4 space-y-2 text-xs sm:text-sm text-[#4a3e30]">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-[#b8860b] shrink-0" />
                  <span className="font-medium">{ev.time}</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#b8860b] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2c241d]">{ev.venueName}</p>
                    <p className="text-xs text-[#6b5842] leading-relaxed mt-0.5">{ev.address}</p>
                  </div>
                </div>

                {ev.note && (
                  <div className="mt-3 p-2.5 rounded-lg bg-[#faf5e8] border border-[#d4af37]/25 text-xs italic text-[#705c43]">
                    {ev.note}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-[#d4af37]/25 flex flex-wrap gap-2.5">
                <a
                  href={ev.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-h-[40px] px-4 py-2 rounded-xl bg-[#2c332b] text-white text-xs uppercase font-medium tracking-wider flex items-center justify-center gap-2 shadow-xs hover:bg-[#1a211a] transition-colors"
                >
                  <Navigation className="h-3.5 w-3.5 text-[#d4af37]" />
                  <span>Google Maps Directions</span>
                </a>
                <button
                  type="button"
                  onClick={() => downloadICS(ev.id)}
                  className="px-4 py-2 rounded-xl border border-[#b8860b] bg-white/80 text-[#6b4f17] text-xs uppercase font-medium tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#faf6ee] transition-colors"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Add to Calendar</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
