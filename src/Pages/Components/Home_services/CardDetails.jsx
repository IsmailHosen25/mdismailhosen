import React from "react";
import styled from "styled-components";
import styles from "./Home_services.module.css";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import {LiaPenAltSolid} from "react-icons/lia"
import useHireContext from "../../../useHook/useHireContext";
const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;
const Icon = styled.span`
  font-size: 18px;
  color: red;
  font-weight: 800;
  text-transform: uppercase;
`;
const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom:1rem;
`;

const CardLogo = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 5rem;
    height: 5rem;
  }
`;

export function CardDetails({icon,btncolor,item_title}) {
  const navigate =useNavigate()
  const {hireme,sethireme}=useHireContext()
  return (
    <DetailsContainer>
      <SmallText>It's</SmallText>
      <SpacedHorizontalContainer>
        <MediumText>Somthing I Love to do</MediumText>
        <Icon><LiaPenAltSolid/></Icon>
      </SpacedHorizontalContainer>
       <SpacedHorizontalContainer>
        <MediumText>Expart</MediumText>
        <motion.button
         whileHover={{backgroundColor:"transparent"}}
         className={styles.ser_btn}
         style={{background:`${btncolor}`, border:`3px solid ${btncolor}`}}
         
         onClick={()=>{
          sethireme(true)
          if(item_title==="Front End Devlopment"){
            navigate("/hireme?service=Front-End")
          }
          if(item_title==="Back End Devlopment"){
            navigate("/hireme?service=Back-End")
          }
          if(item_title==="Data Analysis"){
            navigate("/hireme?service=Data-Analysing")
          }
}}
         >Hire me</motion.button>
      </SpacedHorizontalContainer>
      <CardLogo>
        <img src={icon} />
      </CardLogo> 
    </DetailsContainer>
  );
}