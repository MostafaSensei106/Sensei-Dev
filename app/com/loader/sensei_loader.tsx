
// Import necessary hooks and styles
"use client";
import { useState, useEffect } from "react";
import styles from "./sensei_loader.module.css";

/**
// @Author Mostafa Sensei106
// @Description A React component that displays a loader while the page is loading. It hides itself once the page is fully loaded.
/**

/**
 * A React component that renders a loading spinner until the page is fully loaded.
 *
 * @returns {JSX.Element | null} A JSX element representing the loader, or null if loading is complete.
 */
function SenseiLoader(): JSX.Element | null {
    // State to track loading status
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Function to handle the page load event
        const handlePageLoader = () => {
            setIsLoading(false); // Set loading to false when the page is loaded
        };

        // Check if the document is already loaded
        if (document.readyState === 'complete') {
            handlePageLoader(); // If already loaded, immediately hide the loader
        } else {
            // Add an event listener for the load event
            window.addEventListener('load', handlePageLoader);
        }

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('load', handlePageLoader);
        };
    }, []);

    // If not loading, return null to hide the loader
    if (!isLoading) return null;

    // Render the loader element
    return (
        <div className={styles.loader} id="page-loader"></div>
    );
}

export default SenseiLoader;
