"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./sensei-art.module.css";
import Image from "next/image";

const ImageItem = ({ image, index, setCurrentImage, setOpen }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={styles.art_pic}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
        >
            <Image
                src={image.thumb}
                alt={`Art piece ${index + 1}`}
                width={300}
                height={300}
                onClick={() => {
                    setCurrentImage(image.src);
                    setOpen(true);
                }}
            />
        </motion.div>
    );
};

function SenseiArt() {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const images = [
        {
            src: "/Assets/art-gallery/Images/image_display/Free Palestine.png",
            thumb: "/Assets/art-gallery/Images/image_web/Free Palestine.webp"
        },
        {
            src: "/Assets/art-gallery/Images/image_display/MHlogo.png",
            thumb: "/Assets/art-gallery/Images/image_web/MHlogo.webp"
        },
        // ... (rest of the images array)
    ];

    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className={styles["art-gallery-section"]} id="Gallery">
            <div className={styles.container}>
                <motion.div
                    ref={headerRef}
                    className={styles["header-section"]}
                    initial={{ opacity: 0, y: -50 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className={styles.title}>
                        <span lang="ja">画廊 •</span>
                        <span lang="en"> Art Gallery</span>
                    </h2>
                </motion.div>
                <div className={styles["art-gallery-content"]}>
                    <div className={styles.Gallery}>
                        {images.map((image, index) => (
                            <ImageItem
                                key={index}
                                image={image}
                                index={index}
                                setCurrentImage={setCurrentImage}
                                setOpen={setOpen}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {open && <Lightbox open={open} close={() => setOpen(false)} slides={[{ src: currentImage }]} />}
        </section>
    );
}

export default SenseiArt;