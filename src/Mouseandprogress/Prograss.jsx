import React from 'react'
import { motion, useScroll, AnimatePresence } from "framer-motion";

export default function Prograss() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
    className="progress-bar"
    style={{ scaleX: scrollYProgress }}
    initial={{
      y: "-8rem",
    }}
    animate={{
      y: "0rem",
    }}
    transition={{
      delay: 0.3,
      duration: 0.3,
      type: "spring",
      damping: 4,
    }}
  />
  )
}
