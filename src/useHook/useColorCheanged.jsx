import { useContext } from "react";
import { ColorContext } from "../useContext/ColorContext";
const useColorCheanged=()=>{
    return useContext(ColorContext)
}
export default useColorCheanged