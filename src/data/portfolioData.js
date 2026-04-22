import {
  FaCode,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaGithub, FaLayerGroup } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp, TbChartHistogram } from "react-icons/tb";

import myphoto from "../components/Assets/profile-showcase.png";
import mycv from "../components/Assets/Mustajab_Resume.pdf";
import daResume from "../components/Assets/Mustajab_DA_Resume.pdf";
import dsResume from "../components/Assets/Mustajab_DS_Resume.pdf";
import sdeResume from "../components/Assets/Mustajab_SDE_Resume.pdf";

export const personalInfo = {
  name: "Mohd Mustajab",
  greeting: "Hii, I am",
  tagline: "Software Engineer - Data Scientist - Full Stack Developer",
  description:
    "Analytical and detail-oriented Data Analyst, AI/ML enthusiast, and software developer focused on intelligent products, backend systems, and polished digital experiences.",
  location: "Hyderabad, India",
  email: "mohdmustajab002@gmail.com",
  phone: "+91 8077144723",
  image: myphoto,
  resume: mycv,
};

export const resumeLinks = [
  { label: "Data Analyst Resume", href: daResume },
  { label: "Data Science Resume", href: dsResume },
  { label: "Software Engineer Resume", href: sdeResume },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/mohd-mustajab", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohd-mustajab-174374271/",
    icon: FaLinkedin,
  },
];

export const heroStats = [
  { value: "100k+", label: "Rows Analyzed" },
  { value: "20%", label: "Workflow Efficiency Gain" },
  { value: "AI + Backend", label: "Delivery Focus" },
];

export const aboutHighlights = [
  "B.Tech in Computer Science from Mahaveer Institute of Science and Technology, Hyderabad.",
  "Data Analyst Intern at Labmantix with hands-on analytics, dashboarding, and workflow automation experience.",
  "Built predictive ML systems, business analysis dashboards, and REST API-based backend applications.",
];

export const expertise = [
  {
    title: "Data Science",
    text: "Builds end-to-end machine learning workflows with Python, scikit-learn, TensorFlow, PyTorch, feature engineering, and model evaluation.",
    icon: TbChartHistogram,
  },
  {
    title: "Front-End Development",
    text: "Creates responsive, engaging interfaces with React, JavaScript, HTML, CSS, and strong UI attention to detail.",
    icon: FaReact,
  },
  {
    title: "Back-End Development",
    text: "Works with Java, Spring Boot, REST APIs, MySQL, MongoDB, and structured backend patterns to ship maintainable applications.",
    icon: FaDatabase,
  },
  {
    title: "Analytics Delivery",
    text: "Transforms raw datasets into dashboards, reports, and business-ready insights using SQL, Excel, Power BI, Streamlit, and EDA workflows.",
    icon: FaLayerGroup,
  },
];

export const skills = [
  { name: "Python", icon: FaPython, level: "Advanced", orbit: "outer" },
  { name: "React", icon: FaReact, level: "Advanced", orbit: "inner" },
  { name: "JavaScript", icon: IoLogoJavascript, level: "Advanced", orbit: "outer" },
  { name: "HTML", icon: FaHtml5, level: "Advanced", orbit: "inner" },
  { name: "CSS", icon: IoLogoCss3, level: "Advanced", orbit: "outer" },
  { name: "Data Analysis", icon: TbChartHistogram, level: "Advanced", orbit: "inner" },
  { name: "EDA", icon: TbChartHistogram, level: "Advanced", orbit: "outer" },
  { name: "Excel", icon: FaDatabase, level: "Advanced", orbit: "inner" },
  { name: "Power BI", icon: TbChartHistogram, level: "Advanced", orbit: "outer" },
  { name: "Streamlit", icon: FaReact, level: "Intermediate", orbit: "inner" },
  { name: "Pandas", icon: FaPython, level: "Advanced", orbit: "outer" },
  { name: "NumPy", icon: FaPython, level: "Advanced", orbit: "inner" },
  { name: "scikit-learn", icon: FaPython, level: "Advanced", orbit: "outer" },
  { name: "TensorFlow", icon: FaPython, level: "Intermediate", orbit: "inner" },
  { name: "PyTorch", icon: FaPython, level: "Intermediate", orbit: "outer" },
  { name: "OpenCV", icon: FaPython, level: "Intermediate", orbit: "inner" },
  { name: "Node.js", icon: FaNodeJs, level: "Intermediate", orbit: "inner" },
  { name: "Git", icon: FaCode, level: "Intermediate", orbit: "outer" },
  { name: "Spring Boot", icon: FaJava, level: "Intermediate", orbit: "inner" },
  { name: "REST APIs", icon: FaCode, level: "Intermediate", orbit: "outer" },
  { name: "MySQL", icon: FaDatabase, level: "Advanced", orbit: "inner" },
  { name: "MongoDB", icon: FaDatabase, level: "Intermediate", orbit: "outer" },
  { name: "Java", icon: FaJava, level: "Intermediate", orbit: "outer" },
  { name: "C++", icon: TbBrandCpp, level: "Intermediate", orbit: "inner" },
  { name: "SQL", icon: FaDatabase, level: "Advanced", orbit: "outer" },
  { name: "C", icon: FaCode, level: "Intermediate", orbit: "inner" },
];

