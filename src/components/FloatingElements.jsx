import { motion } from "framer-motion";

export default function FloatingElements() {
  const items = [
    {
      emoji: "🌸",
      className: "top-20 left-10 text-4xl",
    },
    {
      emoji: "🌸",
      className: "bottom-32 right-10 text-3xl",
    },
    {
      emoji: "💖",
      className: "top-40 right-16 text-4xl",
    },
    {
      emoji: "💖",
      className: "bottom-20 left-16 text-3xl",
    },
  ];

  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.className}`}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </>
  );
}