import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./ui/GlassCard";

// Ganti dengan foto-foto kamu
import photo1 from "../assets/images/Photo1.jpg";
import photo2 from "../assets/images/Photo2.jpg";
import photo3 from "../assets/images/Photo3.jpg";
import photo4 from "../assets/images/Photo4.jpg";
import photo5 from "../assets/images/Photo5.jpg";
import photo6 from "../assets/images/Photo6.jpg";

const memories = [
  {
    image: photo1,
    title: "A Beautiful Day",
    description: "One of my favorite memories with you 💕",
  },
  {
    image: photo2,
    title: "That Smile",
    description: "A smile I could never forget 🥹",
  },
  {
    image: photo3,
    title: "Our Little Adventure",
    description: "Every moment feels special with you ✨",
  },
  {
    image: photo4,
    title: "Mirror Mirror",
    description: "Just a random mirror selfie that somehow became one of my favorite pictures. 🥹💖",
  },
  {
    image: photo5,
    title: "Us",
    description: "Simple moments, beautiful memories 🌸",
  },
  {
    image: photo6,
    title: "Another Memory",
    description: "And hopefully, many more to come 💗",
  },
];

export default function Gallery() {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <section
      id="gallery"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-24
      "
    >
      <div className="w-full max-w-6xl">

        {/* Title */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className="text-center mb-12"
        >
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
            OUR MEMORIES
          </h2>

          <p className="text-white text-lg">
            Little moments that became beautiful memories 📸
          </p>
        </motion.div>

        {/* Gallery */}
        <GlassCard className="p-4 md:p-8">

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              gap-4
              md:gap-6
            "
          >
            {memories.map((memory, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedMemory(memory)}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  aspect-square
                  cursor-pointer
                  group
                  shadow-lg
                "
              >
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/30
                    transition
                    duration-300
                    flex
                    items-end
                    p-4
                  "
                >
                  <p
                    className="
                      text-white
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-300
                      text-left
                      font-semibold
                    "
                  >
                    {memory.title}
                  </p>
                </div>

              </motion.button>
            ))}
          </div>

        </GlassCard>

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="
            text-center
            text-white/70
            mt-8
          "
        >
          Click a photo to relive the memory 💕
        </motion.p>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedMemory(null)}
            className="
              fixed
              inset-0
              z-50
              bg-black/70
              backdrop-blur-sm
              flex
              items-center
              justify-center
              p-6
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 50,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                w-full
                max-w-lg
                bg-pink-100
                rounded-3xl
                overflow-hidden
                shadow-2xl
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMemory(null)}
                className="
                  absolute
                  top-4
                  right-4
                  z-10
                  w-10
                  h-10
                  rounded-full
                  bg-black/40
                  text-white
                  text-xl
                  hover:bg-black/60
                  transition
                "
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={selectedMemory.image}
                alt={selectedMemory.title}
                className="
                  w-full
                  max-h-[65vh]
                  object-cover
                "
              />

              {/* Description */}
              <div className="p-6 text-center">
                <h3
                  className="
                    text-2xl
                    text-pink-600
                    mb-3
                  "
                  style={{
                    fontFamily: "Pixelify Sans",
                  }}
                >
                  {selectedMemory.title}
                </h3>

                <p className="text-gray-600">
                  {selectedMemory.description}
                </p>

                <div className="text-3xl mt-4">
                  💖
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}