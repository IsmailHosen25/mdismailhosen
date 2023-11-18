import React,{useRef} from 'react'
import styles from "./Skills.module.css"
import styled from 'styled-components'
import { skillsitem } from './Skilsitem'
import InHeading from "../In_heading/InHeading"
import { motion,useInView } from 'framer-motion'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
margin-top:3rem;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: #fff;
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #fff;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;


const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  border: 1px solid #26A8FE;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      }
    }
  };
  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const ref=useRef(null)
  const inview=useInView(ref)
  return (
    <Container ref={ref} id="skills">
      <Wrapper>
        <Title> <InHeading heading={"Skills"}/></Title>
        <motion.div
             initial={{x:-50,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{type:"tween",duration:1}}
             className={styles.desc}
        >These are the technologies I've worked with
        </motion.div>
         <motion.div
          variants={container}
          initial={"hidden"}
          animate={inview?"visible":""}

          className={styles.SkillsContainer}>
               {skillsitem.map((skill,index) => (
                <motion.div
                key={index}
                variants={item}
                className={styles.Skill}>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillList>
                    {skill.skills.map((item,index) => (
                      <SkillItem key={index}>
                        <SkillImage src={item.image}/>
                        {item.name}
                      </SkillItem>
                    ))}
                  </SkillList>
                </motion.div>
              ))}
          </motion.div>

      </Wrapper>
    </Container>
  )
}

export default Skills