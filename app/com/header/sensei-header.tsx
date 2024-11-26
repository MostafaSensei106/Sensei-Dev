"use client";
import React, { useState, useEffect } from 'react';
import styles from './sensei-header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUserSecret,
    faBook,
    faPalette
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

/**
 * The main header component with a responsive menu and enhanced animations.
 * @returns The JSX Element for the header.
 */
const SenseiHeader = (): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('Home');

    const toggleMenu = (): void => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const handleScroll = (): void => {
        const sections: Array<string> = [
            'Home',
            'Service',
            'Knowledge',
            'Gallery'
        ];
        const current: string | undefined = sections.find((section) => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
        });
        if (current) {
            setActiveSection(current);
            localStorage.setItem('activeSection', current);
        }
    };

    useEffect(() => {
        const savedSection = localStorage.getItem('activeSection');
        if (savedSection) {
            setActiveSection(savedSection);
            const element = document.getElementById(savedSection);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = (): void => {
            if (window.innerWidth > 994 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    const sectionIcons: Record<string, IconProp> = {
        Home: faHome,
        Service: faUserSecret,
        Knowledge: faBook,
        Gallery: faPalette,
    };

    return (
        <header className={styles.header}>
            <a href="#" className={styles.logo}>
                <span lang="en">Mostafa •</span>
                <span lang="ja"> モスタファ</span>
            </a>
            <div
                className={`${styles.MenuIcon} ${isMenuOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
                tabIndex={0}
                role="button"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav
                className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}
                aria-hidden={!isMenuOpen}
            >
                {Object.entries(sectionIcons).map(([section, icon]) => (
                    <a
                        key={section}
                        href={`#${section}`}
                        className={activeSection === section ? styles.active : ''}
                        onClick={() => {
                            setActiveSection(section);
                            localStorage.setItem('activeSection', section);
                            if (window.innerWidth <= 994) setIsMenuOpen(false);
                        }}
                    >
                        <FontAwesomeIcon icon={icon} className={styles.icon} />
                        <span>{section}</span>
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default SenseiHeader;