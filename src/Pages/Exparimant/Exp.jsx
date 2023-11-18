import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Exp.module.css";
import React, { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React.js Developer",
    icon: "",
    p: "WEB-D",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    icon: "",
    p: "Shop.me",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Back-End Developer",
    icon: "",
    p: "Hexashop",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Web Developer",
    icon: "",
    p: "GMM",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

export default function Exparimant() {
  const ref =useRef(null)
  const {scrollYProgress}=useScroll({
    target:ref
  })
  const x=useTransform(scrollYProgress,[0,1],["1%","-95%"])
  return (
    <div ref={ref} className={styles.esp_card}>
    <motion.div   style={{x}}  className={styles.exp_card_sticky}>
      {items.map((item, index) => (
        <motion.div   key={index} className={styles.wrapper}>
          <div className={styles.exp_main_card}>
            <div className={styles.heading_Container}>
              <h1>
                {item.title} {item.icon}
              </h1>
              <p>{item.p}</p>
            </div>
            <div className={styles.textContainer}>
              <p>{item.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
  );
}