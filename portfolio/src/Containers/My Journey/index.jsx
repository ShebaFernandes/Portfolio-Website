import React, { useEffect } from "react";
import PageHeaderContent from "../../Components/pageHeaderContent";
import "./style.scss";
import { BsInfoCircleFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Journey = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="journey" className="journey">
      <PageHeaderContent
        headerText="My Journey"
        icon={<BsInfoCircleFill size={24} />}
      />

      {/* 🌟 Intro Section */}
      <div className="journey__intro" data-aos="fade-up">
        <p className="journey__intro-text">
          Every keystroke, every bug, and every demo day shaped who I am today.
          Here’s a look into how I grew — from curious learner to AI-powered builder.
        </p>
      </div>

      {/* 📌 Timeline Highlights */}
      <div className="journey__timeline" data-aos="fade-up">
        <h3 className="journey__section-title">Key Milestones</h3>
        <ul className="journey__timeline-list">
          <li className="journey__timeline-item">
            🖥️ <strong>2020</strong> — Discovered coding, built my first HTML page
          </li>
          <li className="journey__timeline-item">
            🌐 <strong>2022</strong> — Launched my portfolio using React.js
          </li>
          <li className="journey__timeline-item">
            🧠 <strong>2023</strong> — Built GenZenius: an AI-based video generator using Hugging Face
          </li>
          <li className="journey__timeline-item">
            🏆 <strong>2024</strong> — Top 300 in AI for Education | SAP Hackfest Hub Qualifier
          </li>
          <li className="journey__timeline-item">
            🚀 <strong>2025</strong> — Selected for internship after a solo 24hr hackathon
          </li>
        </ul>
      </div>

      {/* 🎓 Lessons Learned */}
      <div className="journey__lessons" data-aos="fade-left">
        <h3 className="journey__section-title">What I’ve Learned</h3>
        <ul className="journey__lessons-list">
          <li>🧩 Projects taught me patience and precision</li>
          <li>🤝 Teamwork taught me to listen, lead, and adapt</li>
          <li>🎯 Hackathons taught me to build fast and think clearly</li>
          <li>💡 Growth starts outside your comfort zone</li>
        </ul>
      </div>

      {/* 🧠 Quote Section */}
      <div className="journey__quote" data-aos="zoom-in">
        <blockquote>
          “Your journey doesn’t start when you're ready. It starts when you dare to try.”
        </blockquote>
      </div>
    </section>
  );
};

export default Journey;
