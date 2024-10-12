import SenseiHeader from "@/app/com/header/sensei-header";
import SenseiHome from "@/app/com/home/sensei-home";
import SenseiServicesProjects from "./com/services/sensei-services-projects";
import SenseiEducation from "@/app/com/education/sensei-education";
import SenseiProjects from "@/app/com/services/sensei-projects";
import SenseiArt from "./com/art_gallery/sensei-art";
import SenseiContact from "@/app/com/contact_me/sensei-contact";
import Sensei_loader from "@/app/com/loader/sensei_loader";
import AnimatedBackground from "@/app/com/animated_background/animated_background";

function Home() {
    return (
        <>
            <Sensei_loader />
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

export  default Home;