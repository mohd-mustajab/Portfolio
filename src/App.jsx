import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { FaAward, FaCode, FaLinkedinIn } from "react-icons/fa";
import { SiSpringboot, SiTensorflow } from "react-icons/si";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  certifications,
  personalInfo,
  projects,
  skillLevels,
  socialLinks,
  stats,
  techStack,
  timeline,
} from "./data/portfolioData";

const reveal = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const reduceMotion = useReducedMotion();
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });
  const [role, setRole] = useState(0);
  const [sending, setSending] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const roles = ["Software Engineer", "Data Scientist", "Full Stack Developer"];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Storage may be unavailable when previewing the build from a local file.
    }
  }, [theme]);

  useEffect(() => {
    const timer = window.setInterval(() => setRole((current) => (current + 1) % roles.length), 2400);
    return () => window.clearInterval(timer);
  }, [roles.length]);

  const sendEmail = async (event) => {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    try {
      await emailjs.send("service_0bm968f", "template_livmhmm", {
        ...values,
        from_name: values.name,
        reply_to: values.email,
        subject: values.sub,
        message: values.msg,
      }, { publicKey: "oshirECPffq6jKUQz" });
      form.reset();
      Swal.fire({ title: "Message sent", icon: "success", background: "#07131e", color: "#fff" });
    } catch {
      Swal.fire({ title: "Could not send message", text: "Please email me directly instead.", icon: "error" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="cyber-grid" aria-hidden="true" />
      <Navbar theme={theme} onTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />

      <main>
        <section id="home" className="hero section">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
            <div className="status-pill"><i /> Available for opportunities</div>
            <p className="hero-kicker">Hello, I&apos;m</p>
            <h1>Mohd <span>Mustajab</span></h1>
            <div className="role-line">
              <span>&gt;</span>
              <motion.strong key={role} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                {roles[role]}
              </motion.strong>
              <i />
            </div>
            <p className="hero-summary">{personalInfo.description}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View Projects <FiArrowUpRight /></a>
              <a className="button ghost" href={personalInfo.resume} download>Download Resume <FiDownload /></a>
            </div>
            <div className="socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a>
              ))}
              <a href={`mailto:${personalInfo.email}`} aria-label="Email"><FiMail /></a>
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="portrait-ring">
              <img src={personalInfo.image} alt={`${personalInfo.name}, software engineer and data scientist`} fetchPriority="high" />
            </div>
            <motion.div className="float-card code-card" animate={reduceMotion ? {} : { y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }}>
              <FaCode /><code>build(ideas)</code><small>Clean. Scalable. Useful.</small>
            </motion.div>
            <motion.div className="float-card ml-card" animate={reduceMotion ? {} : { y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity }}>
              <SiTensorflow /><span>ML systems</span><b>92% accuracy</b>
            </motion.div>
            <div className="particle p1" /><div className="particle p2" /><div className="particle p3" /><div className="particle p4" />
          </motion.div>
        </section>

        <motion.section id="about" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
          <SectionTitle eyebrow="01 / About" title="Engineering ideas into impact." text="I combine software engineering discipline with data science curiosity to create products that are useful, intelligent, and delightful to use." />
          <div className="about-grid">
            <article className="glass about-story">
              <p>I&apos;m a Computer Science graduate based in Hyderabad, focused on building intelligent applications, resilient backend systems, and decision-ready analytics.</p>
              <p>My work spans React interfaces, Spring Boot APIs, machine learning workflows, Power BI dashboards, and data analysis. I care about clear thinking, thoughtful execution, and technology that solves a real problem.</p>
              <div className="value-list">
                <span><FiCheckCircle /> Product-minded engineering</span>
                <span><FiCheckCircle /> Data-driven problem solving</span>
                <span><FiCheckCircle /> Continuous learning</span>
              </div>
            </article>
            <div className="stats-grid">
              {stats.map((item) => <article className="glass stat-card" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}
            </div>
          </div>
        </motion.section>

        <motion.section id="skills" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={reveal}>
          <SectionTitle eyebrow="02 / Skills" title="A versatile technical toolkit." text="From polished user interfaces to predictive models and production-ready APIs." />
          <div className="skills-grid">
            <div className="glass skill-bars">
              {skillLevels.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div><span>{skill.name}</span><b>{skill.level}%</b></div>
                  <div className="skill-track"><motion.i initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} /></div>
                </div>
              ))}
            </div>
            <div className="tech-grid">
              {techStack.map(({ name, icon: Icon }) => <article className="glass tech-card" key={name}><Icon /><span>{name}</span></article>)}
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={reveal}>
          <SectionTitle eyebrow="03 / Featured Work" title="Projects built to perform." text="A selection of full-stack, analytics, and machine learning work." />
          <div className="project-grid">
            {projects.slice(0, 6).map((project, index) => (
              <motion.article className="glass project-card" key={project.title} whileHover={reduceMotion ? {} : { y: -10 }} transition={{ duration: 0.25 }}>
                <div className="project-image">
                  <img src={project.image} alt="" loading="lazy" />
                  <span>0{index + 1}</span>
                </div>
                <div className="project-body">
                  <p>{project.category}</p><h3>{project.title}</h3><span>{project.description}</span>
                  <div className="badges">{project.stack.map((item) => <i key={item}>{item}</i>)}</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
                    {project.href && <a href={project.href} target="_blank" rel="noreferrer">Live Demo <FiExternalLink /></a>}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="experience" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
          <SectionTitle eyebrow="04 / Experience" title="Learning, building, evolving." />
          <div className="timeline">
            {timeline.map((item) => <article className="glass timeline-card" key={item.title}><i /><span>{item.year}</span><h3>{item.title}</h3><p>{item.text}</p><div>{item.stack?.map((tech) => <b key={tech}>{tech}</b>)}</div></article>)}
          </div>
        </motion.section>

        <motion.section id="certifications" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
          <SectionTitle eyebrow="05 / Certifications" title="Validated curiosity." />
          <div className="cert-grid">
            {certifications.map((cert) => <article className="glass cert-card" key={cert.title}><FaAward /><span>{cert.issuer}</span><h3>{cert.title}</h3><p>{cert.year}</p></article>)}
          </div>
        </motion.section>

        <motion.section id="contact" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={reveal}>
          <SectionTitle eyebrow="06 / Contact" title="Let's build something meaningful." text="Have a role, project, or ambitious idea in mind? My inbox is open." />
          <div className="contact-grid">
            <article className="glass contact-info">
              <h3>Start a conversation</h3>
              <a href={`mailto:${personalInfo.email}`}><FiMail /><span>Email<b>{personalInfo.email}</b></span></a>
              <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}><FiPhone /><span>Phone<b>{personalInfo.phone}</b></span></a>
              <p><FiMapPin /><span>Location<b>{personalInfo.location}</b></span></p>
              <div className="contact-socials"><a href="https://github.com/mohd-mustajab"><FiGithub /></a><a href="https://www.linkedin.com/in/mohd-mustajab-174374271/"><FaLinkedinIn /></a></div>
            </article>
            <form className="glass contact-form" onSubmit={sendEmail}>
              <label><span>Name</span><input name="name" placeholder="Your name" required /></label>
              <label><span>Email</span><input name="email" type="email" placeholder="you@company.com" required /></label>
              <label className="full"><span>Subject</span><input name="sub" placeholder="What would you like to discuss?" required /></label>
              <label className="full"><span>Message</span><textarea name="msg" rows="5" placeholder="Tell me a little about it..." required /></label>
              <button className="button primary full" disabled={sending}>{sending ? "Sending..." : "Send Message"} <FiSend /></button>
            </form>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
