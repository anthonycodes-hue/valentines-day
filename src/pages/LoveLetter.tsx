import { motion } from "framer-motion";
import FallingPetals from "@/components/FallingPetals";
import { useNavigate } from "react-router-dom";

const letterParagraphs = [
  "My Dearest Love,",
  "From the very first moment I saw you, I knew my life was about to change forever. Your smile lit up the room like a thousand stars, and your laughter became the melody I never knew my heart was waiting to hear.",
  "Every day with you feels like a gift I don't deserve but am endlessly grateful for. You have this incredible way of making even the most ordinary moments feel magical — a simple walk becomes an adventure, a quiet evening becomes a cherished memory, and every sunrise feels brighter because I get to share it with you.",
  "You are my safe place, my best friend, my greatest adventure. When the world gets heavy, your arms feel like home. When I'm lost, your voice is the compass that guides me back. You have a heart so big and so beautiful that it humbles me every single day.",
  "I love the way your eyes sparkle when you talk about something you're passionate about. I love how you care so deeply for the people around you. I love your strength, your kindness, your gentle spirit. I love the little things — the way you laugh, the way you say my name, the way you hold my hand like you never want to let go.",
  "Thank you for choosing me. Thank you for loving me on my best days and my worst. Thank you for believing in us even when things weren't easy. You make me want to be a better person — not because you ask me to, but because you inspire me to.",
  "If I had a flower for every time you made me smile, I'd have an endless garden. If I had a star for every time you made my heart skip a beat, I'd hold the entire galaxy in my hands.",
  "I promise to love you fiercely, to hold you close, to be your shelter in every storm. I promise to make you laugh until your cheeks hurt, to dry your tears, to stand by your side through every chapter of our story.",
  "You are not just my Valentine today — you are my Valentine every single day. You are the love of my life, my forever, my everything.",
  "No matter how many years pass, I will never stop falling in love with you. Every morning I wake up and choose you. Every night I fall asleep grateful that you're mine.",
  "Happy Valentine's Day, my love. Today and always, you own my heart completely. 💕",
  "Forever & Always Yours,\nWith all my love ❤️",
];

const LoveLetter = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <FallingPetals />

      {/* Ambient glow */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(345 80% 55% / 0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, hsl(38 80% 60% / 0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">
        {/* Back button */}
        <motion.button
          onClick={() => navigate("/")}
          className="mb-8 text-muted-foreground hover:text-primary transition-colors font-display text-sm flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ← Back
        </motion.button>

        {/* Letter envelope opening */}
        <motion.div
          className="text-center mb-12"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <span className="text-6xl">💌</span>
        </motion.div>

        {/* Letter content */}
        <motion.div
          className="relative rounded-lg p-8 sm:p-12"
          style={{
            background: "linear-gradient(135deg, hsl(340 25% 12%) 0%, hsl(340 20% 10%) 100%)",
            border: "1px solid hsl(340 20% 20%)",
            boxShadow: "0 20px 60px hsl(345 80% 20% / 0.3), inset 0 1px 0 hsl(340 20% 25%)",
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Decorative top border */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
            style={{
              background: "linear-gradient(90deg, hsl(345 80% 55%), hsl(38 80% 60%), hsl(345 80% 55%))",
            }}
          />

          {letterParagraphs.map((para, i) => (
            <motion.p
              key={i}
              className={`mb-6 leading-relaxed ${
                i === 0
                  ? "font-script text-4xl text-primary"
                  : i === letterParagraphs.length - 1
                  ? "font-script text-2xl text-gold mt-10 whitespace-pre-line text-center"
                  : "font-display text-foreground/85 text-base sm:text-lg"
              } ${i === 0 ? "" : "text-justify"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
            >
              {para}
            </motion.p>
          ))}

          {/* Heart decoration at bottom */}
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

        <motion.p
          className="text-center text-muted-foreground text-sm mt-12 font-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          Made with love, just for you ✨
        </motion.p>
      </div>
    </div>
  );
};

export default LoveLetter;
