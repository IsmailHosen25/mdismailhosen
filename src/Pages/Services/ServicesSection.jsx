import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ServicesSecStyles'
import Servicescard from './ServicesCard'
import  {ServicesData}  from './ServicesData'


const ServicesSection = () => {
  const [toggle, setToggle] = useState('web app');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Services</Title>
        <Desc>
         
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP's</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
         <Divider />
          {toggle === 'data analysing' ?
            <ToggleButton active value="data analysing" onClick={() => setToggle('data analysing')}>DATA ANALYSIHNg</ToggleButton>
            :
            <ToggleButton value="data analysing" onClick={() => setToggle('data analysing')}>DATA ANALYSIHNG</ToggleButton>
          }
          <Divider />
          {toggle === 'digital marketing' ?
            <ToggleButton active value="digital marketing" onClick={() => setToggle('digital marketing')}>DIGITAL MARKETINg</ToggleButton>
            :
            <ToggleButton value="digital marketing" onClick={() => setToggle('digital marketing')}>DIGITAL MARKETING</ToggleButton>
          }
        <Divider />
        {toggle === 'others' ?
            <ToggleButton active value="others" onClick={() => setToggle('others')}>OTHERs</ToggleButton>
            :
            <ToggleButton value="others" onClick={() => setToggle('others')}>OTHERS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {ServicesData
            .filter((item) => item.category == toggle)
            .map((ServicesData,index) => (
              <Servicescard key={index} ServicesData={ServicesData}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default ServicesSection