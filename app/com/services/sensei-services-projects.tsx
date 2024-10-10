"use client";
import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./sensei-services-projects.module.css";

/**
 * A function component that renders a single service item.
 *
 * @param {{ icon: string; title: string; description: string; index: number; }} props
 * The props object should have the following properties:
 * - `icon`: The class name of the font awesome icon to use.
 * - `title`: The title of the service.
 * - `description`: A brief description of the service.
 * - `index`: The index of the service in the list.
 *
 * @returns {JSX.Element} A JSX element representing a single service item.
 */
const ServiceItem: React.FC<{
    icon: string;
    title: string;
    description: string;
    index: number;
}> = ({ icon, title, description, index }: { icon: string; title: string; description: string; index: number; }): JSX.Element => {
    const [ref, inView] = useInView({
        triggerOnce: false,
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
        {icon: "fa-brands fa-flutter", title: "Mobile App Development", description: "develop mobile apps that are user-friendly and easy to use."},
        {icon: "fa-brands fa-android", title: "Android App Development", description: "develop android apps that are secure and scalable."},
        {icon:"fa-solid fa-server" , title: "Backend Development", description: "develop backend systems that are secure and scalable."},
        {icon:"fa-solid fa-microchip" , title: "AI Development", description: "develop intelligent systems that can solve problems and improve lives."},
        {icon:"fa-solid fa-gamepad" , title: "Game Development", description: "create games that are fun and engaging for players."},
        { icon: "fa-solid fa-paintbrush", title:"Digital Artist", description: "create digital art that are visually appealing and unique." },
        { icon: "fa-solid fa-palette", title: "Graphic Designer", description: "create graphics that are visually appealing and unique." },
        {icon: "fa-solid fa-images", title: "Photography", description: "create photos that are visually appealing and unique." },
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
                        <span lang="ja">
                            事業 •
                        </span>
                        <span lang="en"> Services
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