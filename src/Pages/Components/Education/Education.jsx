import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences} from './EducationItem';
import EducationCard from './EducationCard';
import {motion} from "framer-motion"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
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

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #fff;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;



const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <motion.div
                initial={{x:-50,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{type:"tween",duration:1}}
                >
                  <Title>Education</Title>
                </motion.div>
                <motion.div
                initial={{x:-50,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{type:"tween",duration:1}}
                >
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                </motion.div>
                <TimelineSection>
                    <Timeline>
                        {education.map((education,index) => (
                            <motion.div
                             key={index}
                            initial={{y:80,opacity:0}}
                            whileInView={{y:0,opacity:1}}
                            transition={{type:"tween",duration:1}}

                            >

                         
                            <TimelineItem 
                            key={index}>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    {index !== experiences.length  && <TimelineConnector style={{ background: '#26A8FE' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                            </motion.div>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education