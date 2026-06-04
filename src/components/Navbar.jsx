import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FiMoon, FiSun } from "react-icons/fi";

import "./Navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ theme, onTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.32;

      let currentSection = sections[0].id;

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-shell">
        <a className="brand-mark" href="#home" aria-label="Go to top">
          MJ<span>.</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={activeSection === link.href.replace("#", "") ? "is-active" : ""}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="theme-button" type="button" onClick={onTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>

        <button className="menu-button" type="button" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          <IoMdMenu />
        </button>
      </nav>

      <div className={`mobile-panel ${sidebarOpen ? "open" : ""}`}>
        <button className="menu-close" type="button" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
          <RxCross2 />
        </button>
        <button className="mobile-theme" type="button" onClick={onTheme}>
          {theme === "dark" ? <FiSun /> : <FiMoon />} {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={activeSection === link.href.replace("#", "") ? "is-active" : ""}
            onClick={() => setSidebarOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
