import React from "react";
import AppBar from "@/app/com/header/sensei-header";
import HomeSection from "@/app/com/home/home";
import ExperienceSection from "@/app/com/experience/experience-section";
import ContactMeSection from "@/app/com/contact_me/sensei-contact";
import LoadingScreen from "@/app/com/loader/sensei_loader";
import AnimatedBackground from "@/app/com/animated_background/animated_background";
import SenseiProjects from "./com/services/sensei-projects";


// Main component
// @returns {JSX.Element}
// @author Mostafa Sensei106
// @description A functional component that renders the page of the website.

function Main() {
    return (
        <>
            <LoadingScreen />
            <AnimatedBackground />
            <AppBar />
            <HomeSection />
            {/*<ServicesSection />*/}
            <ExperienceSection />
            <SenseiProjects />
            {/*<ArtGallerySection />*/}
            <ContactMeSection />
        </>
    );
}
export default Main;
