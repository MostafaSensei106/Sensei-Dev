"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from './sensei-services-projects.module.css';

const githubUsername = 'MostafaSensei106';
const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

// @ts-ignore
const ProjectItem = ({ repo, index }) => {
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

    // @ts-ignore
    function getIconForLanguage(language) {
        switch (language) {
            case 'JavaScript':
                return 'fa-brands fa-js';
            case 'Python':
                return 'fa-python';
            case 'HTML':
                return 'fa-html5';
            case 'CSS':
                return 'fa-css3-alt';
            case 'Java':
                return 'fa-java';
            case 'C++':
                return 'fa-code';
            case 'Dart':
                return 'fa-brands fa-dart-lang';
            case 'Ruby':
                return 'fa-brands fa-gem';
            case 'PHP':
                return 'fa-php';
            case 'Go':
                return 'fa-brands fa-golang';
            case 'Kotlin':
                return 'fa-brands fa-kotlin';
            case 'TypeScript':
                return 'fa-brands fa-js-square';
            case 'Rust':
                return 'fa-brands fa-rust';
            case 'C#':
                return 'fa-brands fa-dot-circle';
            default:
                return 'fa-brands fa-gem';
        }

    }

    return (
        <motion.div
            ref={ref}
            className={styles['single-project']}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            onClick={() => window.open(repo.html_url, '_blank')}
        >
            <div className={styles['part-1']}>
                <motion.i
                    className={`fa-brands ${getIconForLanguage(repo.language)}`}
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                ></motion.i>
                <h3 className={styles.title}>{repo.name}</h3>
            </div>
            <div className={styles['part-2']}>
                <p className={styles.description}>{repo.description || 'No description available.'}</p>
            </div>
        </motion.div>
    );
};

function SenseiProjects() {
    const [repos, setRepos] = useState([]);
    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        async function fetchGitHubRepos() {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        }
        fetchGitHubRepos();
    }, []);

    // @ts-ignore
    return (
        <section className={styles['section-projects']} id="Projects">
            <div className={styles.container}>
                <motion.div
                    ref={headerRef}
                    className={styles['header-section']}
                    initial={{ opacity: 0, y: -50 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className={styles.title}>
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={headerInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200, damping: 10 }}
                        >
                            Projects
                        </motion.span>
                    </h2>
                </motion.div>
                <div className={styles['grid-container']}>
                    {repos.map((repo, index) => (
                        // @ts-ignore
                        <ProjectItem key={repo.id} repo={repo} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SenseiProjects;