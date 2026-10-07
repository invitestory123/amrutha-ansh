import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.55;

    function startMusic() {
      if (!audioRef.current) return;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          // Autoplay was blocked by browser policy
        });
    }

    // Triggered when user opens invitation via seal
    window.addEventListener("play-wedding-music", startMusic);

    // Also attempt playback on first interaction anywhere
    function handleFirstGesture() {
      if (!hasInteracted && audioRef.current && audioRef.current.paused) {
        startMusic();
      }
    }
    window.addEventListener("click", handleFirstGesture, { once: true });
    window.addEventListener("touchstart", handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener("play-wedding-music", startMusic);
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
    };
  }, [hasInteracted]);

  function togglePlay(e: React.MouseEvent) {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => {
          console.error("Playback failed:", err);
        });
    }
  }

  return (
    <>
      {/* Background Audio Element with Loop */}
      <audio
        ref={audioRef}
        src="/audio/bgm.mp3"
        loop
        preload="auto"
        playsInline
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {});
          }
        }}
      />

      {/* Floating Royal Gold Music Player Button */}
      <div className="fixed bottom-5 right-5 z-[90]">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Mute background music" : "Play Kesariya background music"}
          className={`group relative flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 ${
            isPlaying
              ? "bg-[#1f281e]/90 border-[#d4af37] text-[#fbf7ee] shadow-[0_8px_24px_rgba(212,175,55,0.35)]"
              : "bg-[#faf6ee]/90 border-[#d4af37]/60 text-[#4a3e30] hover:bg-[#faf6ee]"
          }`}
        >
          {/* Animated sound wave bars when playing */}
          {isPlaying ? (
            <div className="flex items-center gap-0.5 h-4">
              <span className="w-0.5 h-3 bg-[#f5e297] rounded-full animate-pulse" />
              <span
                className="w-0.5 h-4 bg-[#d4af37] rounded-full animate-pulse"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-0.5 h-2 bg-[#f5e297] rounded-full animate-pulse"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          ) : (
            <VolumeX className="h-4 w-4 text-[#8c6f37] shrink-0" />
          )}

          {/* Music track label */}
          <div className="flex flex-col text-left">
            <span className="text-[0.62rem] font-semibold uppercase tracking-wider text-[#d4af37] leading-none">
              {isPlaying ? "Music Playing" : "Play BGM"}
            </span>
            <span className="text-[0.58rem] text-inherit opacity-75 font-serif italic truncate max-w-[110px] leading-tight mt-0.5">
              Kesariya · Instrumental
            </span>
          </div>

          {isPlaying && <Volume2 className="h-3.5 w-3.5 text-[#d4af37] shrink-0 opacity-80" />}
        </button>
      </div>
    </>
  );
}
