"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExclamationCircle, faEye } from '@fortawesome/free-solid-svg-icons';
import styles from './sensei-services-projects.module.css';

interface GitHubRepository {
    id: number;
    name: string;
    description: string;
    language: string;
    html_url: string;
    stargazers_count: number;
    open_issues_count: number;
    updated_at: string;
    created_at: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    topics: string[];
    default_branch: string;
    watchers_count: number;
    license: {
        name: string;
    } | null;
}

const GITHUB_USERNAME = 'MostafaSensei106';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const getIconForLanguage = (language: string): string => {
    const iconMap: { [key: string]: string } = {
        TypeScript: 'fa-brands fa-react',
        JavaScript: 'fa-brands fa-js',
        Python: 'fa-brands fa-python',
        HTML: 'fa-brands fa-html5',
        CSS: 'fa-brands fa-css3',
        Java: 'fa-brands fa-java',
        'C++': 'fa-solid fa-code',
        Dart: 'fa-brands fa-flutter',
        Ruby: 'fa-brands fa-gem',
        PHP: 'fa-brands fa-php',
        Go: 'fa-brands fa-golang',
        Kotlin: 'fa-brands fa-android',
        Rust: 'fa-brands fa-rust',
        'C#': 'fa-brands fa-dot-circle'
    };

    return iconMap[language] || 'fa-solid fa-code';
};

const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

const ProjectItem: React.FC<{ repo: GitHubRepository; index: number }> = React.memo(({ repo, index }) => {
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
            className={styles['single-project']}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            onClick={() => window.open(repo.html_url, '_blank')}
        >
            <div className={styles['part-1']}>
                <motion.i
                    className={getIconForLanguage(repo.language)}
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                />
                <h3>{repo.name}</h3>
            </div>
            <div className={styles['part-2']}>
                <p className={styles.description}>{repo.description || 'No description available.'}</p>
                <p className={styles.description}>
                    <strong>Stars:</strong> {repo.stargazers_count} <FontAwesomeIcon icon={faStar} /> |
                    <strong>Issues:</strong> {repo.open_issues_count} <FontAwesomeIcon icon={faExclamationCircle} /> |
                    <strong>Watchers:</strong> {repo.watchers_count} <FontAwesomeIcon icon={faEye} />
                    <br/>
                    <strong>Created:</strong> {formatDate(repo.created_at)}<br/>
                    <strong>Updated:</strong> {formatDate(repo.updated_at)}
                    <br/>
                    {repo.topics.length > 0 && (
                        <p className={styles.description}>
                            <strong>Topics:</strong> {repo.topics.join(', ')}
                        </p>
                    )}
                </p>
                {repo.license && (
                    <p className={styles.description}>
                        <strong>License:</strong> {repo.license.name}
                    </p>
                )}
                <p className={styles.description}>
                    <strong>Owner:</strong> {repo.owner.login}
                </p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
        </motion.div>
    );
}, (prevProps, nextProps) => prevProps.repo.id === nextProps.repo.id);

const SenseiProjects: React.FC = () => {
    const [repos, setRepos] = useState<GitHubRepository[]>([]);
    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const fetchGitHubRepos = useCallback(async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }
            const data = await response.json();
            setRepos(data);
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    }, []);

    useEffect(() => {
        fetchGitHubRepos();
    }, [fetchGitHubRepos]);

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
                            lang="ja"
                            initial={{ scale: 0 }}
                            animate={headerInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200, damping: 10 }}
                        >
                            プロジェクト •
                        </motion.span>
                        <motion.span
                            lang="en"
                            initial={{ scale: 0 }}
                            animate={headerInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200, damping: 10 }}
                        > Projects
                        </motion.span>
                    </h2>
                </motion.div>
                <div className={styles['grid-container']}>
                    {repos.map((repo, index) => (
                        <ProjectItem key={repo.id} repo={repo} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SenseiProjects;