export const projects = [
  {
    title: "Car Model Prediction",
    category: "Machine Learning",
    description: "Deep learning-powered app that predicts car models from user inputs with a simple interactive interface.",
    href: "https://car-model-detection-bymj.streamlit.app/",
  },
  {
    title: "ML Prediction App",
    category: "Machine Learning",
    description: "Prediction workflow that translates raw inputs into quick model-based decisions for end users.",
    href: "https://machine-learning-prediction-app-by-mj.streamlit.app/",
  },
  {
    title: "Titanic Survival Prediction",
    category: "Data Science",
    description: "A classic survival predictor presented through a clear, user-friendly predictive dashboard.",
    href: "https://titanic-survival-predictor-da-project-by-mj.streamlit.app/",
  },
  {
    title: "IPL Win Prediction",
    category: "Sports Analytics",
    description: "Match win probability experience blending predictive modeling with real-time style interaction.",
    href: "https://ipl-win-pridiction000.streamlit.app/",
  },
  {
    title: "Weather Dashboard Power BI",
    category: "Analytics",
    description: "Weather analysis dashboard using Power BI to surface trends, conditions, and city-level comparisons.",
    href: "https://github.com/mohd-mustajab/Weather-Dashboard-using-Power-BI.git/",
  },
  {
    title: "Pricing Profitability Analysis",
    category: "Business Analysis",
    description: "Retail pricing and profitability analysis using Python, SQL, Excel, and Power BI to surface revenue, margin, and demand insights.",
    href: "https://github.com/mohd-mustajab",
  },
  {
    title: "Travel Chatbot",
    category: "AI Assistant",
    description: "Conversational travel support experience for journey-related questions and trip assistance.",
    href: "https://ai-chatbot-five-murex.vercel.app/",
  },
  {
    title: "Live Chat App",
    category: "Full Stack",
    description: "Real-time room-based chat application built for fast communication and collaborative conversation.",
    href: "https://live-chat-app-7np2.onrender.com/",
  },
  {
    title: "Spring Boot User Management API",
    category: "Backend Engineering",
    description: "RESTful CRUD API with Spring Boot, MySQL, layered architecture, validation, exception handling, and tested endpoints.",
    href: "https://github.com/mohd-mustajab",
  },
  {
    title: "Smart Expense Tracker",
    category: "Full Stack",
    description: "Expense management system built with React, Spring Boot, Hibernate, and MySQL with CSV/PDF export and responsive UI.",
    href: "https://github.com/mohd-mustajab",
  },
  {
    title: "Video Player",
    category: "Web App",
    description: "Multi-resolution video player with upload and playback flows designed for practical usability.",
    href: "https://multi-resolution-video-player.onrender.com/",
  },
  {
    title: "Music Player",
    category: "Frontend",
    description: "A sleek audio playback experience focused on clarity, controls, and lightweight interaction.",
    href: "https://mohd-mustajab.github.io/Music_player_Project/",
  },
  {
    title: "User Data",
    category: "API Integration",
    description: "Search-first interface that fetches external user data and presents it in a more digestible format.",
    href: "https://userdata-mj.netlify.app/",
  },
];

export const timeline = [
  {
    year: "Foundation",
    title: "B.Tech in Computer Science",
    text: "Completed B.Tech in Computer Science at Mahaveer Institute of Science and Technology, Hyderabad, building the base for software, data, and problem-solving work.",
  },
  {
    year: "May 2025 - Sept 2025",
    title: "Data Analyst Intern at Labmantix",
    text: "Analyzed 10k to 100k+ structured records using Pandas and NumPy, performed EDA and validation, built Power BI and Streamlit dashboards, and improved recurring reporting efficiency by around 20%.",
  },
  {
    year: "Current Focus",
    title: "AI, Analytics, and Backend Delivery",
    text: "Focused on machine learning projects, business analysis, Spring Boot backend systems, and full-stack products that balance usability with practical engineering.",
  },
];

export const contactHighlights = [
  "Available for Data Analyst, Data Science, Software Developer, and AI-focused roles.",
  "Hands-on with analytics reporting, predictive modeling, dashboards, and backend application development.",
  "Strong fit for recruiter outreach, product teams, and business-ready digital delivery.",
];

export const seo = {
  title: "Mohd Mustajab | 3D Developer Portfolio",
  description:
    "Explore Mohd Mustajab's immersive portfolio featuring software engineering, data science, AI/ML, and full-stack development work.",
};

export const floatingKeywords = [
  "AI/ML",
  "React",
  "Three.js",
  "Data",
  "Design",
  "Analytics",
  "Full Stack",
  "Creative Tech",
];
