import { useEffect } from 'react'
import styles from './About.module.css'
import PageHeader from '../Components/PageHeade/PageHeader'
import MySelf from '../Components/MySelf/MySelf'
import Footer from '../Components/Footer'
import ContactFinfo from '../Components/ContactForm/ContactFinfo'
import InHeading from '../Components/In_heading/InHeading'
import Education from '../Components/Education/Education'
import ImageGallery from '../Components/ImageGallery/ImageGallery'

export default function About() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
    <div 
    className={styles.about_m}>
      <PageHeader title={".about(me)"} content={"I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning i am dedicated to delivering high quality results. With a positive attitude and growth mindset. I am ready to make a meaningful contribution and achieve great things"}/>
     <div className={styles.in}>
        <MySelf/>
     </div>
     <Education/>
     <ImageGallery/>
     <div className={styles.contactform}>
           <InHeading heading={"Contact Me"}/>
           <ContactFinfo/>
      </div>
     <Footer/>
    </div>
  )
}
