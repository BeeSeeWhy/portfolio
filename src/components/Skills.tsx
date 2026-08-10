const SKILLS = [
  "HTML",
  "CSS / SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Figma",
  "MapBox",
  "Webflow",
  "SendGrid",
];

const Skills = () => {
  return (
    <div className="mt-8">
      <div className="font-mono text-[11px] text-mist-light tracking-widest uppercase mb-3.5">
        Tools &amp; Technologies
      </div>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs text-paper bg-ink-2 border border-line-strong px-3 py-1.5 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
