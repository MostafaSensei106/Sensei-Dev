"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React, { useState } from "react";
import styles from "./sensei-art.module.css";

function SenseiArt() {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const images = [
        { src: "/Assets/art-gallery/Images/image_display/Free Palestine.png", thumb: "/Assets/art-gallery/Images/image_display/Free Palestine.png" },
        { src: "/Assets/art-gallery/Images/image_display/MHlogo.png", thumb: "/Assets/art-gallery/Images/image_display/MHlogo.png" },
        { src: "/Assets/art-gallery/Images/image_display/Sarada_art.jpg", thumb: "/Assets/art-gallery/Images/image_display/Sarada_art.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/Hema-chan.png", thumb: "/Assets/art-gallery/Images/image_display/Hema-chan.png" },
        { src: "/Assets/art-gallery/Images/image_display/Kawaki_2Bv.png", thumb: "/Assets/art-gallery/Images/image_display/Kawaki_2Bv.png" },
        { src: "/Assets/art-gallery/Images/image_display/MH45.png", thumb: "/Assets/art-gallery/Images/image_display/MH45.png" },
        { src: "/Assets/art-gallery/Images/image_display/MH444.png", thumb: "/Assets/art-gallery/Images/image_display/MH444.png" },
        { src: "/Assets/art-gallery/Images/image_display/red_g.jpg", thumb: "/Assets/art-gallery/Images/image_display/red_g.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/mh44.jpg", thumb: "/Assets/art-gallery/Images/image_display/mh44.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/Moon_sord.jpg", thumb: "/Assets/art-gallery/Images/image_display/Moon_sord.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/Mostafa.jpg", thumb: "/Assets/art-gallery/Images/image_display/Mostafa.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/gojo_sensei.jpg", thumb: "/Assets/art-gallery/Images/image_display/gojo_sensei.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/kawaki.jpg", thumb: "/Assets/art-gallery/Images/image_display/kawaki.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/Moon_wt.jpg", thumb: "/Assets/art-gallery/Images/image_display/Moon_wt.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/maki.jpg", thumb: "/Assets/art-gallery/Images/image_display/maki.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/rev_brt.jpg", thumb: "/Assets/art-gallery/Images/image_display/rev_brt.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/Demon_Slayer.jpg", thumb: "/Assets/art-gallery/Images/image_display/Demon_Slayer.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/Pizza_G.jpg", thumb: "/Assets/art-gallery/Images/image_display/Pizza_G.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/logo_hg.jpg", thumb: "/Assets/art-gallery/Images/image_display/logo_hg.jpg" },
        { src: "/Assets/art-gallery/Images/image_display/sakura.jpg", thumb: "/Assets/art-gallery/Images/image_display/sakura.jpg" },

    ];

    return (
        <section className={styles["art-gallery-section"]} id="Gallery">
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
