"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React, { useState, useEffect, Dispatch, SetStateAction, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./sensei-art.module.css";
import Image from "next/image";

type ImageItemProps = {
    image: {
        src: string;
        thumb: string;
    };
    index: number;
    setOpen: Dispatch<SetStateAction<number>>;
};

const ImageItem: React.FC<ImageItemProps> = ({ image, index, setOpen }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                delay: index * 0.05,
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
                onClick={() => setOpen(index)}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={image.thumb}
            />
        </motion.div>
    );
};

function SenseiArt() {
    const [index, setIndex] = useState(-1);
    const open = index >= 0;

    const images = useMemo(() => [
        {
            src: "Assets/art-gallery/Images/image_display/Free Palestine.png",
            thumb: "Assets/art-gallery/Images/image_web/Free Palestine.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/MHlogo.png",
            thumb: "Assets/art-gallery/Images/image_web/MHlogo.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/Sarada_art.jpg",
            thumb: "Assets/art-gallery/Images/image_web/Sarada_art.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/Hema-chan.png",
            thumb: "Assets/art-gallery/Images/image_web/Hema-chan.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/Kawaki_2Bv.png",
            thumb: "Assets/art-gallery/Images/image_web/Kawaki_2Bv.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/MH45.png",
            thumb: "Assets/art-gallery/Images/image_web/MH45.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/MH444.png",
            thumb: "Assets/art-gallery/Images/image_web/MH444.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/red_g.jpg",
            thumb: "Assets/art-gallery/Images/image_web/red_g.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/mh44.jpg",
            thumb: "Assets/art-gallery/Images/image_display/mh44.jpg"
        },
        {
            src: "Assets/art-gallery/Images/image_display/Moon_sord.jpg",
            thumb: "Assets/art-gallery/Images/image_web/Moon_sord.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/Mostafa.jpg",
            thumb: "Assets/art-gallery/Images/image_web/Mostafa.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/gojo_sensei.jpg",
            thumb: "Assets/art-gallery/Images/image_web/gojo_sensei.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/kawaki.jpg",
            thumb: "Assets/art-gallery/Images/image_web/kawaki.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/Moon_wt.jpg",
            thumb: "Assets/art-gallery/Images/image_web/Moon_wt.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/maki.jpg",
            thumb: "Assets/art-gallery/Images/image_web/maki.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/rev_brt.jpg",
            thumb: "Assets/art-gallery/Images/image_web/rev_brt.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/Demon_Slayer.jpg",
            thumb: "Assets/art-gallery/Images/image_web/Demon_Slayer.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/Pizza_G.jpg",
            thumb: "Assets/art-gallery/Images/image_display/Pizza_G.jpg"
        },
        {
            src: "Assets/art-gallery/Images/image_display/logo_hg.jpg",
            thumb: "Assets/art-gallery/Images/image_web/logo_hg.webp"
        },
        {
            src: "Assets/art-gallery/Images/image_display/sakura.jpg",
            thumb: "Assets/art-gallery/Images/image_web/sakura.webp"
        },


        //
        //
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Free Palestine.png",
        //     thumb: "/Assets/art-gallery/Images/image_web/Free Palestine.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/MHlogo.png",
        //     thumb: "/Assets/art-gallery/Images/image_web/MHlogo.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Sarada_art.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/Sarada_art.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Hema-chan.png",
        //     thumb: "/Assets/art-gallery/Images/image_web/Hema-chan.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Kawaki_2Bv.png",
        //     thumb: "/Assets/art-gallery/Images/image_web/Kawaki_2Bv.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/MH45.png",
        //     thumb: "/Assets/art-gallery/Images/image_web/MH45.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/MH444.png",
        //     thumb: "/Assets/art-gallery/Images/image_web/MH444.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/red_g.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/red_g.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/mh44.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_display/mh44.jpg"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Moon_sord.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/Moon_sord.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Mostafa.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/Mostafa.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/gojo_sensei.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/gojo_sensei.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/kawaki.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/kawaki.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Moon_wt.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/Moon_wt.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/maki.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/maki.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/rev_brt.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/rev_brt.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Demon_Slayer.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/Demon_Slayer.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/Pizza_G.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_display/Pizza_G.jpg"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/logo_hg.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/logo_hg.webp"
        // },
        // {
        //     src: "/Assets/art-gallery/Images/image_display/sakura.jpg",
        //     thumb: "/Assets/art-gallery/Images/image_web/sakura.webp"
        // },

    ], []);

    const slides = useMemo(() => images.map(image => ({ src: image.src })), [images]);

    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowRight':
                setIndex((i) => (i + 1) % slides.length);
                break;
            case 'ArrowLeft':
                setIndex((i) => (i - 1 + slides.length) % slides.length);
                break;
        }
    }, [slides.length]);

    useEffect(() => {
        if (open) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, handleKeyDown]); // Include handleKeyDown in dependencies

    return (
        <section className={styles["art-gallery-section"]} id="Gallery">
            <div className={styles.container}>
                <motion.div
                    ref={headerRef}
                    className={styles["header-section"]}
                    initial={{ opacity: 0, y: -50 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className={styles.title}>
                        <span lang="ja">画廊 •</span>
                        <span lang="en"> Art Gallery</span>
                    </h2>
                </motion.div>
                <div className={styles["art-gallery-content"]}>
                    <div className={styles.Gallery}>
                        {images.map((image, i) => (
                            <ImageItem
                                key={i}
                                image={image}
                                index={i}
                                setOpen={setIndex}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Lightbox
                slides={slides}
                open={open}
                index={index}
                close={() => setIndex(-1)}
            />
        </section>
    );
}

export default SenseiArt;
