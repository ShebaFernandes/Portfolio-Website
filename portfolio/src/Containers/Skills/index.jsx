import React from "react";
import { Line } from "rc-progress";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import PageHeaderContent from "../../Components/pageHeaderContent";
import { skillsData } from "./utils";
import "./style.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={24} />}
      />

      {/* ✅ Resume View Button */}
      <div className="resume-download" data-aos="zoom-in">
        <a
          href="/Sheba_Resume.pdf.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          📄 View Resume
        </a>
      </div>

      {/* ✅ Skill Categories with Progress Bars */}
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div
            key={i}
            className="skills__content-wrapper__inner-content card-style"
          >
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ opacity: 0, transform: "translateY(30px)" }}
              end={{ opacity: 1, transform: "translateY(0px)" }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>

              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 0", "opacity : 1"]}
                    iterationCount="1"
                    key={j}
                  >
                    <div className="progressbar-wrapper">
                      <p>{skillItem.skillName}</p>
                      <Line
                         percent={skillItem.percentage}
    strokeWidth="4"
    strokeColor="var(--yellow-theme-main-color)"
    trailWidth="4"
    trailColor="#2c2c2c"
    strokeLinecap="round"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
