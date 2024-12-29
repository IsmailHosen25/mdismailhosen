import styles from "./MySelf.module.css";
import { motion, useInView } from "framer-motion";
import hasanimg from "../../../assets/Hasan.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { AiOutlineDownload } from "react-icons/ai";
import reactjs from "../../../assets/react-javascript.png";
import Nodejs from "../../../assets/node-js.png";
import python from "../../../assets/python.png";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import js from "../../../assets/js.png";

export default function MySelf() {
  const navigate=useNavigate()
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemmove = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const skillsec = useRef(null);
  const prgbarview = useInView(skillsec);
  const info = [
    {
      field: "Age: ",
      data: "21",
    },
    {
      field: "Address: ",
      data: "Jagannathpur,Vatara,Dhaka 1229",
    },
    {
      field: "Email: ",
      data: "ismailhosen1006@gmail.com",
    },
    {
      field: "Mobile: ",
      data: "01789828149",
    },
  ];
  const skill = [
    {
      sub: "Python",
      value: 85,
      img: python,
    },
    {
      sub: "Javascript",
      value: 92,
      img: js,
    },
    {
      sub: "Node js",
      value: 94,
      img: Nodejs,
    },
    {
      sub: "React",
      value: 93,
      img: reactjs,
    },
    ,
    {
      sub: "Css",
      value: 80,
      img: css,
    },
    {
      sub: "Html",
      value: 96,
      img: html,
    },
  ];

  return (
    <motion.div className={styles.myself_container}>
      <div className={styles.myself_contents}>
        <div className={styles.cont_in}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1 }}
            className={styles.imageSection}
          >
            <img className={styles.img} src={hasanimg} />
          </motion.div>

          <motion.div
            className={styles.infoSection}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1 }}
          >
            <h1>MD. Ismail Hosen</h1>
            <h2>Web Designer and Developer</h2>
            <p>
               Absolutely! Renowned for my unwavering commitment to honesty and integrity, I've honed my skills as a diligent and hardworking professional over 1.5 years in Web Development. I pride myself on approaching tasks with dedication, ensuring not only efficiency but also a high standard of quality. Beyond the professional realm, I carry these principles into every aspect of my life, fostering a reputation as someone reliable, thorough, and ready to tackle challenges head-on.{" "}
            </p>
            <p>
            I want to stay in my learning zone and keep myself updated with the latest developments in this field.
            </p>
            <div className={styles.personalInfo}>
              <div className={styles.per_info_div}>
                {info.map((item, index) => (
                  <div key={index} className={styles.per_info_box}>
                    <p className={styles.per_info_field}>
                      {item.field} {` `} {item.data}
                    </p>
                  </div>
                ))}
              </div>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  color: "#26A8FE",
                  backgroundColor: "transparent",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileTap={{ scale: 1.05 }}
              >
                <a href={""} className={styles.download_cv} onClick={()=>navigate("/cv")}>
                  {`.( `}download CV {` )`} <AiOutlineDownload />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
