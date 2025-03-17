// Import necessary dependencies and styles
"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExclamationCircle, faEye } from '@fortawesome/free-solid-svg-icons';
import styles from './sensei-services-projects.module.css';

//**
// @Author Mostafa Sensei106
// @Description React component that fetches and displays GitHub repositories with animation and styling using Framer Motion and FontAwesome.
/**

/**
 * Interface representing the GitHub repository data structure.
 */
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

/**
 * Returns the corresponding FontAwesome class for a given programming language.
 * @param language - The programming language of the repository.
 * @returns The FontAwesome icon class for the language.
 */
const getIconForLanguage = (language: string): string => {
    const iconMap: { [key: string]: string } = {
        TypeScript: 'fa-brands fa-react',
        JavaScript: 'fa-brands fa-js',
        Python: 'fa-brands fa-python',
        HTML: 'fa-brands fa-html5',
        CSS: 'fa-brands fa-css3',
        Java: 'fa-brands fa-java',
        'C++': 'fa-solid fa-code',
        Dart: 'fa-brands fa-dart-lang',
        Ruby: 'fa-brands fa-gem',
        PHP: 'fa-brands fa-php',
        Go: 'fa-brands fa-golang',
        Kotlin: 'fa-brands fa-android',
        Rust: 'fa-brands fa-rust',
        'C#': 'fa-brands fa-dot-circle',
    };

    return iconMap[language] || 'fa-solid fa-code';
};

/**
 * Formats a date string into a more readable format.
 * @param dateString - The date string to format.
 * @returns The formatted date string.
 */
const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

/**
 * Component representing a single GitHub repository item in the projects list.
 * @param repo - The GitHub repository data.
 * @param index - The index of the repository in the list.
 */
const ProjectItem: React.FC<{ repo: GitHubRepository; index: number }> = React.memo(({ repo, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Define animation variants for the project item
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
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
                <div className={styles.description}>
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
                </div>
                <div className={styles.description}>
                    <strong>Owner:</strong> {repo.owner.login}
                    {repo.license && (
                        <p className={styles.description}>
                            <strong>License:</strong> {repo.license.name}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}, (prevProps, nextProps) => prevProps.repo.id === nextProps.repo.id);

/**
 * Main component that fetches and displays GitHub repositories.
 * It handles the fetching of repositories and renders them as project items.
 */
const SenseiProjects: React.FC = () => {
    const [repos, setRepos] = useState<GitHubRepository[]>([]);
    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    /**
     * Fetches repositories from GitHub and updates the state.
     */
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

    // Fetch repositories on component mount
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
                            計画  •
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
