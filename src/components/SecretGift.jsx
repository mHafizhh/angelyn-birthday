import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./ui/GlassCard";

export default function SecretGift() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      id="secret-gift"
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
        className="w-full max-w-xl"
      >
        <GlassCard className="p-8 md:p-12 text-center">

          <h2
            className="
              text-4xl
              md:text-5xl
              text-pink-700
              mb-4
            "
            style={{
              fontFamily: "Pixelify Sans",
            }}
          >
            ONE MORE THING...
          </h2>

          <p className="text-white/80 mb-10">
            I have a little surprise for you. 👀
          </p>

          <motion.button
            onClick={() => setOpened(true)}
            whileHover={{
              scale: 1.1,
              rotate: [-2, 2, -2],
            }}
            whileTap={{
              scale: 0.9,
            }}
            animate={
              !opened
                ? {
                    y: [0, -10, 0],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              text-9xl
              cursor-pointer
              mb-8
            "
          >
            🎁
          </motion.button>

          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  bg-white/20
                  border
                  border-white/30
                  rounded-3xl
                  p-8
                  mt-6
                "
              >
                <div className="text-6xl mb-5">
                  🎉💖🎂
                </div>

                <h3
                  className="text-3xl text-pink-100 mb-5"
                  style={{
                    fontFamily: "Pixelify Sans",
                  }}
                >
                  SURPRISE!
                </h3>

                <p className="text-white text-lg leading-relaxed">
                  The real gift might not be inside this website...
                </p>

                <p className="text-white/90 text-lg leading-relaxed mt-4">
                  But I hope every little part of this website reminds you
                  of how special you are.
                </p>

                <p className="text-white/90 text-xl mt-6">
                  This little website was made especially for you. 💕
                </p>

              </motion.div>
            )}
          </AnimatePresence>

          {!opened && (
            <p className="text-white/60 text-sm">
              Click the gift to open it 🎁
            </p>
          )}

        </GlassCard>
      </motion.div>
    </section>
  );
}