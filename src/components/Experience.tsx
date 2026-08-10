import Link from "next/link";

type LogItemProps = {
  time: string;
  role: string;
  org?: string;
  orgLink?: string;
  place?: string;
  work: string;
};

const LogItem = ({ time, role, org, orgLink, place, work }: LogItemProps) => {
  return (
    <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[96px_1fr] gap-4 sm:gap-5 pb-8 mb-8 border-b border-line last:border-none last:mb-0 last:pb-0">
      <span className="font-mono text-xs text-amber pt-0.5">{time}</span>
      <div>
        <h3 className="font-display text-base font-semibold text-paper mb-1">
          {role}
        </h3>
        {(org || place) && (
          <p className="text-[13px] text-mist-light mb-2">
            {org && orgLink ? (
              <Link href={orgLink} target="_blank" className="text-blue hover:underline">
                {org}
              </Link>
            ) : (
              org
            )}
            {org && place ? " · " : ""}
            {place}
          </p>
        )}
        <p className="text-[13.5px] text-mist leading-relaxed">{work}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="w-full">
      <LogItem
        time="2025—"
        role="Front End Software Engineer"
        org="Nayak.ai"
        orgLink="https://www.nayak.ai"
        place="San Francisco, CA"
        work="Vite, React, Typescript, SCSS, PostgreSQL, Node.js. Modernized 100% of the primary
               app interface. Solved the Drowning in Renders issue. Adding new features to the web
                application. Building new sections of the application. Worked on company website
                 using Webflow. Created and updated email templates in SendGrid."
      />
      <LogItem
        time="2024—"
        role="Technical Help Volunteer"
        org="San Francisco Public Library"
        orgLink="https://sfpl.org/locations/main-library/bridge-main-5th-floor"
        place="San Francisco, CA"
        work="Help patrons with personal technology questions and provide technical assistance."
      />
      <LogItem
        time="2023—"
        role="Software Engineer/Technical Project Manager"
        org="Support SFUSD"
        orgLink="https://www.supportsfschools.org/"
        place="San Francisco, CA"
        work="Worked on refactoring MapBox style. Pair programmed search component. Developed
                documentation for onboarding new engineers. Created processes for designer to engineering
                hand-off."
      />
      <LogItem
        time="2001—2019"
        role="Billing Department Manager"
        org="New Connections Communications, LLC"
        orgLink="http://connectcom.com/"
        place="Berkley, CA"
        work="Managed small team of billing associates. Prepared monthly revenue spreadsheets.
        Ran billing cycles for several answering services. Trained several employees on billing
        associates practices. Customer service for incoming and outgoing calls."
      />
      <LogItem
        time="2021—2022"
        role="Bachelor of Science in Computer Science"
        place="San Francisco State University"
        work="Relevant courses included Introduction to Web Development, Human Computer Interaction,
        Analysis of Algorithms, Introduction to Database Systems, Software Development, Software Engineering."
      />
      <LogItem
        time="2018—2020"
        role="Associates of Science in Computer Science"
        place="City College of San Francisco"
        work="Relevant courses included Software Engineering, Data Structures and Algorithms, Computer
        Architecture and Assembly, Beginning iPhone Programming, Discrete Mathematics, Calculus I & II."
      />
    </div>
  );
};

export default Experience;
