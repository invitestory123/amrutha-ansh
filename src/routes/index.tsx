import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { Reveal } from "@/components/wedding/Section";
import { SaveTheDateCalendar } from "@/components/wedding/SaveTheDateCalendar";
import { CoupleStory } from "@/components/wedding/CoupleStory";
import { PhysicalReceptionCardView } from "@/components/wedding/PhysicalReceptionCardView";
import { CelebrationsTimeline } from "@/components/wedding/CelebrationsTimeline";
import { VenueSection } from "@/components/wedding/VenueSection";
import { WishLantern } from "@/components/wedding/WishLantern";
import { WeddingFooter } from "@/components/wedding/WeddingFooter";
import { InvitationOpener } from "@/components/wedding/InvitationOpener";
import { BackgroundMusic } from "@/components/wedding/BackgroundMusic";
import { couple } from "@/lib/wedding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Amrutha & Ansh | Wedding Invitation · 22 & 29 Nov 2026",
      },
      {
        name: "description",
        content:
          "Together with their families, Amrutha V and Ansh Haresh Shah invite you to their wedding celebrations in Bengaluru & Vadodara. Wedding: 22 Nov 2026 · Reception: 29 Nov 2026.",
      },
      {
        property: "og:title",
        content: "Amrutha & Ansh | Wedding Invitation · 22 & 29 Nov 2026",
      },
      {
        property: "og:description",
        content:
          "Wedding Ceremony in Bengaluru (22 Nov 2026) · Garba-Raas (28 Nov) & Reception (29 Nov 2026) in Vadodara.",
      },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:secure_url", content: "/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Amrutha & Ansh Wedding Invitation",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Amrutha & Ansh | Wedding Invitation · 22 & 29 Nov 2026",
      },
      {
        name: "twitter:description",
        content:
          "Wedding in Bengaluru (22 Nov) · Garba & Reception in Vadodara (28 & 29 Nov 2026).",
      },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: InvitationPage,
});

function InvitationPage() {
  return (
    <main className="paper overflow-x-hidden min-h-screen text-[#2c241d] selection:bg-[#d4af37]/30">
      {/* Background Music Player (Kesariya Instrumental Loop) */}
      <BackgroundMusic />

      {/* Royal Seal Curtain Opener */}
      <InvitationOpener />

      {/* Hero Section with Parents and Couple */}
      <Hero />

      {/* Countdown Section */}
      <section className="px-4 py-12 bg-gradient-to-b from-transparent via-[#faf4e6]/50 to-transparent">
        <Reveal>
          <Countdown iso={couple.weddingISO} />
        </Reveal>
      </section>

      {/* Model Save the Date Ornate Calendar (Image 5 Reference) */}
      <Reveal>
        <SaveTheDateCalendar />
      </Reveal>

      {/* Couple Story & Gallery (Images 3 & 4 Reference) */}
      <Reveal>
        <CoupleStory />
      </Reveal>

      {/* Physical Reception Card Digital Replica (Image 2 Reference) */}
      <Reveal>
        <PhysicalReceptionCardView />
      </Reveal>

      {/* Complete Celebrations & Itinerary Timeline */}
      <Reveal>
        <CelebrationsTimeline />
      </Reveal>

      {/* Venues & Google Maps Explorer */}
      <Reveal>
        <VenueSection />
      </Reveal>

      {/* Interactive Wishes Ceremony */}
      <Reveal>
        <WishLantern />
      </Reveal>

      {/* Wedding Footer with Share, WhatsApp, and Calendar */}
      <WeddingFooter />
    </main>
  );
}
