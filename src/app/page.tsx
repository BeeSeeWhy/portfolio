import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profilealt.png";
import aboutPic from "../../public/images/profile/about.jpeg";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { GithubIcon } from "@/components/Icons";
import type { StaticImageData } from "next/image";
import support from "../../public/images/projects/support_sfusd.png";
import artemis from "../../public/images/projects/artemis.png";
import alien from "../../public/images/projects/alieninvasion.png";
import ducks from "../../public/images/projects/duckhunter.png";

const inter = Inter({ subsets: ["latin"] });

type FeaturedProjectProps = {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link?: string;
  github: string;
};

type ProjectProps = {
  type: string;
  title: string;
  img: StaticImageData;
  link?: string;
  github: string;
};

const FeaturedProject = ({ type, title, summary, img, link, github }: FeaturedProjectProps) => {
  const hasLiveLink = Boolean(link && link !== "/");

  return (
    <article
      className="w-full flex flex-col lg:flex-row items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 sm:p-8 lg:p-12 gap-6 lg:gap-0
        "
    >
      {hasLiveLink ? (
        <Link
          href={link!}
          target="_blank"
          className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
      ) : (
        <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
          <Image src={img} alt={title} className="w-full h-auto" />
        </div>
      )}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between lg:pl-6">
        <span className="text-primary font-medium text-base sm:text-lg lg:text-xl">{type}</span>
        {hasLiveLink ? (
          <Link href={link!} target="_blank">
            <h2 className="my-2 w-full text-left text-2xl sm:text-3xl lg:text-4xl font-bold">{title}</h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-2xl sm:text-3xl lg:text-4xl font-bold">{title}</h2>
        )}
        <p className="my-2 font-medium text-dark text-sm sm:text-base lg:text-lg">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          {hasLiveLink ? (
            <Link
              href={link!}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-5 sm:px-6 text-sm sm:text-base lg:text-lg font-semibold"
            >
              Visit project
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }: ProjectProps) => {
  const hasLiveLink = Boolean(link && link !== "/");

  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative
        "
    >
      {hasLiveLink ? (
        <Link
          href={link!}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
      ) : (
        <div className="w-full overflow-hidden rounded-lg">
          <Image src={img} alt={title} className="w-full h-auto" />
        </div>
      )}
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-base sm:text-lg lg:text-xl">{type}</span>
        {hasLiveLink ? (
          <Link href={link!} target="_blank">
            <h2 className="my-2 w-full text-left text-2xl sm:text-3xl font-bold">{title}</h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-2xl sm:text-3xl font-bold">{title}</h2>
        )}
        <div className="w-full mt-2 flex items-center justify-between">
          {hasLiveLink ? (
            <Link
              href={link!}
              target="_blank"
              className="text-base sm:text-lg font-semibold underline"
            >
              Visit
            </Link>
          ) : <span />}
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center text-dark w-full min-h-screen">
      <Layout className="pt-4 sm:pt-6 md:pt-10 lg:pt-0">
        <section id="home" className="scroll-mt-24">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-12">
            <div className="w-full lg:w-1/2 max-w-xl lg:max-w-none">
              <Image src={profilePic} alt="Brandon" className="w-full h-auto" priority loading="eager" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start self-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold text-center lg:text-left leading-tight">
                Frontend Engineering with an Operator&apos;s Mindset.
              </h1>
              <p className="my-4 text-sm sm:text-base lg:text-lg font-medium text-center lg:text-left">
                I&apos;m a Software Engineer at Nayak.ai with nearly two decades of experience leading operations and billing teams. I don&apos;t just build user interfaces; I build reliable, performant tools designed to solve bottlenecks. My background in high-stakes triage means I approach every React component with a focus on reliability, efficiency, and scale.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start self-center lg:self-start mt-2 gap-3 sm:gap-4">
                <Link
                  href="/Brandon_Cruz-Youll_Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-5 sm:px-6
                rounded-lg text-base sm:text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                "
                  download
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:brandon@beeseewhy.com"
                  target="_blank"
                  className="text-base sm:text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold text-center mb-10 sm:mb-14 md:mb-16">
            Dedication In Action!
          </h1>
          <div className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-16 gap-y-12 sm:gap-y-16 lg:gap-y-24">
            <div className="col-span-12">
              <FeaturedProject
                type="Volunteer Project"
                title="Support SF Schools"
                summary="A website to connect San Francisco residents with their local schools' opportunities for volunteering and donating."
                img={support}
                link="https://supportsfschools.org"
                github="https://github.com/sfbrigade/support-sfusd"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="School Project"
                title="Alien Invasion"
                summary="The assignment was create a game in javascript without using any libraries."
                img={alien}
                link="https://javascript-alien-invasion.vercel.app/"
                github="https://github.com/CSC317-Spring2021/csc317-javascript-individual-game-assignment-BeeSeeWhy"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <Project
                type="School Project"
                title="Artemis: A Take on Trello"
                img={artemis}
                github="https://github.com/CSC-648-SFSU/csc648-spring22-04-team02"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <Project
                type="School Project"
                title="Duck Hunter: create a storefront in vanilla javascript"
                img={ducks}
                github="https://github.com/CSC317-Spring2021/csc317-group-html-storefront-BeeSeeWhy"
              />
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold text-center mb-10 sm:mb-14 md:mb-16">
            Passion Fuels Purpose!
          </h1>
          <div className="grid w-full grid-cols-1 md:grid-cols-8 gap-10 md:gap-12 lg:gap-16">
            <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start justify-start order-2 md:order-1">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium text-sm sm:text-base lg:text-lg">
                Hello! I&apos;m Brandon Cruz-Youll, a dedicated front-end
                developer with a fervent passion for continuous learning and
                growth. I spent 18 years in medical triage and billing operations—a world where there is no room for lag, ambiguity, or broken workflows. That 'Operator’s Mindset' is what I bring to the browser.

My specialty is building frontend infrastructure that solves real-world bottlenecks. Whether it's optimizing React renders for real-time AI tools at Nayak.ai or leading a framework migration for SF Civic Tech, I build with a focus on reliability, performance, and scale. I don't just ship code; I build tools that work when the stakes are high.
              </p>
              <p className="my-4 font-medium text-sm sm:text-base lg:text-lg">
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
            </div>
            <div className="hidden lg:block lg:col-span-1" />
            <div
              className="md:col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-4 sm:p-6 lg:p-8 order-1 md:order-2
                    "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={aboutPic}
                alt="Brandon Cruz-Youll"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </section>
      </Layout>
    </main>
  );
}
