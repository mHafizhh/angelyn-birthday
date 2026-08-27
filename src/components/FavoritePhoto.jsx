import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import favoritePhoto from "../assets/images/FavoritePhoto.jpg";

export default function FavoritePhoto() {
  return (
    <section
      id="favorite-photo"
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
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
        }}
        className="w-full max-w-md"
      >

        <GlassCard className="p-6 text-center">

          {/* Title */}
          <h2
            className="
              text-3xl
              text-pink-700
              mb-6
            "
            style={{
              fontFamily: "Pixelify Sans",
            }}
          >
            OUR FAVORITE
          </h2>

          {/* Favorite Photo */}
          <div className="overflow-hidden rounded-3xl">
            <motion.img
              src={favoritePhoto}
              alt="Our favorite moment"
              className="
                w-full
                aspect-[3/4]
                object-cover
              "
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.4,
              }}
            />
          </div>

          {/* Description */}
          <p className="mt-6 text-white text-lg">
            One smile from you makes my whole day brighter.
          </p>

          {/* Heart */}
          <motion.p
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-4xl mt-6"
          >
            💖
          </motion.p>

        </GlassCard>

      </motion.div>

    </section>
  );
}