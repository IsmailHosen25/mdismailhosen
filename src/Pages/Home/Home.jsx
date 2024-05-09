import { useEffect } from "react";
import styles from "./Home.module.css";
import { useRef } from "react";
import {motion} from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import ContactFinfo from "../Components/ContactForm/ContactFinfo";
import Project from "../Components/Project/Project";
import Footer from "../Components/Footer";
import Workexp from "../Components/work experience/Workexp";
import Home_services from "../Components/Home_services/Home_services";
import InHeading from "../Components/In_heading/InHeading";
import Skills from "../Components/Skill/Skills";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BiLogoFacebook,BiShoppingBag} from "react-icons/bi";
import { TbDragDrop } from "react-icons/tb";
import {GiClick} from "react-icons/gi"
import {BsPhone} from "react-icons/bs"
import {HiOutlineBookOpen} from 'react-icons/hi'
import {ImRocket} from "react-icons/im"

import Gmm from "../../assets/GMM.png"
import e_book from "../../assets/E_book.png"
import h_fhone from "../../assets/H_fhone.png"
import hexashop from "../../assets/Hexashop.png"
import rocket from "../../assets/rocket.png"
import Myselftwo from "../Components/Myselftwo/Myselftwo";
import useColorCheanged from "../../useHook/useColorCheanged"
import hasan from "../../assets/Hasan.jpg"
export default function Home() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  const {colorChenged}=useColorCheanged()
  const ProjectItem=[
    {
        title:"Hexashop",
        date:"18-08-2023",
        img:hexashop,
        icon:<BiShoppingBag/>,
        link:"https://github.com/IsmailHosen25/onlineshop",
        member: [
          {
            link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
            img: hasan,
          }
        ],
      
      },{
        title:"Rocket",
        date:"30-07-2023",
        img:rocket,
        icon:<ImRocket/>,
        link:"https://github.com/IsmailHosen25/react/tree/main/fifthapp",
        member: [
          {
            link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
            img: hasan,
          }
        ],
      },{
        title:"GMM",
        date:"16-01-2023",
        img:Gmm,
        icon:<BiShoppingBag/>,
        link:"https://github.com/IsmailHosen25/Gmm-website",
        member: [
          {
            link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
            img: hasan,
          }
        ],
      },{
        title:"H-Fhone",
        date:"15-11-2022",
        img:h_fhone,
        icon:<BsPhone/>,
        link:"https://github.com/IsmailHosen25/onepage-web-beginner-level/blob/main/p6/pac.html",
        member: [
          {
            link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
            img: hasan,
          }
        ],
      },{
        title:"E-Book",
        date:"08-12-2022",
        img:e_book,
        icon:<HiOutlineBookOpen/>,
        link:"https://github.com/IsmailHosen25/onepage-web-beginner-level/blob/main/p3/pac.html",
        member: [
          {
            link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
            img: hasan,
          }
        ],
      
      }
]
  const dragref = useRef(null);

  const iconvar = [{
    icon:<FiGithub />,
    link:"https://github.com/IsmailHosen25"
  },{
    icon:<FiLinkedin/>,
    link:"https://www.linkedin.com/in/md-ismail-hosen-81b176276/"
  },{
    icon:<BiLogoFacebook />,
    link:"https://www.facebook.com/profile.php?id=100075446262873"
  }];

  const textcolor=colorChenged?"#fff":"#000"
  const secondarytextcolor=colorChenged?"#26A8FE":"#26A8FE"

  return (
    <motion.div ref={dragref} className={styles.home_m}>
      <motion.div
      
      initial={
        {
          opacity:0,
          y:"-20rem"
        }
      }
      animate={
        {
          opacity:1,
          y:"0rem"
        }
      }
      transition={
        {
          delay:0.3,
          duration:0.3,
          type:"spring",
          damping:4
        }
      }
      
      className={styles.home_header}>
        <div className={styles.welcome}>
          <h1 className={styles.name} style={{color:textcolor}}>//HI, I'AM <span style={{color:secondarytextcolor}}>MD. ISMAIL HOSEN</span></h1>

          <h1 className={styles.typing}>
            {'{" '}
            <span style={{ color: secondarytextcolor, fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "_full stack engineer",
                  "_MERN Stack Web Developer",
                  "_data analyst",
                  "_photographer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={1000}
              />
            </span>
            {' "}'}
          </h1>
          <div className={styles.icon}>
            {iconvar.map((item,index) => (
              <motion.div
                key={index}
                drag
                dragConstraints={dragref}
                whileHover={{ scale: 1.1,color:secondarytextcolor}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={styles.icon_var}
                style={{color:textcolor}}
                onDoubleClick={()=> window.open(`${item.link}`)}
              >
                <span  className={styles.icon_span}>{'.('}</span>
                
                {item.icon}
                <span  className={styles.icon_span}>{")"}</span>


              </motion.div>
            ))}
            {/*  */}
          </div>
          <div style={{color:secondarytextcolor}} className={styles.darg_icon}>
            <TbDragDrop /> Drag these icons<br/>
            <GiClick/> Double click to open link
          </div>
        </div>
      </motion.div>

     {/* <AnimationImg/> */}
     
      <Myselftwo/>





      <div className={styles.work_exp}>
        <Project exptimeline={ProjectItem}/>
      </div>



      <Workexp/>
      <Skills/>
      <Home_services/>


      <div className={styles.contactform}>
            <InHeading heading={"Contact Me"}/>
           <ContactFinfo/>
      </div>
       

      <Footer/>


    </motion.div>
  );
}
