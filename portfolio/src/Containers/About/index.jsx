import React from 'react';
import './style.scss'
import { FaInfoCircle } from 'react-icons/fa'; // Icon library for better design
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/pageHeaderContent";

const About = () => {
    return (
        <section id="about" className="about">
        <PageHeaderContent
            headerText="About Me "
            icon={<BsInfoCircleFill size={24} />}
        />
     
          
   
        <div className="about">
            
            </div>

            <div className="dotted-line"></div>

            <div className="about-content">
                <p>
                    Hi! I'm <strong>Sheba Fernandes</strong>, a passionate web developer and tech enthusiast currently pursuing my Bachelor of Engineering in <strong>Computer Science and Business Systems</strong> from St. Joseph Engineering College, Mangalore.
                </p>
                <p>
                    With experience in building dynamic web applications using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>PostgreSQL</strong>, I love creating user-friendly and efficient solutions.  
                </p>
                <p>
                    I’ve showcased my skills in hackathons, like the 24-hour individual hackathon at VTU Belagavi where I built an Expense Tracker using modern technologies. My internship at <strong>Interpe</strong> also strengthened my web development expertise.
                </p>
                <p>
                    I thrive in learning new technologies and take pride in turning ideas into reality through coding and innovation.
                </p>
            </div>
        
        </section>
    );
};

export default About;
