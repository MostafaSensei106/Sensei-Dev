"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./sensei-art.module.css";
import { images } from "@/app/core/data";

import MotionInView from "@/app/core/components/MotionInView";

const ImageItem = ({ image, index, setOpen }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  return (
    <MotionInView
      className={styles.art_pic}
      custom={index}
      variants={variants}
    >
      <Image
        src={image.thumb}
        alt={`Art piece ${index + 1}`}
        width={1200}
        height={1200}
        onClick={() => setOpen(index)}
        layout="responsive"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={image.thumb}
      />
    </MotionInView>
  );
};

import SectionHeader from "@/app/core/components/SectionHeader";

function SenseiArt() {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;

  const slides = useMemo(
    () => images.map((image) => ({ src: image.src })),
    [images],
  );

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleKeyDown = useCallback(
    (event: { key: string }) => {
      if (event.key === "ArrowRight") {
        setIndex((i) => (i + 1) % slides.length);
      } else if (event.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + slides.length) % slides.length);
      }
    },
    [slides.length],
  );

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleKeyDown]);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className={styles["art-gallery-section"]} id="ArtGallery">
      <div className={styles.container}>
        <motion.div
          ref={headerRef}
          className={styles["header-section"]}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <SectionHeader japaneseText="画廊" englishText="Art Gallery" titleClassName={styles.title} />
        </motion.div>
        <motion.div
          className={styles["art-gallery-content"]}
          initial="hidden"
          animate="visible"
          variants={galleryVariants}
        >
          <div className={styles.Gallery}>
            {images.map((image, i) => (
              <ImageItem key={i} image={image} index={i} setOpen={setIndex} />
            ))}
          </div>
        </motion.div>
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
