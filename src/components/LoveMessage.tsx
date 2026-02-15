import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const LoveMessage = () => {
  const navigate = useNavigate();
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

      <motion.button
        onClick={() => navigate("/letter")}
        className="mt-10 px-8 py-3 rounded-full font-display text-lg border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 mx-auto"
        style={{
          boxShadow: "0 0 20px hsl(345 80% 55% / 0.2)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5, duration: 1 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(345 80% 55% / 0.4)" }}
        whileTap={{ scale: 0.97 }}
      >
        <Heart className="w-5 h-5" />
        Read My Letter
      </motion.button>
    </motion.div>
  );
};

export default LoveMessage;
