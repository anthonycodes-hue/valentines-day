import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
      size: 8 + Math.random() * 16,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: "-5%",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            background: `radial-gradient(ellipse, hsl(350 70% 75%), hsl(345 85% 40%))`,
            borderRadius: "50% 0 50% 50%",
            animation: `petal-fall ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingPetals;
