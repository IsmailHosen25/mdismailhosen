import { useState } from "react";
import { createContext } from "react";
export const ColorContext=createContext({})
const ColorCheangedProvider=({children})=>{
    const [colorChenged,setcolorChenged]=useState(true)
     return <ColorContext.Provider value={{colorChenged,setcolorChenged}}>
        {children}
     </ColorContext.Provider>
}
export default ColorCheangedProvider