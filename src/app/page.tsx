import Layout from "@/components/Layout";
import Image from "next/image";
import heroPhoto from "../../public/images/profile/about.jpeg";
import Link from "next/link";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

type ProjectEntry = {
  index: string;
  title: string;
  desc: string;
  tag: string;
  link?: string;
  github: string;
};

const PROJECTS: ProjectEntry[] = [
  {
    index: "01",
    title: "Support SF Schools",
    desc: "A website to connect San Francisco residents with their local schools' opportunities for volunteering and donating.",
    tag: "Volunteer Project",
    link: "https://supportsfschools.org",
    github: "https://github.com/sfbrigade/support-sfusd",
  },
  {
    index: "02",
    title: "Alien Invasion",
    desc: "Updated pure JavaScript project to modern React, TypeScript and Vite. A simple arcade game where you shoot aliens and avoid their attacks.",
    tag: "Updated Project",
    link: "https://javascript-alien-invasion.vercel.app/",
    github: "https://github.com/CSC317-Spring2021/csc317-javascript-individual-game-assignment-BeeSeeWhy",
  },
  {
    index: "03",
    title: "Artemis",
    desc: "A Take on Trello",
    tag: "School Project",
    github: "https://github.com/CSC-648-SFSU/csc648-spring22-04-team02",
  },
  {
    index: "04",
    title: "Duck Hunter",
    desc: "A storefront in vanilla javascript",
    tag: "School Project",
    github: "https://github.com/CSC317-Spring2021/csc317-group-html-storefront-BeeSeeWhy",
  },
];

