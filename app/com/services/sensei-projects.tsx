"use client";

import React, { useEffect, useState } from 'react';
import styles from './sensei-services-projects.module.css';

const githubUsername = 'MostafaSensei106';
const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

function SenseiProjects() {
    const [repos, setRepos] = useState<any[]>([]);

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

    function getIconForLanguage(language: string): string {
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
        <section className={styles['section-projects']} id="Projects">
            <div className={styles.container}>
                <div className={styles['header-section']}>
                    <h2 className={styles.title}><span>Projects</span></h2>
                </div>
                <div className={styles['grid-container']}>
                    {repos.map(repo => (
                        <div className={styles['single-project']} key={repo.id} onClick={() => window.open(repo.html_url, '_blank')}>
                            <div className={styles['part-1']}>
                                <i className={`fa-brands ${getIconForLanguage(repo.language)}`}></i>
                                <h3 className={styles.title}>{repo.name}</h3>
                            </div>
                            <div className={styles['part-2']}>
                                <p className={styles.description}>{repo.description || 'No description available.'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SenseiProjects;
