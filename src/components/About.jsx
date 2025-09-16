import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./About.css"
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="heading">About</div>
        <div className="description">Hello<b>!</b> I'm <b>Mohd Mustajab</b>, Analytical and detail-oriented Data Analyst & AI/ML Enthusiast with hands-on experience in building machine
learning models, data visualisation dashboards, and AI-driven applications. Skilled in Python, SQL, Power BI,
and Machine Learning frameworks. Capable of turning raw data into actionable insights to support decisionmaking. Seeking opportunities to apply data analytics and AI expertise to solve real-world business problems.<br/> And a passionate and dedicated web developer who builds dynamic and responsive websites and web applications. My journey in web development started with a curiosity for technology and a desire to create functional and aesthetically pleasing digital experiences.
        </div>
        <div className="heading">Expertise</div>
        <div className="description">
        <b>Data Scientist:</b> Analytical and detail-oriented Data Analyst & AI/ML Enthusiast with hands-on experience in building machine
learning models, data visualisation dashboards, and AI-driven applications. Skilled in Python, SQL, Power BI,
and Machine Learning frameworks. <br />
        <b>Front-End Development:</b> Proficient in HTML, CSS, JavaScript, and frameworks such as React.js, I craft engaging and user-friendly interfaces. <br />
        <b>Back-End Development:</b> Skilled in Node.js, Express, and databases like MongoDB and SQL and APIs. <br />
        <b>Full-Stack Development:</b> Combining my front-end and back-end skills, I deliver comprehensive solutions that meet both user needs and business objectives. <br />
        <b>Responsive Design:</b> Ensuring that websites look great and work seamlessly on all devices is a priority in my projects.
        </div>
          <div className="heading2">Skills</div>
          <div className="skills">
          <div className="skill python"><div /></div><p><FaPython />   Python</p>
          <div className="skill html"><div /></div><p><FaHtml5 /> Html</p>
          <div className="skill css"><div /></div><p><IoLogoCss3 /> CSS</p>
          <div className="skill javascript"><div/></div><p><IoLogoJavascript /> JavaScript</p>
          <div className="skill react"><div /></div><p><FaReact /> React.js</p>
          <div className="skill java"><div /></div><p><FaJava /> Java</p>
          <div className="skill cpp"><div /></div><p><TbBrandCpp /> C++</p>
          <div className="skill c"><div /></div><p><FaCode /> C</p>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About
