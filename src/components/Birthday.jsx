import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";

export default function Birthday() {
  return (
    <section
      id="birthday"
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
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
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

          {/* Cake */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-7xl md:text-8xl mb-8"
          >
            🎂
          </motion.div>

          <h2
            className="
              text-4xl
              md:text-6xl
              text-pink-700
              mb-6
            "
            style={{
              fontFamily: "Pixelify Sans",
            }}
          >
            HAPPY BIRTHDAY!
          </h2>

          <p className="text-white text-lg md:text-xl leading-relaxed">
            Today isn't just about getting older.
          </p>

          <p className="text-white/90 text-lg md:text-xl leading-relaxed mt-4">
            It's about celebrating another year of your life,
            all the memories you've made,
            and all the beautiful moments that are still waiting for you.
          </p>

          <p className="text-white/90 text-xl md:text-2xl mt-8">
            I hope this new year of your life brings you...
          </p>

          {/* Wishes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

            {[
              {
                emoji: "😊",
                text: "More reasons to smile",
              },
              {
                emoji: "✨",
                text: "More beautiful memories",
              },
              {
                emoji: "💖",
                text: "More happiness every day",
              },
            ].map((wish, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.2,
                }}
                className="
                  bg-white/15
                  border
                  border-white/20
                  rounded-2xl
                  p-5
                "
              >
                <div className="text-4xl mb-3">
                  {wish.emoji}
                </div>

                <p className="text-white">
                  {wish.text}
                </p>
              </motion.div>
            ))}

          </div>

          <motion.p
            className="text-2xl mt-10 text-white/90"
          >
            Wishing you the happiest birthday ever! 💕
          </motion.p>

        </GlassCard>
      </motion.div>
    </section>
  );
}