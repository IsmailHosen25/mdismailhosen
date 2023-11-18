import styles from "./InHeading.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCodeBranch } from "react-icons/fa6";
// import {SiRobinhood} from "react-icons/si"
// import {BsPen} from "react-icons/bs"
export default function InHeading({ heading,subheading,subcolor }) {
  const tageye = useRef(null);
  const taginview = useInView(tageye);

  const funba = {
    initial: {
      x: "-400",
      opacity: 0,
    },
    compleate: {
      x: 0,
      opacity: 1,
    },
  };
  const closetag = {
    initial: {
      x: "400",
      opacity: 0,
    },
    compleate: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className={styles.center}>
    <motion.div ref={tageye}
     initial={{x:-50,opacity:0}}
     whileInView={{x:0,opacity:1}}
     transition={{type:"tween",duration:1}}
    className={styles.in_heading}>
      <h2>
        <span className={styles.personal}> {subheading} </span>{" "}
        <span style={{ color: "#26A8FE" }}>{subcolor}</span>
      </h2>
      <div className={styles.main_heading}>
        <motion.div
          initial={taginview ? "" : { scale: 0.9 }}
          animate={taginview ? { scale: 1 } : ""}
          transition={{
            delay: 0.5,
            scale: {
              type: "spring",
              damping: 5,
            },
          }}
        >
          {heading}
        </motion.div>

        <motion.div
          variants={closetag}
          initial={"initial"}
          animate={taginview ? "compleate" : ""}
          style={{ color: "#26A8FE" }}
        >
          {`.(`}
          {<FaCodeBranch className={styles.icon_inheading} />}
          {`)`}
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
}
