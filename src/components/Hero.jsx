import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        relative
        overflow-hidden
        flex
        items-center
        justify-center
        px-6
      "
    >

      {/* Hero Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 w-full max-w-lg"
      >
        <GlassCard className="
          p-12
          text-center
          ">
          <p className="text-4xl mb-4">
            🌸
          </p>

          <h1
            className="
              text-6xl
              md:text-7xl
              font-bold
              text-pink-700
              leading-tight
            "
            style={{
              fontFamily: "Pixelify Sans",
            }}
          >
            HAPPY
            <br />
            BIRTHDAY
          </h1>

          <h2
            className="
              mt-4
              text-5xl
              md:text-6xl
              font-extrabold
              text-pink-100
              drop-shadow-lg
              tracking-wide
            "
          >
            ANGELYN💖
          </h2>

          <p className="mt-6 text-white/90 font-semibold">
            You are my favorite adventure.
          </p>

          <button
            className="
              mt-8
              px-6
              py-3
              rounded-full
              bg-pink-400/90
              text-white
              font-semibold
              transition
              hover:scale-105
            "
          >
            Our Story Starts Here 💖
          </button>
        </GlassCard>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          text-white
          text-center
        "
      >
        <button className="
          text-md 
          opacity-90
          text-white
        ">
          Scroll
        </button>

        <div className="text-2xl">
          ↓
        </div>
      </motion.div>
    </section>
  );
}