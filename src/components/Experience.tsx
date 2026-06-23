"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-9 first:mt-0 last:mb-0 w-[88%] sm:w-[85%] lg:w-[70%] xl:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-lg sm:text-xl lg:text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 text-sm sm:text-base">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-sm sm:text-base">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-24 sm:my-32 md:my-40 lg:my-64">
      <h2 className="font-bold text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl mb-12 sm:mb-20 md:mb-24 lg:mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-full sm:w-[92%] lg:w-[80%] xl:w-[75%] mx-auto relative">
        <div className="absolute left-4 sm:left-6 lg:left-9 top-0 w-[3px] sm:w-[4px] h-full bg-dark/50 origin-top" />

        <ul className="w-full flex flex-col items-start justify-between ml-2 sm:ml-4">
          <Details
            position="Front End Software Engineer"
            company="Nayak.ai"
            companyLink="https://www.nayak.ai"
            time="2025-Present"
            address="San Francisco, CA"
            work="Vite, React, Typescript, SCSS, PostgreSQL, Node.js. Modernized 100% of the primary app interface. Solved the Drowning in Renders issue. Adding new features to the web application. Building new sections of the application. Worked on company website using Webflow. Created and updated email templates in SendGrid."
          />
          <Details
            position="Software Engineer/Technical Project Manager"
            company="Support SFUSD"
            companyLink="https://www.supportsfschools.org/"
            time="2023-Present"
            address="San Francisco, CA"
            work="Worked on refactoring MapBox style. Pair programmed search component. Developed 
                    documentation for onboarding new engineers. Created processes for designer to engineering 
                    hand-off."
          />
          <Details
            position="Billing Department Manager "
            company="New Connections Communications, LLC"
            companyLink="http://connectcom.com/"
            time="2001-2019"
            address="Berkley, CA"
            work="Managed small team of billing associates. Prepared monthly revenue spreadsheets. 
            Ran billing cycles for several answering services. Trained several employees on billing
            associates practices. Customer service for incoming and outgoing calls."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
