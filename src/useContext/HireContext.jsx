import React,{ useState,createContext } from "react";
export const HireContext=createContext({})

const HiremeProvider=({children})=>{
    const [hireme,sethireme]=useState(false)


    return  <HireContext.Provider value={{hireme,sethireme}}>{children}</HireContext.Provider>

}
export default HiremeProvider