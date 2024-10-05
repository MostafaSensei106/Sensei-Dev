"use client";
import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then((register) => {
                        console.log('service worker registered with scope:', register.scope);
                    })
                    .catch((error) => {
                        console.log('service worker registration failed with error:', error);
                    });
            });
        }
    }, []);

    return null;
}