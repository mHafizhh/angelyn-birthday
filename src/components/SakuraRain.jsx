import { motion } from "framer-motion";
import sakura from "../assets/images/Sakura.png";

export default function SakuraRain() {
  const petals = Array.from({ length: 12 });

  return (
    <>
      {petals.map((_, index) => (
        <motion.img
          key={index}
          src={sakura}
          alt="sakura"
          className="absolute pointer-events-none"
          style={{
            width: `${20 + Math.random() * 20}px`,
            left: `${Math.random() * 100}%`,
            top: `-50px`,
          }}
          animate={{
            y: ["0vh", "120vh"],
            x: [0, -20, 20, -10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}