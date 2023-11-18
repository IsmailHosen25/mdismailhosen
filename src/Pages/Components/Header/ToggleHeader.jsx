import { useRef,useState } from "react"
import styles from "./ToggleHeader.module.css"
import { NavLink } from "react-router-dom"
import {motion,useInView} from "framer-motion"
import {FaFolderOpen} from "react-icons/fa"
export default function ToggleHeader({manuopen,setmanuopen}) {
  const ulref=useRef()
  const isInView = useInView(ulref)

  return (
    <>
      <div
 
      className={styles.nav_manuopen}>
        <div className={styles.nav_manuopen_header}>

          <div className={styles.name}>
            <NavLink to="/" onClick={()=>setmanuopen(!manuopen)}   className={styles.name_link}>// Md. Ismail Hosesn</NavLink>
          </div>
          <div className={styles.manu_icon} onClick={()=>{setmanuopen(!manuopen)}}>
            <FaFolderOpen />
          </div>

        </div>
        <ul
         ref={ulref}
         className={styles.ul }>
              <li
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}
              >
                <NavLink
                  to="/"
                  className={styles.nav_link}
                  onClick={()=>setmanuopen(!manuopen)}  
                >
                  .home()
                </NavLink>
              </li>
              <li
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}>
                <NavLink to="/about" 
                className={styles.nav_link}
                onClick={()=>setmanuopen(!manuopen)}  
                >
                  .about()
                </NavLink>
              </li>
              <li
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}>
                <NavLink to="/portfolio"
                  className={styles.nav_link}
                  onClick={()=>setmanuopen(!manuopen)}  
                >
                  .portfolio()
                </NavLink>
              </li>
              <li 
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}>
                <NavLink to="/services" 
                className={styles.nav_link}
                onClick={()=>setmanuopen(!manuopen)}  
                >
                  .services()
                </NavLink>
              </li>
              <li
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}
              >
                <NavLink to="/contact" 
                className={styles.nav_link}
                onClick={()=>setmanuopen(!manuopen)}  
                >
                  .contact()
                </NavLink>
              </li>
        </ul>
        </div>
    </>
  )
}
