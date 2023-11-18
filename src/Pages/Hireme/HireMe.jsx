import React, { useRef }  from "react";

import emailjs from '@emailjs/browser';
import keys from '../../key'

import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Hireme.module.css";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import cv from "../../assets/Md Ismail Hosen.pdf";

import { HiOutlineMail } from "react-icons/hi";
import {
  BsTelephone,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";


// const bgcolor=colorChenged?"#000":"#fff"
// const textcolor=colorChenged?"#fff":"#000"
// const secondarytextcolor=colorChenged?"#26A8FE":"#26A8FE"


export default function HireMe() {
  const form =useRef()
  const navigate=useNavigate()
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      number:"",
      catagory: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string().min(2).required("Name is required"),
      email: yup.string().email(),
      number:yup.string().required("Number is required"),
      catagory: yup.string(),
      message: yup.string().min(3).required("Message is required"),
    }),
    onSubmit: () => {
      if(values.catagory==="Choose..." || values.catagory===""){

        toast.error('Service is Required', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else{
        emailjs.sendForm(keys.serviceKey, keys.hiremetemplatekey, form.current, keys.publiceKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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
          setTimeout(()=>navigate("/"),3000)
      }
    },
  });
  return (
    <div className={styles.sec_5} id="contect">
      <div className={`${styles.inner} ${styles.in_sec5}`}>
        <div className={styles.left}>
          <h1>Countacts</h1>
          <div className={styles.icon}>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              target="_blank"
            >
              <HiOutlineMail /> ismailhosen1006@gmil.com
            </a>
            <a href="https://www.whatsapp.com/">
              <BsTelephone /> 01842279277
            </a>
          </div>
          <div className={styles.social_media_icon}>
          <a
              href="https://github.com/IsmailHosen25"
              target="_blank"
            >
              <BsGithub />
            </a>
            <a href="https://bd.linkedin.com/" target="_blank">
              <BsLinkedin />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100075446262873"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <BsInstagram />
            </a>
          </div>
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
            className={styles.download_cvhire}
            style={{ color: "#fff" }}
          >
            {`.( `}download CV{` )`} <AiOutlineDownload />
          </motion.a>
        </div>
        <div className={styles.right}>
          <form ref={form} onSubmit={handleSubmit}>
            <h2>Hire.Me</h2>
            <div className={styles.input_box}>
              <input
                type="text"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span>Full Name</span>
              <p style={{fontSize:"1.5rem",color:"red"}}>{touched.name && errors.name ? errors.name:""}</p>
        
            </div>
            <div className={styles.input_box}>
              <input
                type="email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span>Email</span>
              <p style={{fontSize:"1.5rem",color:"red"}}>{touched.email && errors.email ? errors.email:""}</p>
            </div>
            <div className={styles.input_box}>
              <input
                type="number"
                name="number"
                value={values.number}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span>Number</span>
              <p style={{fontSize:"1.5rem",color:"red"}}>{touched.number && errors.number ? errors.numberl:""}</p>
            </div>
            <span className={styles.opservices}>Service</span>
            <div>
              <p style={{ color: "red" }}>
                {touched.catagory & errors.catagory ? errors.catagory : ""}
              </p>
              <select
                name="catagory"
                value={values.catagory}
                onBlur={handleBlur}
                onChange={(e) => setFieldValue("catagory", e.target.value)}
                className={styles.select}
              >
                <option>Choose...</option>
                <option>Front-End</option>
                <option>Back-End</option>
                <option>Data Analysing</option>
                <option>Canva</option>
                <option>Microsoft Office</option>
                <option>Full-Stack</option>
              </select>
            </div>
            <div className={styles.input_box}>
              <textarea
                name="message"
                value={values.message}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span>Type Your message...</span>
              <p style={{fontSize:"1.5rem",color:"red"}}>{touched.message && errors.message ? errors.message:""}</p>
            </div>
            <div className={`${styles.input_box} ${styles.submit_btn_box}`}>
              <input type="submit" name="" value="Send" />
            </div>
          </form>
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
    </div>
  );
}
