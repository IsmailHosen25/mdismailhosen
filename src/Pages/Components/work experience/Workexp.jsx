import { useRef } from "react";
import styles from "./Workexp.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoCss3 } from "react-icons/bi";
import { MdOutlineEngineering } from "react-icons/md";
import InHeading from "../In_heading/InHeading";

const items = [
  {
    id: 1,
    title: "React.js Developer",
    icon: <FaReact />,
    class:styles.wrapper_right,
    seclass:styles.exp_main_card_right,
    hclass:styles.heading_Container_right,
    textclass:styles.textContainer_right,
    p: "WEB-D",
    desc: "I have worked in web-d almost 5 month as a front-end Tutor with Js, Html,Css.I Have improved myself a lot by teaching others,which still helps me in many of my jobs. That was a great journey for me.",
  },
  {
    id: 2,
    title: "Back-End Developer",
    icon: <FaNodeJs />,
    class:styles.wrapper_left,
    seclass:styles.exp_main_card_left,
    hclass:styles.heading_Container_left,
    textclass:styles.textContainer_left,
    p: "Hexashop",
    desc: "Hexashop is my personal project based on online shopping. This project journy was incredible for  learning a real time experience,I Have tried to build a logic based webiste, that was successfully Done.",
  },
  {
    id: 3,
    title: "Web Developer",
    icon: <BiLogoCss3 />,
    class:styles.wrapper_right,
    seclass:styles.exp_main_card_right,
    hclass:styles.heading_Container_right,
    textclass:styles.textContainer_right,
    p: "GMM",
    desc: "Gmm is a clothing brand. I am really glad to work with this brand as a front-end developer in the GMM was not easy for the first time,but after some time i realized that i am learing a lot of new things, which is still helping me to develope somthing quickly",
  },
  {
    id: 4,
    title: "Full Stack Engineer",
    icon: <MdOutlineEngineering />,
    class:styles.wrapper_left,
    seclass:styles.exp_main_card_left,
    hclass:styles.heading_Container_left,
    textclass:styles.textContainer_left,
    p: "Shop.me",
    desc: "Shop.me is my personal project based on online shopping. This project journy was great, I have improved somting new skills on this project. These skills are widely used in today's online shopping Website, which is further enhance my work.",
  }
];

const Workexp = () => {

  return (
    <div className={styles.work_m}>
      <div className={styles.progress}>
        <InHeading heading={"Experiences"} />
      </div>
      <div className={styles.esp_card}>
        <div  className={styles.exp_card_sticky}>
          {items.map((item, index) => (
            <motion.div  
              initial={{y:"80px",opacity:"0"}}
              whileInView={{y:'0',opacity:"1"}}
              transition={{
                type:"spring"
                ,damping:"4"
              }}
              key={index} className={item.class}>
              <div className={item.seclass}>
                <div className={item.hclass}>
                  <h1 className={styles.headingh1}>
                    {item.title} {item.icon}
                  </h1>
                  <p className={styles.headingp}>{item.p}</p>
                </div>
                <div className={item.textclass}>
                  <p className={styles.textcp }>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workexp;
