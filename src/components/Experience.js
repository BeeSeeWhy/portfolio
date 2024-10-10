import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-9 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
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
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <div className="absolute left-9 top-0 w-[4px] h-full bg-dark/50 origin-top" />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Compass"
            companyLink="https://staging.compassiep.com/"
            time="2023-Present"
            address="San Francisco, CA"
            work="Pair programmed edit for student/staff. Refactored edit staff with modal.
             Worked on System Design components for Search and Input."
          />
          <Details
            position="Software Engineer/Technical Project Manager"
            company="Support SFUSD"
            companyLink="https://support-sfusd.vercel.app/"
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
