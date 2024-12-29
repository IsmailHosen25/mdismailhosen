import styles from "./Header.module.css";
import ToggleHeader from "./ToggleHeader";
import { AnimatePresence, motion } from "framer-motion";
import { Link,NavLink } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import { useState } from "react";
import useColorCheanged from "../../../useHook/useColorCheanged"


export default function Header() {
  const {colorChenged}=useColorCheanged()
  const textcolor=colorChenged?"#fff":"#000"
  const secondarytextcolor=colorChenged?"#26A8FE":"#26A8FE"
  const [manuopen, setmanuopen] = useState(false);
  const manuvars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.39, 1],
      },
    },
  };
  return (
    <>
      <motion.div
        initial={
           {
            y:"-8rem"
           }
        }
        animate={{
          y:"0rem"
        }}
        transition={{
          delay:0.3,
          duration:0.3,
          type:"spring",
          damping:4
        }}
      className={styles.header}>
        {manuopen ? (
          ""
        ) : (
          <nav>
            <motion.div
            whileHover={{ scale: 1.1,color:textcolor}}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={styles.name}>
              <NavLink to="/cv" className={styles.name_link}>
                // Md. Ismail Hosesn
              </NavLink>
            </motion.div>

            <div className={styles.nav_manu}>
              <ul>
                <motion.li
                          whileHover={{ scale: 1.1,color:secondarytextcolor}}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <NavLink
                    to="/"
                    className={`${styles.nav_link} `}
                    >
                    .home()
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1,color:secondarytextcolor}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <NavLink
                    to="/about"
                    className={`${styles.nav_link}`}
                  >
                    .about()
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1,color:secondarytextcolor}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <NavLink
                    to="/portfolio"
                    className={`${styles.nav_link}`}
                  >
                    .portfolio()
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1,color:secondarytextcolor}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <NavLink
                    to="/services"
                    className={`${styles.nav_link} 
                    `}
           
                  >
                .services()
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1,color:secondarytextcolor}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <NavLink
                    to="/contact"
                    className={`${styles.nav_link}`}
                  >
                    .contact()
                  </NavLink>
                </motion.li>
              </ul>
            </div>
            <div
              className={styles.manu_icon}
              onClick={() => {
                setmanuopen(!manuopen);
              }}
            >
              <FaFolder />
            </div>
          </nav>
        )}
      </motion.div>
      <AnimatePresence>
        {manuopen ? (
          <motion.div
            variants={manuvars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.toggle}
          >
            <ToggleHeader manuopen={manuopen} setmanuopen={setmanuopen} />
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
}
