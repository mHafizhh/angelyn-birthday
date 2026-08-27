import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./ui/GlassCard";

const reasons = [
  {
    number: "01",
    title: "Your Smile",
    text: "Because somehow, your smile has the power to make everything feel a little better. 😊",
    emoji: "😊",
  },
  {
    number: "02",
    title: "Being Yourself",
    text: "You never have to try too hard to be special. Just being yourself is already enough. 💕",
    emoji: "🌸",
  },
  {
    number: "03",
    title: "Your Little Things",
    text: "The small things you do, the random moments, and even your silly side are things worth remembering. ✨",
    emoji: "🥹",
  },
  {
    number: "04",
    title: "The Way You Make Moments Special",
    text: "Even ordinary moments somehow become beautiful memories when you're part of them. 💖",
    emoji: "📸",
  },
  {
    number: "05",
    title: "Simply You",
    text: "And honestly, the biggest reason is simple... you're you. And that's already something special. ❤️",
    emoji: "💗",
  },
];

export default function Reasons() {
  const [currentReason, setCurrentReason] = useState(0);

  const nextReason = () => {
    setCurrentReason((prev) =>
      prev === reasons.length - 1 ? 0 : prev + 1
    );
  };

  const previousReason = () => {
    setCurrentReason((prev) =>
      prev === 0 ? reasons.length - 1 : prev - 1
    );
  };

  const reason = reasons[currentReason];

  return (
    <section
      id="reasons"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-24
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
        className="w-full max-w-2xl"
      >
        <GlassCard className="p-8 md:p-12 text-center">

          <h2
            className="text-4xl md:text-5xl text-pink-700 mb-4"
            style={{
              fontFamily: "Pixelify Sans",
            }}
          >
            WHY YOU'RE SPECIAL
          </h2>

          <p className="text-white/80 mb-10">
            There are so many reasons... but let's start with a few. 💕
          </p>

          {/* Reason Counter */}
          <p
            className="text-white text-lg mb-4"
            style={{
              fontFamily: "Pixelify Sans",
            }}
          >
            REASON {reason.number} / 05
          </p>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReason}
              initial={{
                opacity: 0,
                x: 80,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -80,
                scale: 0.9,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                bg-white/20
                border
                border-white/30
                rounded-3xl
                p-8
                md:p-12
                min-h-[320px]
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-6xl mb-6"
              >
                {reason.emoji}
              </motion.div>

              <h3
                className="text-2xl md:text-3xl text-white mb-5"
                style={{
                  fontFamily: "Pixelify Sans",
                }}
              >
                {reason.title}
              </h3>

              <p className="text-white text-lg leading-relaxed">
                {reason.text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8">

            <button
              onClick={previousReason}
              className="
                px-5
                py-3
                rounded-full
                bg-white/20
                border
                border-white/30
                text-white
                hover:bg-white/30
                transition
              "
            >
              ← Previous
            </button>

            <button
              onClick={nextReason}
              className="
                px-6
                py-3
                rounded-full
                bg-pink-500
                text-white
                hover:bg-pink-600
                transition
                shadow-lg
              "
            >
              Next Reason →
            </button>

          </div>

        </GlassCard>
      </motion.div>
    </section>
  );
}