"use client";
import { useState, useEffect } from "react";
import styles from "./sensei_loader.module.css";

function SenseiLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handlePageLoader = () => {
            setIsLoading(false);
        };

        window.addEventListener('load', handlePageLoader);

        return () => {
            window.removeEventListener('load', handlePageLoader);
        };
    }, []);

    if (!isLoading) return null;
    return (
        <div className={styles.loader} id="page-loader"></div>
    );
}

export default SenseiLoader;
