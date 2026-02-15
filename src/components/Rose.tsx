import { motion } from "framer-motion";

interface RoseProps {
  delay?: number;
  x?: number;
  scale?: number;
}

const Rose = ({ delay = 0, x = 0, scale = 1 }: RoseProps) => {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{ left: `${x}%`, scale }}
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 1.5, ease: "easeOut" }}
    >
      {/* Stem */}
      <motion.div
        className="mx-auto w-1 rounded-full"
        style={{
          height: 120 * scale,
          background: "linear-gradient(to top, hsl(120 40% 25%), hsl(120 50% 35%))",
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: delay + 0.3, duration: 1, ease: "easeOut" }}
        style-origin="bottom"
      />

      {/* Flower head */}
      <motion.div
        className="relative -mt-4 mx-auto"
        style={{ width: 60 * scale, height: 60 * scale, animation: "float 4s ease-in-out infinite", animationDelay: `${delay}s` }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.8, duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        {/* Petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <motion.div
            key={angle}
            className="absolute top-1/2 left-1/2"
            style={{
              width: 22 * scale,
              height: 30 * scale,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              background: `linear-gradient(135deg, hsl(${345 + i * 2} 80% ${55 + i * 3}%), hsl(${350 + i} 70% ${65 + i * 2}%))`,
              transformOrigin: "bottom center",
              transform: `translate(-50%, -100%) rotate(${angle}deg)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 1 + i * 0.05, duration: 0.5 }}
          />
        ))}
        {/* Center */}
        <div
          className="absolute top-1/2 left-1/2 rounded-full z-10"
          style={{
            width: 12 * scale,
            height: 12 * scale,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, hsl(38 80% 60%), hsl(38 70% 45%))",
          }}
        />
      </motion.div>

      {/* Leaves */}
      <motion.div
        className="absolute"
        style={{
          bottom: 40 * scale,
          left: -15 * scale,
          width: 25 * scale,
          height: 12 * scale,
          background: "hsl(120 45% 30%)",
          borderRadius: "50% 0 50% 0",
          transform: "rotate(-30deg)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.6, duration: 0.5 }}
      />
      <motion.div
        className="absolute"
        style={{
          bottom: 60 * scale,
          right: -15 * scale,
          width: 25 * scale,
          height: 12 * scale,
          background: "hsl(120 45% 30%)",
          borderRadius: "0 50% 0 50%",
          transform: "rotate(30deg)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.7, duration: 0.5 }}
      />
    </motion.div>
  );
};

export default Rose;
