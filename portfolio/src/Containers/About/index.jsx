import React from 'react';
import './style.scss';
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/pageHeaderContent";

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="What I've Been Working On"
                icon={<BsInfoCircleFill size={24} />}
            />

            <div className="dotted-line"></div>

            <div className="about-content">
                <p>
                    Hi! I'm <strong>Sheba Fernandes</strong>, a tech enthusiast and web developer currently pursuing my Bachelor of Engineering in <strong>Computer Science and Business Systems</strong> from St. Joseph Engineering College, Mangalore.
                </p>
                <p>
                    Recently, I participated in the <strong>SAP HackFest (State Hub Round)</strong>, where I used the <strong>Design Thinking</strong> approach to solve real-world challenges with technology, blending innovation, business, and engineering.
                </p>
                <p>
                    I also built a full-stack AI-powered web app for the <strong>AI & Education Hackathon</strong>. It automates educational video generation using technologies like <strong>React.js</strong>, <strong>FastAPI</strong>, <strong>Hugging Face models</strong>, <strong>Runway ML</strong>, and <strong>Firebase</strong>.
                </p>
                <p>
                    Passionate about Gen AI, I’ve been experimenting with <strong>text-to-video</strong>, <strong>text-to-image</strong>, <strong>multilingual AI</strong>, and <strong>offline AI solutions</strong> using models like <strong>Phi-3</strong>, <strong>TinyLLaMA</strong>, and <strong>MarianMT</strong>.
                </p>
                <p>
                    From hackathons to personal projects, I enjoy building things that combine creativity with real-world impact.
                </p>
            </div>
        </section>
    );
};

export default About;
