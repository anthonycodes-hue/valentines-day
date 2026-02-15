import { motion } from "framer-motion";

const LoveMessage = () => {
  return (
    <motion.div
      className="relative z-20 text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1.5 }}
    >
      <motion.div
        className="mb-4"
        style={{ animation: "heartbeat 1.5s ease-in-out infinite" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.8, type: "spring", bounce: 0.5 }}
      >
        <span className="text-6xl">❤️</span>
      </motion.div>

      <motion.h1
        className="font-script text-5xl sm:text-7xl md:text-8xl text-primary mb-6"
        style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        Happy Valentine's Day
      </motion.h1>

      <motion.p
        className="font-display text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-lg mx-auto mb-4 italic"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        "Every love story is beautiful, but ours is my favorite."
      </motion.p>

      <motion.p
        className="font-script text-3xl sm:text-4xl text-gold mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        I love you more than words can say 💗
      </motion.p>

      <motion.p
        className="font-display text-muted-foreground text-base mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
      >
        You are the best thing that ever happened to me ✨
      </motion.p>
    </motion.div>
  );
};

export default LoveMessage;
