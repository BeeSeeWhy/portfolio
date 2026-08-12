"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import {
  GithubIcon,
  LinkedInIcon,
} from "./Icons";
import { motion } from "framer-motion";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
  activeSection: string;
  onNavigate: (href: string, event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const CustomLink = ({ href, title, className = " ", activeSection, onNavigate }: CustomLinkProps) => {
  const isActive = activeSection === href;

  return (
    <Link
      href={href}
      onClick={(event) => onNavigate(href, event)}
      className={`${className} relative group text-mist hover:text-paper transition-colors duration-200`}
    >
      {title}
      <span
        className={`
            h-[1px] inline-block bg-amber
            absolute left-0 -bottom-1
            group-hover:w-full transition-[width] ease duration-300
            ${isActive ? "w-full" : "w-0"}
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = ["work", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    setActiveSection(href);
    section.scrollIntoView({ behavior: "smooth", block: "start" });

    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full overflow-visible px-6 py-4 sm:px-10 md:px-16 lg:px-24 xl:px-28 2xl:px-32 font-mono text-xs tracking-wide uppercase bg-ink/85 backdrop-blur-md border-b border-line">
      <div className="flex items-center justify-between gap-4 md:hidden">
        <nav className="flex items-center gap-3">
          <CustomLink href="#projects" title="Projects" activeSection={activeSection} onNavigate={handleNavClick} />
          <CustomLink href="#about" title="About" activeSection={activeSection} onNavigate={handleNavClick} />
          <CustomLink href="#contact" title="Contact" activeSection={activeSection} onNavigate={handleNavClick} />
        </nav>

        <Logo />

        <nav className="flex items-center justify-end gap-3">
          <motion.a
            href="https://github.com/BeeSeeWhy"
            target={"_blank"}
            rel="noopener noreferrer"
            aria-label="Visit Brandon Cruz-Youll's GitHub profile"
            title="GitHub"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 text-mist hover:text-amber transition-colors"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/brandon-cruzyoull"
            target={"_blank"}
            rel="noopener noreferrer"
            aria-label="Visit Brandon Cruz-Youll's LinkedIn profile"
            title="LinkedIn"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 text-mist hover:text-amber transition-colors"
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>

      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center justify-center">
          <CustomLink href="#projects" title="Projects" className="mr-8" activeSection={activeSection} onNavigate={handleNavClick} />
          <CustomLink href="#about" title="About" className="mx-8" activeSection={activeSection} onNavigate={handleNavClick} />
          <CustomLink href="#contact" title="Contact" className="mx-8" activeSection={activeSection} onNavigate={handleNavClick} />
        </nav>

        <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2">
          <Logo />
        </div>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/BeeSeeWhy"
            target={"_blank"}
            rel="noopener noreferrer"
            aria-label="Visit Brandon Cruz-Youll's GitHub profile"
            title="GitHub"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 mr-4 text-mist hover:text-amber transition-colors"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/brandon-cruzyoull"
            target={"_blank"}
            rel="noopener noreferrer"
            aria-label="Visit Brandon Cruz-Youll's LinkedIn profile"
            title="LinkedIn"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 ml-4 text-mist hover:text-amber transition-colors"
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
