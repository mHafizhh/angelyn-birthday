import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./ui/GlassCard";

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="letter"
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
        <GlassCard className="p-6 md:p-10 text-center">

          {/* Title */}
          <h2
            className="
              text-4xl
              md:text-5xl
              text-pink-700
              mb-3
            "
            style={{
              fontFamily: "Pixelify Sans",
            }}
          >
            A LETTER FOR YOU
          </h2>

          <p className="text-white/80 mb-10">
            I have something to say...
          </p>

          {/* Envelope */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              relative
              w-64
              h-40
              mx-auto
              mb-10
              cursor-pointer
            "
          >
            {/* Envelope Body */}
            <div
              className="
                absolute
                inset-0
                rounded-xl
                bg-pink-300/90
                shadow-xl
                overflow-hidden
              "
            >
              {/* Envelope bottom */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-0
                  h-0
                  border-l-[128px]
                  border-r-[128px]
                  border-t-[80px]
                  border-l-transparent
                  border-r-transparent
                  border-t-pink-400
                "
              />
            </div>

            {/* Letter */}
            <motion.div
              animate={{
                y: isOpen ? -70 : 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                absolute
                left-1/2
                top-4
                -translate-x-1/2
                w-52
                h-32
                bg-white
                rounded-lg
                shadow-md
                flex
                items-center
                justify-center
                z-10
              "
            >
              <span className="text-4xl">
                💌
              </span>
            </motion.div>

            {/* Envelope Flap */}
            <motion.div
              animate={{
                rotateX: isOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.6,
              }}
              style={{
                transformOrigin: "top",
              }}
              className="
                absolute
                top-0
                left-0
                w-full
                h-20
                bg-pink-400
                z-20
                clip-path-envelope
              "
            >
              <div
                className="
                  w-0
                  h-0
                  mx-auto
                  border-l-[128px]
                  border-r-[128px]
                  border-t-[80px]
                  border-l-transparent
                  border-r-transparent
                  border-t-pink-500
                "
              />
            </motion.div>
          </motion.button>

          <p className="text-white/70 text-sm mb-6">
            {isOpen
              ? "The letter is open 💕"
              : "Click the envelope to open it"}
          </p>

          {/* Letter Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  bg-white/10
                  backdrop-blur-sm
                  border
                  border-white/30
                  rounded-3xl
                  p-8
                  text-left
                "
              >
                <p className="text-white text-lg leading-relaxed font"
                style={{
                    fontFamily: "Pixelify Sans",
                }}
                >
                  Happy birthday, love! 🎂❤️ <br />
                  I feel incredibly lucky to have you in my life. Sometimes I don't say it enough, but having you beside me is something I'm genuinely grateful for.
                  You've become such a meaningful part of my life, and I wouldn't want it any other way. <br /> <br />
                  I love your kindness, your little habits, your way of thinking, and even the small things you probably don't realize I notice. 
                  There's just something about you that makes being with you feel easy and right. <br /> <br />
                  Thank you for being exactly who you are, and for being my favorite person to come home to, talk to, laugh with, and share life with. 
                  I'm grateful for every little moment we have, and I hope you always know how much you mean to me. <br /> <br />
                  I hope this year brings you good things, peaceful days, and plenty of reasons to be happy. 
                  I'll always be here to celebrate your wins, support you through the hard days, and make more beautiful memories with you. Happy birthday, sweetheart. 
                </p>
                    
                <p
                  className="
                    text-white
                    text-xl
                    mt-8
                  "
                  style={{
                    fontFamily: "Pixelify Sans",
                  }}
                >
                  With lots of love, <br /> 
                  Hafizh
                </p>

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="text-4xl mt-5 text-center"
                >
                  💖
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </GlassCard>
      </motion.div>
    </section>
  );
}