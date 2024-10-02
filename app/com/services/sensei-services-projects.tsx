"use client";
import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./sensei-services-projects.module.css";

const ServiceItem = ({ icon, title, description, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={styles['single-service']}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
        >
            <div className={styles['part-1']}>
                <motion.i
                    className={icon}
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                ></motion.i>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <div className={styles['part-2']}>
                <p className={styles.description}>{description}</p>
            </div>
        </motion.div>
    );
};

function SenseiServicesProjects() {
    const services = [
        { icon: "fa-solid fa-code", title: "Web Development", description: "We provide high-quality web development services to bring your digital vision to life." },
        { icon: "fa-solid fa-palette", title: "Graphic Design", description: "We create attractive designs that reflect your brand identity." },
        { icon: "fa-solid fa-magnifying-glass-chart", title: "SEO Services", description: "We improve your website's visibility in search engines to increase reach." },
        { icon: "fa-solid fa-pen-fancy", title: "Content Writing", description: "We produce high-quality content that attracts audience and improves your site's ranking." },
        { icon: "fa-solid fa-bullhorn", title: "Digital Marketing", description: "We develop effective marketing strategies to grow your business online." },
        { icon: "fa-solid fa-mobile-screen", title: "App Development", description: "We design and develop innovative applications for iOS and Android devices." },
    ];

    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className={styles['section-services']} id="Service">
            <div className={styles.container}>
                <motion.div
                    ref={headerRef}
                    className={styles['header-section']}
                    initial={{ opacity: 0, y: -50 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className={styles.title}>
                        <span>
                            Services
                        </span>
                    </h2>
                </motion.div>
                <div className={styles['grid-container']}>
                    {services.map((service, index) => (
                        <ServiceItem key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SenseiServicesProjects;