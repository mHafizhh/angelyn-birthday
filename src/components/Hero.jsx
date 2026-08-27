import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import { Link } from "react-scroll";

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
        <GlassCard
          className="
            p-12
            text-center
          "
        >

          {/* Sakura */}
          <p className="text-4xl mb-4">
            🌸
          </p>

          {/* Title */}
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

          {/* Name */}
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
            Angelyn💖
          </h2>

          {/* Description */}
          <p className="mt-6 text-white/90 font-semibold">
            You are my favorite adventure.
          </p>

          {/* Story Button */}
          <Link
            to="favorite-photo"
            smooth={true}
            duration={900}
            offset={0}
            className="
              inline-block
              mt-8
              px-6
              py-3
              rounded-full
              bg-pink-400/90
              text-white
              font-semibold
              transition
              hover:scale-105
              cursor-pointer
            "
          >
            Our Story Starts Here 💖
          </Link>

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

        <Link
          to="favorite-photo"
          smooth={true}
          duration={900}
          offset={0}
          className="
            cursor-pointer
            opacity-90
            text-white
          "
        >
          <p className="text-md">
            Scroll
          </p>

          <div className="text-2xl">
            ↓
          </div>
        </Link>

      </motion.div>

    </section>
  );
}