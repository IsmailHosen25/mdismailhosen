import styles from "./Myselftwo.module.css";
import { useRef } from "react";
import { motion,useInView,useScroll,useTransform } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import { MdDateRange, MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import InHeading from "../In_heading/InHeading";
import cv from "../../../assets/Md Ismail Hosen.pdf";
import { duration } from "@mui/material";

export default function Myselftwo() {
    const skillsec =useRef(null)
    const divemotion=useRef(null)
    const prgbarview=useInView(skillsec)
    const skill =[{
        sub:"Hard Work",
        value:96
   },{
       sub:"Web Designing",
       value:90
  },{
   sub:"Creativity",
   value:85
},{
   sub:"Back-End Development",
   value:88
},
]

  return (
    <motion.div
      className={`about-area ${styles.section} ${styles.main_color}`}
      data-scroll-index="1"
      id="about"
    >
      <motion.div  className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className={styles.section_title}>
              <InHeading heading={"About Me"} subheading={"_Personal"} subcolor={"Details"} />
            </div>
          </div>
        </div>
        <motion.div 
          initial={{x:-80,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{type:"tween",duration:1}}
         className="row">
          <div className="col-lg-6">
            <motion.div
             className={styles.about_content}>
              <h5 className={styles.about_title}>
                I'm <span>MD. Ismail Hosen</span> and{" "}
                <span>web developer </span>
              </h5>
              <p className={styles.details}>
                 I'm a skilled Web developer with exprience in JavaScript and expertise in frameworks like React.js, Node.js. I'm a quick learner and  collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's Wark together to bring your ideas to life!
              </p>
              <ul>
                <li>
                  <div className={`${styles.single_info}`}>
                    <div className={`${styles.info_icon} `}>
                      <MdDateRange className={styles.info_i} />
                    </div>
                    <div className={styles.info_text}>
                      <p>
                        <span>Date of birth:</span> 10 june 2002
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={`${styles.single_info}`}>
                    <div className={`${styles.info_icon}`}>
                      <MdEmail className={styles.info_i} />
                    </div>
                    <div className={styles.info_text}>
                      <p>
                        <span>Email: </span> ismailhosen1006@gmail.com
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={`${styles.single_info} `}>
                    <div className={`${styles.info_icon}`}>
                      <BsPhone className={styles.info_i} />
                    </div>
                    <div className={`${styles.info_text}`}>
                      <p>
                        <span>Phone</span> 01789828149
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={`${styles.single_info}`}>
                    <div className={`${styles.info_icon}`}>
                      <MdOutlineLocationOn className={styles.info_i} />
                    </div>
                    <div className={`${styles.info_text}`}>
                      <p>
                        <span>Location:</span> Jagannathpur,Vatara,Dhaka 1229
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  color: "red",
                  backgroundColor: "transparent",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileTap={{ scale: 1.05 }}
              >
                <a href={cv} className={styles.download_cv} download>
                  {`.( `}download CV {` )`} <AiOutlineDownload />
                </a>
              </motion.div>
            </motion.div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <motion.div
            className={styles.skillSection} ref={skillsec}>
              {skill.map((item, index) => (
                <motion.div
                initial={{x:80,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{type:"tween",duration:1}}
                key={index} className={styles.skill}>
                  <div className={styles.subject}>
                    {`{_`}
                    {item.sub}
                    {`...`}
                  </div>
                  {prgbarview ? (
                    <ProgressBar
                      completed={item.value}
                      animateOnRender={true}
                      bgColor="#26A8FE"
                      height="8px"
                    />
                  ) : (
                    ""
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
