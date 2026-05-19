"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({ href, title, className = " " }: CustomLinkProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
            h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${pathname === href ? "w-full" : "w-0"}
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="relative w-full px-6 py-4 sm:px-10 md:px-16 lg:px-24 xl:px-28 2xl:px-32 font-medium">
      <div className="flex items-center justify-between gap-4 md:hidden">
        <nav className="flex items-center gap-3 text-sm sm:text-base">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
        </nav>

        <Logo />

        <nav className="flex items-center justify-end gap-3">
          <motion.a
            href="https://github.com/BeeSeeWhy"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/brandon-cruzyoull"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5"
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>

      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center justify-center text-base">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>

        <div className="absolute left-1/2 top-3 -translate-x-1/2">
          <Logo />
        </div>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/BeeSeeWhy"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/brandon-cruzyoull"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
