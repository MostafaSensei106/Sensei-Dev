import SenseiHeader from "@/app/com/header/sensei-header";
import SenseiHome from "@/app/com/home/sensei-home";
import SenseiServicesProjects from "./com/services/sensei-services-projects";
import SenseiEducation from "@/app/com/education/sensei-education";
// import SenseiProjects from "@/app/com/services/sensei-projects";
import SenseiArt from "./com/art_gallery/sensei-art";
import SenseiContact from "@/app/com/contact_me/sensei-contact";
import Senseiloader from "@/app/com/loader/sensei_loader";
import AnimatedBackground from "@/app/com/animated_background/animated_background";
import SenseiProjects from "./com/services/sensei-projects";

// Main component
// @returns {JSX.Element}
// @author Mostafa Sensei106
// @description A functional component that renders the page of the website.
function Main() {
    return (
        <>
            {/*//This component displays a loading spinner until the page is fully loaded*/}
            <Senseiloader />
            <SenseiHeader />
            <AnimatedBackground/>
            <SenseiHome />
            <SenseiServicesProjects />
            <SenseiEducation />
            <SenseiProjects />
            <SenseiArt />
            <SenseiContact />
        </>
    );
}

export  default Main;