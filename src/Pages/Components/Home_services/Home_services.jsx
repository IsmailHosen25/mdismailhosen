import { motion, useMotionValue, useTransform,useInView } from "framer-motion";
import styles from "./Home_services.module.css";
import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import InHeading from "../In_heading/InHeading";
import { seritem } from "./Servicesitem";
import { CardDetails } from "./CardDetails";
import {FaCodeBranch} from "react-icons/fa"



const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const HeadingText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  z-index: 10;
  font-size: 5rem;
  text-align: center;
  font-weight: 900;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgItem = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  margin-top: -1rem;
  display: flex;
  justify-content: center;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

export default function Home_services(props) {
  const navigate=useNavigate()
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const rotateinview=useRef(null)
  const rinview=useInView(rotateinview)

  return (
    <>
      <div className={styles.heading}>
        <div className={styles.main_heading}>
          <InHeading heading={"Services"} subheading={"_What I"} subcolor={"Offer"}/>
        </div>
        <motion.p
        initial={{x:-50,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{type:"tween",duration:1}}
         className={styles.para}>
          Here are some services that I always try my best to provide you well
        </motion.p>
      </div>
      <motion.div 
       className={styles.cardWrapper}
       ref={rotateinview}
       >
        {seritem.map((item, index) => (
          <motion.div key={index}
          style={{rotate:rinview?0:120,
            opacity:rinview?1:0.3,
            scale:rinview?1:0.3,
            transition:"all 0.3s linear"}}
          >
          <motion.div className={styles.CardContainer}
            key={index}
            style={{ 
               x,
               y,
               rotateX,
               rotateY,
               z: 100,
              }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}

          
          >
            <TopContainer>
              <CircleWrapper>
                <div
                  className={styles.circle}
                  style={{ backgroundColor: `${item.circle}` }}
                ></div>
              </CircleWrapper>
              <ImgWrapper>
                <ImgItem
                  style={{ x, y, rotateX, rotateY, z: 1000 }}
                  drag
                  dragElastic={0.12}
                  whileTap={{ cursor: "grabbing" }}
                >
                  <img src={item.img} />
                </ImgItem>
              </ImgWrapper>
              <HeadingText>{item.title}</HeadingText>
            </TopContainer>
            <BottomContainer>
              <CardDetails icon={item.bottomimg} item_title={item.title} btncolor={item.btncolor} />
            </BottomContainer>
          </motion.div>
        </motion.div>
        ))}
      </motion.div>
      <motion.button 
                whileHover={{ scale: 1.1,color:"#26A8FE", border:"1px solid #fff",backgroundColor:"transparent"}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileTap={{scale:1.05}}
                className={styles.see_more_btn} style={{color:"#fff"}}
                onClick={()=>navigate("/services")}
                >{`.( `}See More <FaCodeBranch/>{` )`}
      </motion.button>
    </>
  );
}
