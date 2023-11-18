import styles from "./CCss/Footer.module.css";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BiLogoFacebook } from "react-icons/bi";
export default function Footer() {
    const iconvar = [{
        icon:<FiGithub />,
        link:"https://github.com/IsmailHosen25"
      },{
        icon:<FiLinkedin/>,
        link:"https://www.linkedin.com/in/md-ismail-hosen-81b176276/"
      },{
        icon:<BiLogoFacebook />,
        link:"https://www.facebook.com/profile.php?id=100075446262873"
      }];
  return (
    <motion.div
    initial={{x:-300,opacity:0}}
    whileInView={{x:0,opacity:0.8}}
    transition={{type:"tween",duration:1}}
    className={styles.footer}>
      <div className={styles.footer_in}>
        <motion.div
          whileHover={{ scale: 1.1,color:"#26A8FE",cursor:"pointer"}}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
         className={styles.name}>
          <h2>&#9829; Md. Ismail Hosen</h2>
        </motion.div>
        <div className={styles.icon}>
        {iconvar.map((item,index) => (
              <motion.div
              key={index}
                whileHover={{ scale: 1.1,color:"#fff"}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={styles.icon_var}
                onClick={()=> window.open(`${item.link}`)}
              >
                <span className={styles.icon_span}>{'.('}</span>
                
                {item.icon}
                <span className={styles.icon_span}>{")"}</span>


              </motion.div>
            ))}
        </div>
        <div className={styles.copyright}>
            <p>Copyright &#169; <Link className={styles.link} to={"https://www.linkedin.com/in/md-ismail-hosen-81b176276/"} target="_blanck"> Md. ismail Hosen</Link></p>
        </div>
      </div>
    </motion.div>
  );
}
