import styles from "./ContactFinfo.module.css";

import { useRef } from "react";
import emailjs from '@emailjs/browser';
import keys from '../../../key'

import { motion } from "framer-motion";
import cv from "../../../assets/Md Ismail Hosen.pdf";
import { BsTelephoneFill, BsFillSendFill, BsLinkedin } from "react-icons/bs";
import {FiLinkedin} from "react-icons/fi"
import { AiOutlineDownload } from "react-icons/ai";
import { useFormik } from "formik";
import * as yup from "yup"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ContactFinfo() {
  const form=useRef()
  const {values,handleChange,handleBlur,errors,handleSubmit,touched}=useFormik({
     initialValues:{
        name:"",
        email:"",
        message:""
     },validationSchema:yup.object({
      name:yup.string().min(2).required("Name is required"),
      email:yup.string().email().required("Email is required"),
      message:yup.string().min(3).required("Message is required")
     })
     ,onSubmit:()=>{
      emailjs.sendForm(keys.serviceKey, keys.contecttemplatekey, form.current, keys.publiceKey)
      toast.success(`Thank You ${values.name}❤️`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(()=>window.location.reload(false),5500)
   
     }
  })

  return (
    <motion.div
      initial={{ x: -80, opacity: 0.1 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 1 }}
      className={styles.contactinfo_m}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left_side}>
            <div className={`${styles.address} ${styles.details}`}>
              <FiLinkedin />
              <div className={styles.topic}>Md. Ismail Hosen</div>
              <div className={styles.text_one}>https://www.linkedin.com/in/</div>
              <div className={styles.text_two}>md-ismail-hosen-81b176276/</div>
            </div>
            <div className={`${styles.phone} ${styles.details}`}>
              <BsTelephoneFill />
              <div className={styles.topic}>Phone</div>
              <div className={styles.text_one}>01789828149</div>
              <div className={styles.text_two}>01842279277</div>
            </div>
            <div className={`${styles.email} ${styles.details}`}>
              <BsFillSendFill />
              <div className={styles.topic}>Email</div>
              <div className={styles.text_one}>ismailhosen1006@gmail.com</div>
              <div className={styles.text_two}></div>
            </div>
          </div>
          <div className={styles.right_side}>
            <div className={styles.topic_text}>Send me a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              work, you can send me message from here. It's my pleasure to help
              you.
            </p>
            <form ref={form} onSubmit={handleSubmit}>
              <div className={styles.input_box}>
                <input type="text" name="name" placeholder="Enter your name" value={values.name} onBlur={handleBlur} onChange={handleChange} />
                <p style={{color:"red"}}>{touched.name && errors.name? errors.name:""}</p>
              </div>
              <div className={styles.input_box}>
                <input type="text" name="email" placeholder="Enter your email" value={values.email} onBlur={handleBlur} onChange={handleChange} />
                <p style={{color:"red"}}>{touched.email && errors.email? errors.email:""}</p>
              </div>
              <div className={`${styles.input_box} ${styles.message_box}`}>
                <textarea placeholder="Message" name="message" value={values.message} onBlur={handleBlur} onChange={handleChange} />
                <p style={{color:"red"}}>{touched.message && errors.message? errors.message:""}</p>
              </div>
              <div className={styles.button}>
                <input type="submit" className={styles.sub_btn} value="Send Now" />
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    color: "#26A8FE",
                    border: "1px solid #fff",
                    backgroundColor: "transparent",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  whileTap={{ scale: 1.05 }}
                  href={cv}
                  download
                  className={styles.download_cv}
                  style={{ color: "#fff" }}
                >
                  {`.( `}download CV{` )`} <AiOutlineDownload />
                </motion.a>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </motion.div>
  );
}
