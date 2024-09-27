"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React, { useState } from "react";
import styles from "./sensei-art.module.css";

function SenseiArt() {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const images = [
        { src: "Images/image_display/Free Palestine.png", thumb: "Images/image_display/image_web/Free Palestine.webp" },
        { src: "Images/image_display/MHlogo.png", thumb: "Images/image_display/image_web/MHlogo.webp" },
        // Add more image
    ];

    return (
        <section className={styles["art-gallery-section"]} id="Art Gallery">
            <div className={styles.container}>
                <div className={styles["header-section"]}>
                    <h2 className={styles.title}><span>Art Gallery</span></h2>
                </div>
                <div className={styles["art-gallery-content"]}>
                    <div className={styles.Gallery}>
                        {images.map((image, index) => (
                            <div className={styles.art_pic} key={index}>
                                <img
                                    alt="Art"
                                    loading="lazy"
                                    src={image.thumb}
                                    onClick={() => {
                                        setCurrentImage(image.src);
                                        setOpen(true);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {open && <Lightbox open={open} close={() => setOpen(false)} slides={[{ src: currentImage }]} />}
        </section>
    );
}

export default SenseiArt;