const ProjectRow = ({ index, title, desc, tag, link, github }: ProjectEntry) => {
  const hasLiveLink = Boolean(link);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[56px_1fr_auto] gap-4 sm:gap-6 sm:items-center py-6 border-b border-line hover:bg-paper/[0.02] transition-colors">
      <span className="hidden sm:block font-mono text-[13px] text-mist-light">{index}</span>
      <div>
        <h3 className="font-display text-lg sm:text-xl font-semibold text-paper mb-1.5">
          {hasLiveLink ? (
            <Link href={link!} target="_blank" className="hover:text-amber transition-colors">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className="text-sm text-mist max-w-lg mb-2.5">{desc}</p>
        <span className="font-mono text-[10.5px] tracking-wide text-mist-light border border-line-strong px-2 py-0.5 rounded-sm">
          {tag}
        </span>
      </div>
      <div className="flex sm:flex-col items-start sm:items-end gap-2 font-mono text-xs">
        <span
          className={`text-[10px] tracking-wide uppercase px-2.5 py-0.5 rounded-full ${
            hasLiveLink ? "bg-amber/10 text-amber" : "bg-mist/10 text-mist"
          }`}
        >
          {hasLiveLink ? "Live" : "Repository"}
        </span>
        {hasLiveLink && (
          <Link href={link!} target="_blank" className="text-mist hover:text-amber transition-colors">
            Visit &rarr;
          </Link>
        )}
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} source code on GitHub`}
          className="text-mist hover:text-amber transition-colors"
        >
          GitHub &rarr;
        </Link>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <Layout>
        <section id="home" className="pt-4 sm:pt-8 lg:pt-12 pb-16 sm:pb-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-6 font-mono text-xs tracking-widest uppercase text-amber">
                <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                Full Stack Engineer &middot; San Francisco
              </div>
              <h1 className="font-display font-semibold text-[34px] sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-paper mb-6">
                Full Stack Engineering with an <span className="text-amber">Operator&apos;s Mindset.</span>
              </h1>
              <p className="text-[17px] text-mist max-w-xl mb-9 leading-relaxed">
                I&apos;m a Software Engineer at{" "}
                <strong className="text-paper font-medium">Nayak.ai</strong>{" "}
                with nearly two decades of experience leading operations and billing teams. I don&apos;t just build user interfaces; I build reliable, performant tools designed to solve bottlenecks. My background in high-stakes triage means I approach every React component with a focus on reliability, efficiency, and scale.
              </p>
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/Cruz-Youll_Brandon_Resume.pdf"
                  target="_blank"
                  className="font-mono text-[13px] tracking-wide px-6 py-3.5 rounded-sm bg-amber text-ink font-medium hover:bg-amber-light hover:-translate-y-px transition-all"
                  download
                >
                  Resume
                </Link>
                <Link
                  href="mailto:brandon@beeseewhy.com"
                  className="font-mono text-[13px] tracking-wide px-6 py-3.5 rounded-sm border border-line-strong text-paper hover:border-amber hover:text-amber transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="w-full bg-ink-2 border border-line-strong rounded overflow-hidden">
              <div className="w-full aspect-[4/5] relative border-b border-line-strong">
                <Image
                  src={heroPhoto}
                  alt="Brandon Cruz-Youll"
                  fill
                  priority
                  className="object-cover object-[center_15%] grayscale-[0.15] contrast-[1.04]"
                  sizes="(min-width: 1024px) 33vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/55 pointer-events-none" />
              </div>
              <div className="flex justify-between items-center px-5 py-3.5 border-b border-line font-mono text-[11px] tracking-widest uppercase text-mist">
                <span>Profile</span>
                <span>v2026.08</span>
              </div>
              {[
                ["Role", "Frontend Engineer @ Nayak.ai"],
                ["Background", "18 yrs ops & billing"],
                ["Stack", "React · TypeScript · Next.js"],
                ["Also uses", "Node.js · SCSS · TailwindCSS · Figma"],
                ["Based in", "San Francisco, CA"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between items-baseline gap-4 px-5 py-4 border-b border-line last:border-none"
                >
                  <span className="font-mono text-[11px] text-mist-light tracking-wide uppercase whitespace-nowrap">
                    {label}
                  </span>
                  <span className="font-mono text-[13px] text-paper text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 py-16 sm:py-20 border-t border-line">
          <div className="flex justify-between items-end mb-12 border-b border-line pb-6">
            <div>
              <div className="font-mono text-xs text-amber tracking-widest uppercase mb-2.5">Selected Work</div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">Projects</h2>
            </div>
            <div className="font-mono text-xs text-mist-light">04 entries</div>
          </div>

          <div>
            {PROJECTS.map((project) => (
              <ProjectRow key={project.index} {...project} />
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-16 sm:py-20 border-t border-line">
          <div className="mb-12 border-b border-line pb-6">
            <div className="font-mono text-xs text-amber tracking-widest uppercase mb-2.5">Background</div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">About</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-base text-mist leading-relaxed mb-5">
                Hello! I&apos;m Brandon Cruz-Youll, a dedicated front-end
                developer with a fervent passion for continuous learning and
                growth. I spent 18 years in medical triage and billing operations—a world where there is no room for lag, ambiguity, or broken workflows. That &apos;Operator&rsquo;s Mindset&apos; is what I bring to the browser.

My specialty is building frontend infrastructure that solves real-world bottlenecks. Whether it&apos;s optimizing React renders for real-time AI tools at Nayak.ai or leading a framework migration for SF Civic Tech, I build with a focus on reliability, performance, and scale. I don&apos;t just ship code; I build tools that work when the stakes are high.
              </p>
              <p className="text-base text-mist leading-relaxed mb-5">
                I thrive on the challenge of solving complex problems and
                exploring new technologies to stay ahead of industry trends.
                Whether it&apos;s optimizing performance, improving
                accessibility, or experimenting with the latest frameworks, I am
                committed to delivering high-quality solutions that exceed
                expectations. My goal is to blend technical skill with creative
                insight to create seamless, engaging digital experiences that
                leave a lasting impression. Let&apos;s collaborate to bring your
                next project to life!
              </p>
              <Skills />
            </div>

            <Experience />
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20 sm:py-24 text-center border-t border-line">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper mb-5">Contact</h2>
          <p className="text-mist mb-9">Open to conversations about frontend roles and collaborations.</p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="mailto:brandon@beeseewhy.com"
              className="font-mono text-[13px] tracking-wide px-6 py-3.5 rounded-sm bg-amber text-ink font-medium hover:bg-amber-light hover:-translate-y-px transition-all"
            >
              Say hello
            </Link>
            <Link
              href="https://www.linkedin.com/in/brandon-cruzyoull"
              target="_blank"
              className="font-mono text-[13px] tracking-wide px-6 py-3.5 rounded-sm border border-line-strong text-paper hover:border-amber hover:text-amber transition-colors"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </section>
      </Layout>
    </main>
  );
}
