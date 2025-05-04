import Particles from "@tsparticles/react";



const StarsBackground = () => {
    return (
        <Particles
            options={
                {
                    fpsLimit: 144,

                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            resize: {
                                delay: 0.5

                            }
                        },
                    },


                    particles:{
                        color: {
                            value: "#ffffff"
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce"
                            },
                            random: false,
                            speed: 1,
                            straight: false
                        },
                        number: {
                        }
                    }
                }
            }

        />
    );
}

export default StarsBackground;