import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

import "./Footer.css";
import { personalInfo } from "../data/portfolioData";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="footer-kicker">Portfolio</span>
          <h2>{personalInfo.name}</h2>
          <p>{personalInfo.tagline}</p>
        </div>

        <div className="footer-links">
          <span className="footer-kicker">Navigate</span>
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-contact">
          <span className="footer-kicker">Reach Out</span>
          <p>
            <MdOutlineLocationOn />
            {personalInfo.location}
          </p>
          <a href={`mailto:${personalInfo.email}`}>
            <FiMail />
            {personalInfo.email}
          </a>
          <div className="footer-socials">
            <a href="https://github.com/mohd-mustajab" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohd-mustajab-174374271/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">Copyright (c) {new Date().getFullYear()} Developed by MUSTAJAB</div>
    </footer>
  );
}

export default Footer;
