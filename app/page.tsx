import React from "react";
import AppBar from "@/app/com/header/sensei-header";
import HomeSection from "@/app/com/home/sensei-home";
import ServicesSection from "./com/services/sensei-services-projects";
import ExperienceSection from "@/app/com/experience/experience-section";
import ArtGallerySection from "./com/art_gallery/sensei-art";
import ContactMeSection from "@/app/com/contact_me/sensei-contact";
import LoadingScreen from "@/app/com/loader/sensei_loader";
import Background from "@/app/com/animated_background/background";
import ProjectsSection from "./com/services/sensei-projects";


// Main component
// @returns {JSX.Element}
// @author Mostafa Sensei106
// @description A functional component that renders the page of the website.

function Main() {
    return (
        <main>
            <LoadingScreen />
            <Background />
            <AppBar />
            <HomeSection />
            <ServicesSection />
            <ExperienceSection />
            <ProjectsSection />
            <ArtGallerySection />
            <ContactMeSection />
        </main>
    );
}
export  default Main;