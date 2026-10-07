import { useState, useEffect, useRef } from "react";
import { couple } from "@/lib/wedding";
import { Sparkles, Music, Play } from "lucide-react";

export function InvitationOpener() {
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Lock scroll while opener is active
    if (!opened) {
      document.body.style.overflow = "hidden";
    }

    function handleReplay() {
      setOpened(false);
      setIsPlaying(true);
      setIsEnded(false);
      setIsFading(false);
      setProgress(0);
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch((err) => {
            console.warn("Video replay error:", err);
          });
        }
      }, 80);
    }

    window.addEventListener("replay-wedding-opener", handleReplay);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("replay-wedding-opener", handleReplay);
    };
  }, [opened]);

  function handleStart() {
    setIsPlaying(true);
    // Start background wedding music seamlessly
    window.dispatchEvent(new CustomEvent("play-wedding-music"));

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.warn("Video playback deferred or failed:", err);
        handleFinish();
      });
    }
  }

  function handleTimeUpdate() {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    setProgress(pct);
  }

  function handleVideoEnded() {
    setIsEnded(true);
    // Hold final frame of couple under arch for 700ms, then smoothly dissolve
    setTimeout(() => {
      handleFinish();
    }, 700);
  }

  function handleFinish() {
    setIsFading(true);
    setTimeout(() => {
      setOpened(true);
      document.body.style.overflow = "";
    }, 900);
  }

  if (opened) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Cinematic Entry"
      className={`fixed inset-0 z-[120] flex items-center justify-center overflow-hidden transition-all duration-900 ease-out ${
        isFading ? "opacity-0 scale-[1.03] pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{
        background: "radial-gradient(ellipse at 50% 40%, #151e16 0%, #0c120d 65%, #050805 100%)",
      }}
    >
      {/* Ambient background particles/glow for desktop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#d4af37]/15 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 h-80 w-80 rounded-full bg-[#f5e297]/10 blur-3xl" />
      </div>

      {/* Main Theatrical Stage Container */}
      <div
        className="relative w-full h-full sm:h-[90vh] sm:max-h-[860px] sm:max-w-[430px] sm:rounded-3xl overflow-hidden sm:border sm:border-[#d4af37]/40 sm:shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,55,0.2)] bg-black flex flex-col items-center justify-center select-none"
        onClick={!isPlaying ? handleStart : undefined}
      >
        {/* Layer 1: High-res Poster Image (First frame: Lantern on beach arch) */}
        <img
          src="/media/opener-poster.webp"
          alt="Amrutha & Ansh Wedding Lantern"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          loading="eager"
          decoding="async"
        />

        {/* Layer 2: Seamless Cinematic Video */}
        <video
          ref={videoRef}
          src="/media/wedding-opener.mp4"
          playsInline
          webkit-playsinline="true"
          preload="auto"
          muted
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Layer 3: Final Freeze Frame Image (revealed couple under arch) */}
        <img
          src="/media/opener-last-frame.webp"
          alt="Amrutha & Ansh Wedding"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${
            isEnded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Pre-Open Interactive Callout & Regal Card */}
        <div
          className={`relative z-20 mx-4 w-full max-w-[340px] p-6 text-center rounded-2xl border border-[#d4af37]/45 bg-[#121913]/85 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-700 ${
            isPlaying ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100 animate-in fade-in"
          }`}
        >
          {/* Sacred Devanagari Invocation */}
          <p className="font-devanagari text-xs sm:text-sm text-[#f5e297] tracking-widest drop-shadow-sm">
            ॥ श्री गणेशाय नमः ॥
          </p>

          {/* Monogram Seal with breathing warm pulse */}
          <div className="relative mx-auto mt-4 flex justify-center">
            <div className="absolute inset-0 rounded-full bg-[#d4af37]/25 blur-lg animate-pulse" />
            <div className="relative h-24 w-24 rounded-full p-1 bg-gradient-to-tr from-[#996515] via-[#f5e297] to-[#996515] shadow-xl">
              <div className="h-full w-full rounded-full bg-[#182119] flex items-center justify-center overflow-hidden border border-[#d4af37]/50">
                <img
                  src={couple.monogramUrl}
                  alt="Amrutha & Ansh Monogram"
                  className="h-20 w-20 object-contain drop-shadow"
                />
              </div>
            </div>
          </div>

          {/* Couple Names & Invitation Heading */}
          <div className="mt-4">
            <p className="text-[0.62rem] uppercase tracking-[0.32em] text-[#e8c872]/85 font-medium">
              Wedding Celebrations
            </p>
            <h1 className="mt-1 font-cinzel text-2xl font-semibold text-[#fbf7ee] tracking-wide">
              {couple.brideFirst} &amp; {couple.groomFirst}
            </h1>
            <p className="mt-1 text-[0.68rem] text-[#dcd7cb] font-body tracking-wider">
              Bengaluru &amp; Vadodara · Nov 2026
            </p>
          </div>

          {/* Tap to Open CTA Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleStart();
            }}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-gradient-to-r from-[#996515] via-[#f5e297] to-[#996515] text-[#1a1c17] font-body font-semibold text-xs tracking-[0.2em] uppercase shadow-[0_8px_24px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <Play className="h-3.5 w-3.5 fill-[#1a1c17] text-[#1a1c17]" />
            <span>Tap to Open Invitation</span>
          </button>

          {/* Sound Guidance Callout */}
          <p className="mt-3 text-[0.62rem] text-[#f5e297]/80 tracking-wider flex items-center justify-center gap-1.5">
            <Music className="h-3 w-3 text-[#f5e297]" />
            <span>Best experienced with sound</span>
          </p>
        </div>

        {/* In-Video Skip Button */}
        {isPlaying && !isEnded && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleFinish();
            }}
            className="absolute top-4 right-4 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 hover:bg-black/75 border border-[#d4af37]/40 text-[#f5e297] text-xs font-body tracking-wider backdrop-blur-md transition-all shadow-md active:scale-95 cursor-pointer"
            aria-label="Skip video intro"
          >
            <span>Skip Intro</span>
            <Sparkles className="h-3 w-3 text-[#f5e297]" />
          </button>
        )}

        {/* Video Progress Bar */}
        {isPlaying && (
          <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-30 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#d4af37] via-[#f5e297] to-[#d4af37] transition-all duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
