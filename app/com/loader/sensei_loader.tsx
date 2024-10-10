"use client";
import { useState, useEffect } from "react";
import styles from "./sensei_loader.module.css";

/**
 * The component to show a loading animation while the page is being loaded.
 * Once the page is fully loaded, the component will be unmounted.
 */
function SenseiLoader() {
    /**
     * The state of whether the page is currently loading.
     */
    const [isLoading, setIsLoading] = useState(document.readyState !== 'complete');

    /**
     * The effect to handle the page loading.
     * It will be triggered when the component is mounted or updated.
     */
    useEffect(() => {

        /**
         * The function to be called when the page is fully loaded.
         */
        const handlePageLoader = () => setIsLoading(false);

        /**
         * Add an event listener to the window to call the handlePageLoader function when the page is fully loaded.
         */
        window.addEventListener('load', handlePageLoader, { once: true });

        /**
         * The clean-up function to be called when the component is unmounted.
         * It will remove the event listener from the window.
         */
        return () => window.removeEventListener('load', handlePageLoader);
    }, []);

    /**
     * If the page is not loading, return null.
     * Otherwise, return the loader component.
     */
    if (!isLoading) return null;
    return (
        <div className={styles.loader} id="page-loader"></div>
    );
}

export default SenseiLoader;