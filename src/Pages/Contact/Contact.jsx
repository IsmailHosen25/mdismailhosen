import styles from './Contact.module.css'
import ContactFinfo from "../Components/ContactForm/ContactFinfo"
import Footer from '../Components/Footer'
import PageHeader from '../Components/PageHeade/PageHeader'
import InHeading from '../Components/In_heading/InHeading'
import Team from "../Components/Team/Team"
export default function Contact() {
  return (
    <div className={styles.contact_m}>
      <PageHeader title={".contact(me)"} content={"Now that you know me, I want to get to Know you too. Every great work starts with a good conversation."}/>
      <div className={styles.contactform}>
           <InHeading heading={"Contect Us"}/>
           <Team/>
      </div>
      <div className={styles.contactform}>
           <InHeading heading={"Contact Me"}/>
           <ContactFinfo/>
      </div>
     <Footer/>
    </div>
  )
}
