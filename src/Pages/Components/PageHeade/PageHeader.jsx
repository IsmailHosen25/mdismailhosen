import styles from "./PageHeader.module.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
export default function PageHeader({ title, content }) {
  return (
    <div className={styles.pageHeader}>
      <motion.div
        initial={{
          opacity:0,
          y: "-8rem",
        }}
        animate={{
          opacity:1,
          y: "0rem",
        }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          type: "spring",
          damping: 4,
        }}
        className={styles.header_in}
      >
        <h1 className={styles.typing}>
          {'{" '}
          <span style={{ color: "#26A8FE", fontWeight: "bold" }}>
            <Typewriter
              words={[title]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={150}
              delaySpeed={8000}
            />
          </span>
          {' "}'}
        </h1>
        <p className={styles.p}>
          {`<p> `}
          {content}
          {` </p>`}
        </p>
      </motion.div>
    </div>
  );
}
