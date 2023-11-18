import styles from './ImageGallery.module.css'
import InHeading from '../In_heading/InHeading'
import imagesdata from './ImageData';
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-rotate.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';

export default function ImageGallery() {
  return (
    <div className={styles.ImageGallery}>
          <InHeading heading={"Gallery"} subheading={""} subcolor={""}/>
          <div className={styles.imagecontainer}>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail,lgZoom, lgAutoplay, lgFullscreen, lgRotate]}
            >

                {imagesdata.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img className={styles.imggalleryimg} alt={image.alt} src={image.src} />
                        </a>
                    )
                })}


            </LightGallery>
        </div>
    </div>
  )
}
