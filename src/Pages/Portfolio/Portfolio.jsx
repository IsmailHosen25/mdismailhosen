import { useEffect } from 'react'
import styles from './Portfolio.module.css'
import PageHeader from '../Components/PageHeade/PageHeader'
import Footer from '../Components/Footer'
import ContactFinfo from '../Components/ContactForm/ContactFinfo'
import Project from "../Components/Project/Project"
import InHeading from '../Components/In_heading/InHeading'

import {BsPhone} from "react-icons/bs"
import {BiSolidShoppingBags,BiShoppingBag,BiSolidShoppingBagAlt} from "react-icons/bi";
import {ImRocket} from "react-icons/im"
import {IoShareSocialOutline} from "react-icons/io5"
import {HiOutlineBookOpen} from 'react-icons/hi'
import {FaHandHoldingWater,FaBusinessTime} from "react-icons/fa"
import {SiAntdesign} from "react-icons/si"
import {LuTrees,LuVegan} from "react-icons/lu"


import e_book from "../../assets/E_book.png"
import h_fhone from "../../assets/H_fhone.png"
import hexashop from "../../assets/Hexashop.png"
import rocket from "../../assets/rocket.png"
import socially from "../../assets/socially.png"
import WaterWhy from "../../assets/waterwhy.png"
import Arsha from "../../assets/arsha.png"
import Shopme from "../../assets/shopme.png"
import DesignArt from "../../assets/designart.png"
import Gmm from "../../assets/GMM.png"
import Nature from "../../assets/nature.png"
import Vegetable from "../../assets/vegetable.png"
import hasan from "../../assets/Hasan.jpg"

const portfotimeline=[{
  title:"Hexashop",
  date:"18-08-2023",
  img:hexashop,
  icon:<BiSolidShoppingBags/>,
  link:"https://github.com/IsmailHosen25/onlineshop",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],

},{
  title:"GMM",
  date:"16-01-2023",
  img:Gmm,
  icon:<BiShoppingBag/>,
  link:"https://github.com/IsmailHosen25/Gmm-website",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],
},{
  title:"H-Fhone",
  date:"15-11-2022",
  img:h_fhone,
  icon:<BsPhone/>,
  link:"https://github.com/IsmailHosen25/onepage-web-beginner-level/blob/main/p6/pac.html",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],
},{
  title:"Rocket",
  date:"30-07-2023",
  img:rocket,
  icon:<ImRocket/>,
  link:"https://github.com/IsmailHosen25/react/tree/main/fifthapp",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],
},{
  title:"E-Book",
  date:"08-12-2022",
  img:e_book,
  icon:<HiOutlineBookOpen/>,
  link:"https://github.com/IsmailHosen25/onepage-web-beginner-level/blob/main/p3/pac.html",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],

},{
  title:"Socially",
  date:"13-04-2022",
  img:socially,
  icon:<IoShareSocialOutline/>,
  link:"https://github.com/IsmailHosen25/practice-100vh-project/blob/main/p4/pac.html",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],
},{
  title:"WaterWhy",
  date:"19-06-2023",
  img:WaterWhy,
  icon:<FaHandHoldingWater/>,
  link:"https://github.com/IsmailHosen25/react/tree/main/forthapp",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],

},{
  title:"Arsha",
  date:"08-01-2022",
  img:Arsha,
  icon:<FaBusinessTime/>,
  link:"https://github.com/IsmailHosen25/practice-100vh-project/blob/main/p6/index.html",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],
},{
  title:"Shop.me",
  date:"22-03-2022",
  img:Shopme,
  icon:<BiSolidShoppingBagAlt/>,
  link:"https://github.com/IsmailHosen25/practice-100vh-project/blob/main/p5/pac.html",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],
},{
  title:"Design Art",
  date:"16-06-2022",
  img:DesignArt,
  icon:<SiAntdesign/>,
  link:"https://github.com/IsmailHosen25/practice-100vh-project/blob/main/p2/pac.html",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],
},{
  title:"Nature",
  date:"17-10-2022",
  img:Nature,
  icon:<LuTrees/>,
  link:"https://github.com/IsmailHosen25/onepage-web-beginner-level/blob/main/p2/pac.html",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],

},{
  title:"Vegetable",
  date:"02-01-2022",
  img:Vegetable,
  icon:<LuVegan/>,
  link:"https://github.com/IsmailHosen25/onepage-web-beginner-level/blob/main/p8/index.html",
  member: [
    {
      link: "https://www.linkedin.com/in/md-ismail-hosen-81b176276/",
      img: hasan,
    }
  ],
}]


export default function Portfolio() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
    <div className={styles.Portfolio_m}>
        <PageHeader title={".portfolio( )"} content={"I enjoy working with dedicated creatives from businesses that make the world beautiful"}/>
        <div className={styles.in}>
          <Project exptimeline={portfotimeline}/>
        </div>
        <div className={styles.contactform}>
          <InHeading heading={"Contact Me"}/>
           <ContactFinfo/>
      </div>
        <Footer/>
    </div>
  )
}
