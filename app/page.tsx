import dynamic from 'next/dynamic';

const LoadingScreen = dynamic(() => import("@/app/com/loader/sensei_loader"));
const AnimatedBackground = dynamic(() => import("@/app/com/animated_background/animated_background"));
const HomeSection = dynamic(() => import("@/app/com/home/sensei-home"));
const ServicesSection = dynamic(() => import("./com/services/sensei-services-projects"));
const ExperienceSection = dynamic(() => import("@/app/com/experience/experience-section"));
const ArtGallerySection = dynamic(() => import("./com/art_gallery/sensei-art"));
const ContactMeSection = dynamic(() => import("@/app/com/contact_me/sensei-contact"));
const AppBar = dynamic(() => import("@/app/com/header/sensei-header"));
const ProjectsSection = dynamic(() => import("./com/services/sensei-projects"));

function Main() {
    return (
        <>
            <LoadingScreen />
            <AppBar />
            <AnimatedBackground />
            <HomeSection />
            <ServicesSection />
            <ExperienceSection />
            <ProjectsSection />
            <ArtGallerySection />
            <ContactMeSection />
        </>
    );
}

export default Main;
