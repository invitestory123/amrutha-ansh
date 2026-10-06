import { useState } from "react";
import { events, downloadICS } from "@/lib/wedding";
import { Calendar, Heart, MapPin, Clock, CalendarCheck } from "lucide-react";

export function SaveTheDateCalendar() {
  const [selectedDay, setSelectedDay] = useState<number>(22);

  // November 2026 calendar days:
  // Nov 1, 2026 is Sunday, Nov 30 is Monday.
  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);

  const activeEvent = events.find((e) => e.dayNumber === selectedDay) || events[0];

  return (
    <section className="relative px-4 py-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-md">
        {/* Ornate Rajputana Gold Arch Outer Frame (inspired by Model Image 5) */}
        <div className="relative rounded-[2.5rem] p-1.5 bg-gradient-to-b from-[#dfb76c] via-[#b8860b] to-[#8c6f37] shadow-[0_20px_50px_rgba(140,111,55,0.22)]">
          {/* Inner Golden Bevel */}
          <div className="rounded-[2.2rem] p-3 sm:p-5 bg-gradient-to-b from-[#fffcf5] via-[#faf5e8] to-[#f4ecd8] border border-[#d4af37]/60 relative overflow-hidden">
            {/* Subtle Marble / Damask Inlay Pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#b8860b 1px, transparent 1px), linear-gradient(135deg, rgba(212,175,55,0.08) 25%, transparent 25%)",
                backgroundSize: "20px 20px, 40px 40px",
              }}
            />

            {/* Top Arch Floral Crest & Model Style Typography */}
            <div className="relative text-center pt-2 pb-4">
              {/* Ornate Arch Top Finial */}
              <div className="flex items-center justify-center gap-2 mb-2 text-[#b8860b]">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#b8860b]" />
                <span className="text-base font-cinzel">✦ ❖ ✦</span>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#b8860b]" />
              </div>

              {/* "Save the Date" flowing script from Image 5 */}
              <p className="font-vibes text-4xl sm:text-5xl text-[#5c4a2a] leading-none tracking-wide drop-shadow-sm">
                Save the Date
              </p>

              <div className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full border border-[#d4af37]/40 bg-[#faf6ee]/80 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b8860b]" />
                <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-wider text-[#3d3326]">
                  November 2026
                </h3>
                <span className="h-1.5 w-1.5 rounded-full bg-[#b8860b]" />
              </div>
            </div>

            {/* November 2026 Grid */}
            <div className="relative mt-2 px-1 sm:px-3">
              {/* Day header */}
              <div className="grid grid-cols-7 text-center pb-2 border-b border-[#d4af37]/30 text-[0.72rem] sm:text-xs font-medium uppercase tracking-wider text-[#857053]">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              {/* Dates Grid */}
              <div className="grid grid-cols-7 text-center gap-y-2.5 sm:gap-y-3 pt-3 text-sm sm:text-base font-display text-[#473b2c]">
                {calendarDays.map((day) => {
                  const isWedding = day === 22;
                  const isGarba = day === 28;
                  const isReception = day === 29;
                  const isHighlighted = isWedding || isGarba || isReception;
                  const isSelected = selectedDay === day;

                  return (
                    <div key={day} className="relative flex items-center justify-center py-0.5">
                      <button
                        type="button"
                        onClick={() => isHighlighted && setSelectedDay(day)}
                        className={`relative z-10 h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                          isHighlighted
                            ? "cursor-pointer font-bold text-foreground hover:scale-110"
                            : "cursor-default text-[#75644d]/85"
                        } ${
                          isSelected && isHighlighted
                            ? "ring-2 ring-[#b8860b] ring-offset-2 ring-offset-[#faf5e8]"
                            : ""
                        }`}
                      >
                        {/* Glowing Heart Frame for Wedding Date 22 (Exact model from image 5) */}
                        {isWedding && (
                          <span className="pointer-events-none absolute -inset-2.5 flex items-center justify-center heart-glow-active z-0">
                            <Heart className="h-9 w-9 sm:h-10 sm:w-10 fill-[#fef08a] stroke-[#ca8a04] stroke-[1.8] opacity-90 drop-shadow-[0_0_12px_rgba(234,179,8,0.85)]" />
                          </span>
                        )}

                        {/* Special gold aura for Garba (28) & Reception (29) */}
                        {(isGarba || isReception) && (
                          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-[#dfb76c] to-[#b8860b] opacity-25 animate-pulse z-0" />
                        )}

                        <span
                          className={`relative z-10 ${
                            isWedding
                              ? "font-bold text-[#854d0e] text-base drop-shadow-xs"
                              : isGarba || isReception
                                ? "font-bold text-[#9a3412]"
                                : ""
                          }`}
                        >
                          {day}
                        </span>

                        {/* Mini dot marker for highlighted celebration dates */}
                        {isHighlighted && !isWedding && (
                          <span className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-[#b8860b]" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Filigree flourish */}
            <div className="relative mt-5 pt-3 border-t border-[#d4af37]/30 flex items-center justify-center gap-3 text-[#b8860b]">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <span className="text-xs font-cinzel">✦ THREE DAYS OF CELEBRATION ✦</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>

            {/* Interactive Selected Event Card */}
            <div className="mt-4 p-4 rounded-xl bg-white/80 border border-[#d4af37]/40 shadow-xs backdrop-blur-xs transition-all duration-300">
              <div className="flex items-center justify-between border-b border-[#d4af37]/25 pb-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#b8860b] animate-ping" />
                  <span className="font-devanagari text-xs text-[#9a3412]">
                    {activeEvent.hindi}
                  </span>
                </div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-[#857053]">
                  {activeEvent.city}
                </span>
              </div>

              <h4 className="mt-2 font-display text-xl font-semibold text-[#2c241d]">
                {activeEvent.name}
              </h4>
              <p className="text-xs text-[#6e5d47] font-medium mt-0.5">{activeEvent.date}</p>

              <div className="mt-2.5 space-y-1.5 text-xs text-[#524434]">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-[#b8860b] shrink-0" />
                  <span>{activeEvent.time}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#b8860b] shrink-0 mt-0.5" />
                  <span>
                    <strong>{activeEvent.venueName}</strong>, {activeEvent.city}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => downloadICS(activeEvent.id)}
                  className="flex-1 min-h-[38px] px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#b8860b] to-[#996515] text-white text-[0.68rem] uppercase font-medium tracking-wider flex items-center justify-center gap-1.5 shadow-xs hover:opacity-95 transition-opacity"
                >
                  <CalendarCheck className="h-3.5 w-3.5" />
                  <span>Add to Calendar</span>
                </button>
                <a
                  href={activeEvent.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-lg border border-[#b8860b]/50 bg-[#faf6ee] text-[#6b4f17] text-[0.68rem] uppercase font-medium tracking-wider flex items-center justify-center gap-1 hover:bg-[#f3ebd7] transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Quick Switcher for the 3 Dates */}
            <div className="mt-3 flex justify-center gap-1.5 sm:gap-2">
              {events.map((ev) => (
                <button
                  key={ev.id}
                  type="button"
                  onClick={() => setSelectedDay(ev.dayNumber)}
                  className={`px-2.5 py-1 rounded-full text-[0.65rem] font-medium transition-all ${
                    selectedDay === ev.dayNumber
                      ? "bg-[#b8860b] text-white shadow-xs"
                      : "bg-[#faf6ee] text-[#6b4f17] border border-[#d4af37]/40 hover:bg-[#f3ebd7]"
                  }`}
                >
                  {ev.dayNumber} Nov · {ev.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
