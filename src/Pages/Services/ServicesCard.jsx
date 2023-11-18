import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import useHireContext from "../../useHook/useHireContext"
const Button = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #26A8FE;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    opacity:0;
    cursor: pointer;
    transition: all 0.8s linear;
    &:hover{
        background-color:transparent;
        border:1px solid #26A8FE;
        transition:all 0.3s linear;
    }
`
const Image = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 180px;
    background-color: transparent;
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    transition:all 0.3s linear;
`

const Card = styled.div`
    max-width: 33.3rem;
    min-height:45rem;
    background-color: transparent;
    cursor: pointer;
    border:1px solid #26A8FE;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        opacity:1;
        transition:all 0.3s linear;
    }
    &:hover ${Image}{
       rotate:5deg;
    }
`



const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 2.3rem;
    font-weight: 600;
    color: #26A8FE;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`


const Description = styled.div`
    font-weight: 400;
    font-size:2rem;
    color: #fff;
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: transparent;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid #26A8FE;
    cursor: pointer;
`

const ServicesCard = ({ServicesData}) => {
    const navigate=useNavigate()
    const {hireme,sethireme}=useHireContext()
    return (
        <Card>
            <Image src={ServicesData.image}/>
            <Details>
                <Title>{ServicesData.title}</Title>
                <Description>{ServicesData.description}</Description>
            </Details>
            <Members>
                {ServicesData.member?.map((member,index) => (
                    <Avatar key={index} onClick={()=>window.open(`${member.link}`)} src={member.img}/>
                ))}
            </Members>
            <Button onClick={()=>{
              const  h=ServicesData.title
              const url =h.split(" ").join("_")
              sethireme(true)
              navigate(`/hireme?service=${url}`)
            }}>Hire Me</Button>
        </Card>
    )
}

export default ServicesCard