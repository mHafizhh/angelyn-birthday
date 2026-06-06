import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";

export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      relative
      overflow-hidden
    "
    >
      <div
        className="
        absolute inset-0
        bg-gradient-to-b
        from-pink-200
        via-pink-300
        to-purple-300
      "
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md"
      >
        <GlassCard className="p-8 text-center">
          <p className="text-3xl mb-4">🌸</p>

          <h1
            className="
            text-5xl
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

          <h2 className="mt-4 text-3xl font-bold text-white">
            ANGELYN PANJAITAN
          </h2>

          <p className="mt-6 text-white/90">
            You are my favorite adventure.
          </p>

          <button
            className="
            mt-8
            px-6
            py-3
            rounded-full
            bg-pink-500
            text-white
            font-semibold
            hover:scale-105
            transition
          "
          >
            Begin Our Story 💖
          </button>
        </GlassCard>
      </motion.div>
    </section>
  );
}