import FallingPetals from "@/components/FallingPetals";
import Rose from "@/components/Rose";
import Heart from "@/components/Heart";
import LoveMessage from "@/components/LoveMessage";
import BackgroundMusic from "@/components/BackgroundMusic";

const roses = [
  { x: 10, delay: 0, scale: 0.7 },
  { x: 22, delay: 0.3, scale: 0.9 },
  { x: 35, delay: 0.1, scale: 1 },
  { x: 50, delay: 0.5, scale: 1.1 },
  { x: 65, delay: 0.2, scale: 1 },
  { x: 78, delay: 0.4, scale: 0.9 },
  { x: 90, delay: 0.15, scale: 0.7 },
];

const hearts = [
  { x: 15, delay: 0.2, size: 24 },
  { x: 30, delay: 0.8, size: 18 },
  { x: 55, delay: 0.5, size: 28 },
  { x: 70, delay: 1, size: 20 },
  { x: 85, delay: 0.6, size: 22 },
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      <BackgroundMusic />
      {/* Ambient glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 80%, hsl(345 80% 55% / 0.15) 0%, transparent 60%), radial-gradient(ellipse at 30% 20%, hsl(38 80% 60% / 0.05) 0%, transparent 50%)",
        }}
      />

      <FallingPetals />

      {/* Message */}
      <LoveMessage />

      {/* Roses along the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-10">
        {roses.map((r, i) => (
          <Rose key={i} x={r.x} delay={r.delay} scale={r.scale} />
        ))}
      </div>

      {/* Floating hearts */}
      {hearts.map((h, i) => (
        <Heart key={i} x={h.x} delay={h.delay} size={h.size} />
      ))}
    </div>
  );
};

export default Index;
