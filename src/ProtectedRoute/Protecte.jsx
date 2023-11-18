import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useHireContext from "../useHook/useHireContext"
export default function Protecte({Components}) {
    const {hireme,sethireme}=useHireContext()
    const navigate=useNavigate()
    useEffect(()=>{
        if(hireme==false){
          navigate("/")
        }
    },[])
  return (
    <Components/>
  )
}
