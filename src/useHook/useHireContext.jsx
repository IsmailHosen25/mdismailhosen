import { useContext } from "react";
import { HireContext } from "../useContext/HireContext";
const useHireContext=()=>{
    return useContext(HireContext)
}
export default useHireContext