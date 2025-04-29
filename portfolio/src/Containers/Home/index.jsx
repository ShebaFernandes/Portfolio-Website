import React, { useState, useEffect } from "react";
import ParticlesBackground from "../../ParticlesBackground";
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate'
import "./style.scss";

const Home = () => {
    const navigate = useNavigate();
    console.log(navigate);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 500); // Delay rendering for smooth load
    }, []);

    const handleNavigateToContactMe = () => {
        navigate('/contact')
    }

    return (
        <div className="home">
            <ParticlesBackground />
            {isLoaded && (
                <>
                    <h1 className="home-title">Hello, I'm Sheba Fernandes</h1>
                    <Animate play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateY(550px)",
                        }}
                        en={{
                            transform: "translate(0px)",
                        }}>

                        <div className="home_contact-me">
                            <button className="hire-me-button" onClick={handleNavigateToContactMe}>Hire Me</button>
                        </div>
                    </Animate>

                </>
            )}
        </div>
    );
};

export default Home;
