/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa';

const nextConfig = {
    output: 'export',
};

const withPWA = nextPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
});

try {
    export default withPWA(nextConfig);
} catch (error) {
    console.error('Error in Next.js config:', error);
    export default nextConfig;
}