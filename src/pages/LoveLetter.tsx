import { motion } from "framer-motion";
import FallingPetals from "@/components/FallingPetals";
import { useNavigate } from "react-router-dom";

const letterParagraphs = [
  "My Dearest Love Rose,",
  "From the moment I met you, my life changed forever. Your smile lights up every room, and your laughter is the melody my heart loves to hear.",
  "Each day with you is a gift. You turn simple walks into grand adventures and quiet nights into precious memories.",
  "You are my safe place, my best friend, my greatest joy. Your embrace feels like home, and your love humbles me every day.",
  "I adore your sparkling eyes, caring heart, and gentle spirit. The little things you do make me fall for you even more.",
  "I love you for everything you are no grand gestures needed. Just being with you is enough.",
  "Even when I'm effortless, when I haven't done anything special or extraordinary, I still love you with my whole heart. My love for you doesn't need grand gestures or perfect words it's so natural and true that it simply flows, no matter what. Just being me, I love you so much.",
  "Thank you for loving me on every kind of day. You inspire me to be the best version of myself.",
  "If I had a flower for every smile, I'd have an endless garden. With every heartbeat, you fill my world with light.",
  "I promise to love you fiercely, bring you laughter, and stand by you always.",
  "You are my forever Valentine, the love of my life, today and every day.",
  "No matter how many years pass, I will always choose you. Every night I'm grateful you're mine.",
  "Happy Valentine's Day, my love. You own my heart. 💕",
  "Forever yours,\nWith all my love ❤️",
];

const LoveLetter = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-background overflow-y-auto flex flex-col items-center">
      <FallingPetals />

      {/* Ambient glow */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(345 80% 55% / 0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, hsl(38 80% 60% / 0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative h-screen z-10 w-full max-w-2xl mx-auto px-6 py-12 flex flex-col items-center">
        {/* Top Bar */}
        <div className="flex justify-between items-center w-full mb-6">
          <motion.button
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-primary transition-colors font-display text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            ← Back
          </motion.button>

          <motion.div
            className="text-center"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <span className="text-6xl">💌</span>
          </motion.div>

          <div className="w-[60px]" />
        </div>

        {/* Letter Card */}
        <motion.div
          className="relative rounded-lg p-8 sm:p-12 w-full"
          style={{
            background:
              "linear-gradient(135deg, hsl(340 25% 12%) 0%, hsl(340 20% 10%) 100%)",
            border: "1px solid hsl(340 20% 20%)",
            boxShadow:
              "0 20px 60px hsl(345 80% 20% / 0.3), inset 0 1px 0 hsl(340 20% 25%)",
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Decorative top border */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
            style={{
              background:
                "linear-gradient(90deg, hsl(345 80% 55%), hsl(38 80% 60%), hsl(345 80% 55%))",
            }}
          />

          {letterParagraphs.map((para, i) => (
            <motion.p
              key={i}
              className={`mb-6 leading-relaxed ${i === 0
                ? "font-script text-4xl text-primary"
                : i === letterParagraphs.length - 1
                  ? "font-script text-2xl text-gold mt-10 whitespace-pre-line text-center"
                  : "font-display text-foreground/85 text-base sm:text-lg text-justify"
                }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
            >
              {para}
            </motion.p>
          ))}

          {/* Bottom Heart */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8 + letterParagraphs.length * 0.15,
              type: "spring",
              bounce: 0.5,
            }}
            style={{ animation: "heartbeat 1.5s ease-in-out infinite" }}
          >
            <span className="text-4xl">❤️</span>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-12 font-display mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          Made with Anthony ✨
        </motion.p>

      </div>
    </div>
  );
};

export default LoveLetter;