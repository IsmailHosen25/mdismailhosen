import React from 'react'
import styles from "./Embedpdf.module.css"
import cv from "../../assets/Md Ismail Hosen.pdf"
export default function EmbedPdf() {
  return (
    <div>
        <embed className={styles.embedpdf} src={cv} frameBorder={"0"}/>
    </div>
  )
}
