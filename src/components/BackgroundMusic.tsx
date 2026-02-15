import { useState, useRef, useCallback, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MUSIC_URL = "https://cdn.pixabay.com/audio/2024/11/28/audio_fda623ff7a.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => {
        setPlaying(true);
        setStarted(true);
      });
    }
  }, [playing]);

  // Show a big "tap to play" overlay initially
  if (!started) {
    return (
      <button
        onClick={toggle}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm cursor-pointer"
      >
        <div className="text-center animate-pulse">
          <span className="text-5xl mb-4 block">🎵</span>
          <p className="font-script text-3xl text-primary">Tap to begin</p>
          <p className="text-muted-foreground text-sm mt-2">with music 💕</p>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-secondary/60 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? (
        <Volume2 className="w-5 h-5 text-primary" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );
};

export default BackgroundMusic;
