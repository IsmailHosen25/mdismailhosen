import React, { useEffect, useState } from "react";
import "../App.css"
import { motion, useScroll, AnimatePresence } from "framer-motion";
export default function Mouse() {
    const [mouseposition, setmouseposition] = useState({
        x: "",
        y: "",
      })
  const variants = {
    default: {
      x: mouseposition.x + 20,
      y: mouseposition.y - 80,
    //   rotate: 0,
    },
    animate: {
      x: mouseposition.x + 20,
      y: mouseposition.y - 80,
      display: "inline",
    //   rotate: mouseposition.y+mouseposition.x,
    },
  };
  useEffect(() => {
    const mousemove = (e) => {
      setmouseposition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  return (
    <AnimatePresence>
    <motion.div
      variants={variants}
      initial="default"
      animate="animate"
      end="exit"
      className="cursor"
      style={{rotate:`${mouseposition.y+mouseposition.x}deg`}}
    />
    </AnimatePresence>

  );
}
