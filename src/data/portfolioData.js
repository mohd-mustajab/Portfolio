import { FaAws, FaDocker, FaGitAlt, FaJava, FaLinkedin, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiMongodb, SiMysql, SiScikitlearn, SiSpringboot, SiTensorflow } from "react-icons/si";

import profile from "../components/Assets/profile-showcase.png";
import resume from "../components/Assets/Mustajab_SDE_Resume.pdf";
import projectManagementCover from "../components/Assets/project-management-cover.png";
import expenseTrackerCover from "../components/Assets/expense-tracker-cover.png";
import collegeHelpdeskCover from "../components/Assets/college-helpdesk-cover.png";
import travelChatbotCover from "../components/Assets/travel-chatbot-cover.png";
import carPredictionCover from "../components/Assets/car-prediction-cover.png";

export const personalInfo = {
  name: "Mohd Mustajab",
  description: "I build intelligent digital products at the intersection of clean software engineering, thoughtful user experiences, and data-driven insight.",
  location: "Hyderabad, India",
  email: "mohdmustajab002@gmail.com",
  phone: "+91 8077144723",
  image: profile,
  resume,
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/mohd-mustajab", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohd-mustajab-174374271/", icon: FaLinkedin },
];

export const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "25+", label: "Technologies Learned" },
  { value: "8+", label: "Certifications" },
];

export const skillLevels = [
  { name: "Python", level: 92 }, { name: "JavaScript", level: 88 },
  { name: "React", level: 86 }, { name: "SQL", level: 90 },
  { name: "Java", level: 78 }, { name: "Machine Learning", level: 84 },
  { name: "HTML & CSS", level: 93 }, { name: "Data Analysis", level: 91 },
];

export const techStack = [
  { name: "React", icon: FaReact }, { name: "Spring Boot", icon: SiSpringboot },
  { name: "Node.js", icon: FaNodeJs }, { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql }, { name: "Git", icon: FaGitAlt },
  { name: "Docker", icon: FaDocker }, { name: "AWS", icon: FaAws },
  { name: "TensorFlow", icon: SiTensorflow }, { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Python", icon: FaPython }, { name: "Java", icon: FaJava },
];

export const projects = [
  {
    title: "Project Management Web Application",
    category: "MERN Stack",
    description: "Full-stack collaboration and task-tracking platform with JWT authentication, role-based Admin and Member permissions, and scalable Mongoose data models.",
    href: "https://project-management-project.onrender.com/",
    github: "https://github.com/mohd-mustajab/Project-Management-Project.git",
    image: projectManagementCover,
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
  },
  {
    title: "Smart Expense Tracker",
    category: "Full Stack",
    description: "Responsive expense-management application with RESTful CRUD operations, category management, real-time updates, and CSV/PDF data exports.",
    github: "https://github.com/mohd-mustajab/smart-expense-tracker",
    image: expenseTrackerCover,
    stack: ["React", "Spring Boot", "Hibernate", "MySQL", "Axios"],
  },
  {
    title: "College Helpdesk Chatbot",
    category: "Data Automation",
    description: "Telegram chatbot that automates student queries about admissions, fees, and exams, providing reliable 24/7 responses.",
    href: "https://t.me/CollegeHelpdesk_bymj_Bot/",
    github: "https://github.com/mohd-mustajab/college-helpdesk-bot.git",
    image: collegeHelpdeskCover,
    stack: ["Python", "Flask", "Telegram API", "Automation"],
  },
  {
    title: "Travel AI Chatbot",
    category: "AI Assistant",
    description: "Conversational travel assistant that helps users plan and explore journeys.",
    href: "https://ai-chatbot-five-murex.vercel.app/",
    github: "https://github.com/mohd-mustajab",
    image: travelChatbotCover,
    stack: ["React", "AI", "API"],
  },
  {
    title: "Car Model Prediction",
    category: "Machine Learning",
    description: "Deep learning app that predicts car models through a friendly interface.",
    href: "https://car-model-detection-bymj.streamlit.app/",
    github: "https://github.com/mohd-mustajab",
    image: carPredictionCover,
    stack: ["Python", "TensorFlow", "Streamlit"],
  },
];

export const timeline = [
  { year: "2025 - Present", title: "Software Engineer & Data Scientist", text: "Building full-stack products, predictive systems, dashboards, and backend APIs for real-world use cases.", stack: ["React", "Python", "Spring Boot", "ML"] },
  { year: "May 2025 - Sep 2025", title: "Data Analyst Intern · Labmantix", text: "Analyzed 10k to 100k+ records, developed Power BI and Streamlit dashboards, and improved recurring reporting efficiency by around 20%.", stack: ["Pandas", "Power BI", "SQL", "Streamlit"] },
  { year: "2021 - 2025", title: "B.Tech · Computer Science", text: "Built a strong foundation in software engineering, data structures, databases, analytics, and applied machine learning.", stack: ["Java", "Python", "SQL", "Web"] },
];

export const certifications = [
  { title: "Data Science & Machine Learning", issuer: "Professional Certification", year: "2025" },
  { title: "Data Analytics with Power BI", issuer: "Professional Certification", year: "2025" },
  { title: "Full Stack Web Development", issuer: "Professional Certification", year: "2024" },
  { title: "Java & Spring Boot", issuer: "Professional Certification", year: "2024" },
];
