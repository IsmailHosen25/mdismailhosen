import styles from './Team.module.css'
import { Tilt } from 'react-tilt'
import {BsLinkedin,BsGithub,BsFacebook} from "react-icons/bs"

import {teams} from "./TeamData"
export default function Team() {
  return (
    <div className={styles.my_team}>
    <div className={styles.service_team_waraper}>
     {teams.map((item,index)=>
           <Tilt key={index}  className={styles.team_card}>
             <img className={styles.team_img} src={item.img} />
             <div className={styles.team_disc}>
               <h2>{item.name}</h2>
               <p>{item.description}</p>
               <div className={styles.team_s_icons}>
                 <BsLinkedin className={styles.in_icon} onClick={()=> window.open(item.linkedin)}/>
                 <BsGithub className={styles.in_icon} onClick={()=> window.open(item.github)}/>
                 <BsFacebook className={styles.in_icon} onClick={()=> window.open(item.facbook)}/>
               </div>
             </div>
             <button className={styles.team_btn} onClick={()=> window.open(item.linkedin)}>
               message me
             </button>
           </Tilt>
     )}

    </div>
   </div>
  )
}
