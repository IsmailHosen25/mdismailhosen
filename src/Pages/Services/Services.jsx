import { useEffect } from 'react'
import styles from './Services.module.css'
import PageHeader from '../Components/PageHeade/PageHeader'
import ContactFinfo from '../Components/ContactForm/ContactFinfo'
import Footer from '../Components/Footer'
import InHeading from '../Components/In_heading/InHeading'
import ServicesSection from './ServicesSection'
import Team from '../Components/Team/Team'

export default function Services() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
    <div className={styles.service_m}>
        <PageHeader title={".services( )"} content={"I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skiles and experience to help businesses avhieve their goals."}/>
        <ServicesSection/>
        <div className={styles.heading_ser}>
            <InHeading heading={"My Team"}/>
            <Team/>
      </div>

        <div className={styles.heading_ser}>
          <InHeading heading={"Contact Me"}/>
          <ContactFinfo/>
        </div>
        <Footer/>
    </div>
  )
}
