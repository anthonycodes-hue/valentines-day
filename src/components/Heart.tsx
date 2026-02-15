import { motion } from "framer-motion";

const Heart = ({ delay = 0, x = 50, size = 30 }: { delay?: number; x?: number; size?: number }) => (
  <motion.div
    className="absolute"
    style={{
      left: `${x}%`,
      bottom: "20%",
      fontSize: size,
      animation: "heartbeat 1.5s ease-in-out infinite",
      animationDelay: `${delay}s`,
    }}
    initial={{ opacity: 0, y: 50, scale: 0 }}
    animate={{ opacity: 0.6, y: -100 - Math.random() * 200, scale: 1 }}
    transition={{ delay: delay + 2, duration: 2, ease: "easeOut" }}
  >
    💕
  </motion.div>
);

export default Heart;
