import { Suspense, lazy, useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  FiArrowDownRight,
  FiBarChart2,
  FiBriefcase,
  FiCpu,
  FiExternalLink,
  FiFileText,
  FiMail,
  FiPhone,
  FiTrendingUp,
} from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  aboutHighlights,
  contactHighlights,
  expertise,
  floatingKeywords,
  heroStats,
  personalInfo,
  projects,
  resumeLinks,
  seo,
  skills,
  socialLinks,
  timeline,
} from "./data/portfolioData";

const HeroCanvas = lazy(() => import("./components/HeroCanvas"));

const sectionMotion = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const aboutHighlightIcons = [FiFileText, FiBriefcase, FiCpu];
const statIcons = [FiBarChart2, FiTrendingUp, FiCpu];

function App() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.2,
  });
  const heroY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.3]);

  useEffect(() => {
    document.title = seo.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", seo.description);
    }
  }, []);

  useEffect(() => {
    if (!heroRef.current || prefersReducedMotion) {
      return undefined;
    }

    let ctx;

    import("gsap").then(({ default: gsap }) => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(
          ".hero-copy > *",
          { y: 48, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 },
        ).fromTo(
          ".hero-stat-card",
          { y: 30, opacity: 0, rotateX: -18 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.7, stagger: 0.12 },
          "-=0.5",
        );
      }, heroRef);
    });

    return () => ctx?.revert();
  }, [prefersReducedMotion]);

  const featuredOrbitNames = useMemo(
    () => ["Python", "React", "JavaScript", "Data Analysis", "EDA", "Power BI", "SQL", "Java", "Spring Boot", "Pandas"],
    [],
  );

  const orbitSkills = useMemo(() => {
    const featured = skills.filter((skill) => featuredOrbitNames.includes(skill.name));

    return featured.map((skill, index) => {
      const radius = skill.orbit === "outer" ? 39 : 25;
      const angle = (360 / featured.length) * index;

      return { ...skill, radius, angle };
    });
  }, [featuredOrbitNames]);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("service_myr3z7", "template_livmhmm", formRef.current, {
        publicKey: "oshirECPffq6jKUQz",
      })
      .then(
        () => {
          Swal.fire({
            title: "Sent!",
            text: "Your message has been sent successfully.",
            icon: "success",
            background: "#071317",
            color: "#f4ffff",
            confirmButtonColor: "#28cccc",
          });
          event.target.reset();
        },
        () => {
          Swal.fire({
            title: "Something went wrong",
            text: "The message could not be sent right now. Please try again shortly.",
            icon: "error",
            background: "#071317",
            color: "#f4ffff",
            confirmButtonColor: "#28cccc",
          });
        },
      );
  };

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />
      <div className="noise-overlay" />
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <Navbar />

      <main>
        <section id="home" className="hero-section section-block" ref={heroRef}>
          <motion.div className="hero-layer" style={{ y: heroY, opacity: heroOpacity }}>
            <div className="hero-grid">
              <div className="hero-copy glass-panel">
                <span className="eyebrow">{personalInfo.greeting}</span>
                <h1>{personalInfo.name}</h1>
                <p className="hero-tagline">{personalInfo.tagline}</p>
                <p className="hero-description">{personalInfo.description}</p>
                <div className="hero-actions">
                  <a className="primary-button" href={personalInfo.resume} download>
                    Quick CV
                    <FiArrowDownRight />
                  </a>
                  <a className="secondary-button" href="#projects">
                    View Projects
                  </a>
                </div>
                <div className="resume-downloads">
                  {resumeLinks.map((item) => (
                    <a key={item.label} className="resume-chip" href={item.href} download>
                      <FiFileText />
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="social-strip">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>

              <div className="hero-visual">
                <Suspense fallback={<div className="hero-canvas-shell hero-canvas-fallback" />}>
                  <HeroCanvas />
                </Suspense>
                <div className="keyword-cloud">
                  {floatingKeywords.map((keyword, index) => (
                    <motion.span
                      key={keyword}
                      className="keyword-pill"
                      animate={
                        prefersReducedMotion
                          ? {}
                          : { y: [0, index % 2 === 0 ? -10 : 10, 0], rotate: [0, -2, 2, 0] }
                      }
                      transition={{
                        duration: 7 + index * 0.35,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      {keyword}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-stats">
              {heroStats.map((item, index) => {
                const Icon = statIcons[index] || FiBarChart2;

                return (
                  <motion.article
                    className="hero-stat-card glass-panel"
                    key={item.label}
                    whileHover={prefersReducedMotion ? {} : { y: -8, rotateX: 8, rotateY: -8 }}
                  >
                    <div className="stat-icon">
                      <Icon />
                    </div>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
        >
          <div className="section-heading">
            <span>About Me</span>
            <h2>Preserving the original identity, elevated with depth and motion.</h2>
          </div>
          <div className="about-layout">
            <motion.article
              className="about-card glass-panel profile-card"
              whileHover={prefersReducedMotion ? {} : { rotateY: -10, rotateX: 8, y: -10 }}
            >
              <div className="profile-glow" />
              <img src={personalInfo.image} alt={personalInfo.name} />
              <div>
                <p className="small-label">Profile Showcase</p>
                <h3>{personalInfo.name}</h3>
                <p>{personalInfo.tagline}</p>
              </div>
            </motion.article>

            <div className="about-copy">
              <p>
                Hello! I&apos;m <b>{personalInfo.name}</b>, an analytical and detail-oriented builder working
                across data analytics, AI/ML, backend engineering, and modern web development. I enjoy
                turning raw ideas into polished digital experiences that feel both practical and visually
                memorable.
              </p>
              <p>
                My recent work includes analyzing large structured datasets, automating reporting workflows,
                building Power BI and Streamlit dashboards, training ML models, and creating Spring Boot
                APIs. The result is a portfolio personality that stays trustworthy and professional while
                still feeling creative and premium.
              </p>
              <ul className="about-highlights">
                {aboutHighlights.map((item, index) => {
                  const Icon = aboutHighlightIcons[index] || FiFileText;

                  return (
                    <li key={item}>
                      <Icon />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="expertise-grid">
                {expertise.map(({ title, text, icon: Icon }) => (
                  <article key={title} className="expertise-card glass-panel">
                    <div className="icon-badge">
                      <Icon />
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionMotion}
        >
          <div className="section-heading">
            <span>Skills</span>
            <h2>Orbiting capabilities presented as a polished 3D-inspired control room.</h2>
          </div>
          <div className="skills-layout">
            <div className="skill-orbit glass-panel">
              <div className="core-node">
                <span>MJ</span>
                <small>Creative Tech Stack</small>
              </div>
              <div className="orbit orbit-outer" />
              <div className="orbit orbit-inner" />
              {orbitSkills.map(({ name, icon: Icon, level, radius, angle }) => (
                <motion.div
                  key={name}
                  className={`skill-chip skill-chip-${level.toLowerCase()}`}
                  style={{
                    left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}% - 68px)`,
                    top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}% - 26px)`,
                  }}
                  animate={prefersReducedMotion ? {} : { y: [0, -8, 0], scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 4 + angle * 0.01,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Icon />
                  <span>{name}</span>
                </motion.div>
              ))}
            </div>

            <div className="skills-copy">
              {skills.map(({ name, level }) => (
                <div key={name} className="skill-row glass-panel">
                  <div>
                    <strong>{name}</strong>
                    <span>{level}</span>
                  </div>
                  <div className="skill-meter">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: level === "Advanced" ? "88%" : "72%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
        >
          <div className="section-heading">
            <span>Projects</span>
            <h2>Interactive work cards with layered depth, recruiter-friendly clarity, and premium hover motion.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="project-card glass-panel"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                whileHover={prefersReducedMotion ? {} : { rotateX: 10, rotateY: -10, y: -12 }}
              >
                <div className="project-topline">
                  <span>{project.category}</span>
                  <FiExternalLink />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <span>Live Experience</span>
                  <FiArrowDownRight />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionMotion}
        >
          <div className="section-heading">
            <span>Experience</span>
            <h2>A cinematic journey through the evolution of web, data, and product-building focus.</h2>
          </div>
          <div className="timeline-shell">
            <div className="timeline-line" />
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                className={`timeline-card glass-panel ${index % 2 === 0 ? "left" : "right"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
              >
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="section-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
        >
          <div className="section-heading">
            <span>Contact</span>
            <h2>A glowing final section designed to convert attention into conversations.</h2>
          </div>
          <div className="contact-layout">
            <article className="contact-card glass-panel">
              <p className="small-label">Let&apos;s Build Something Excellent</p>
              <h3>Open for opportunities that value craft, clarity, and modern execution.</h3>
              <ul className="contact-highlights">
                {contactHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="contact-meta">
                <span>
                  <MdOutlineLocationOn />
                  {personalInfo.location}
                </span>
                <a href={`mailto:${personalInfo.email}`}>
                  <FiMail />
                  {personalInfo.email}
                </a>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}>
                  <FiPhone />
                  {personalInfo.phone}
                </a>
              </div>
            </article>

            <form ref={formRef} className="contact-form glass-panel" onSubmit={sendEmail}>
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                <span>Phone</span>
                <input type="text" name="phone" placeholder="+91" required />
              </label>
              <label>
                <span>Subject</span>
                <input type="text" name="sub" placeholder="Project, role, or collaboration" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="msg" rows="5" placeholder="Tell me about the opportunity..." required />
              </label>
              <button className="primary-button submit-button" type="submit">
                Send Message
                <FiArrowDownRight />
              </button>
            </form>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
