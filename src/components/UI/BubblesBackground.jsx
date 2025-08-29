"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function BubblesBackground({ children }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Faster + more lively spring
  const springX = useSpring(mouseX, { stiffness: 40, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX * 0.9);
      mouseY.set(e.clientY * 0.9);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Flowing solid bubble */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="w-[400px] h-[400px]"
          style={{
            borderRadius: "50%",
            background: `radial-gradient(
              circle at 30% 30%, 
              rgba(255, 255, 255, 0.7), 
              rgba(173, 216, 230, 0.4), 
              rgba(135, 206, 250, 0.3), 
              rgba(255, 182, 193, 0.2), 
              rgba(255, 255, 255, 0)
            )`,
            border: "2px solid rgba(255, 255, 255, 0.6)",
            boxShadow: `
              0 0 15px rgba(255, 255, 255, 0.8),
              inset 0 0 20px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(173, 216, 230, 0.5),
              inset 0 0 40px rgba(255, 182, 193, 0.4)
            `,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}

          animate={{
            borderRadius: [
              "50% 50% 50% 50% / 50% 50% 50% 50%",
              "60% 40% 50% 50% / 40% 60% 40% 60%",
              "55% 45% 35% 65% / 50% 50% 60% 40%",
              "50% 50% 50% 50% / 50% 50% 50% 50%",
            ],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Content stays on top */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
