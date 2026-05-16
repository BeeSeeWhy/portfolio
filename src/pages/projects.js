import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import support from "../../public/images/projects/support_sfusd.png";
import artemis from "../../public/images/projects/artemis.png";
import alien from "../../public/images/projects/alieninvasion.png";
import ducks from "../../public/images/projects/duckhunter.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  const hasLiveLink = Boolean(link && link !== "/");

  return (
    <article
      className="w-full flex flex-col lg:flex-row items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 sm:p-8 lg:p-12 gap-6 lg:gap-0
        "
    >
      {hasLiveLink ? (
        <Link
          href={link}
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
          <Link href={link} target="_blank">
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
              href={link}
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

const Project = ({ type, title, img, link, github }) => {
  const hasLiveLink = Boolean(link && link !== "/");

  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative
        "
    >
      {hasLiveLink ? (
        <Link
          href={link}
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
          <Link href={link} target="_blank">
            <h2 className="my-2 w-full text-left text-2xl sm:text-3xl font-bold">{title}</h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-2xl sm:text-3xl font-bold">{title}</h2>
        )}
        <div className="w-full mt-2 flex items-center justify-between">
          {hasLiveLink ? (
            <Link
              href={link}
              target="_blank"
              className="text-base sm:text-lg font-semibold underline"
            >
              Visit
            </Link>
          ) : <span />}
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Brandon Cruz-Youll | Projects Page</title>
        <meta name="description" content="Projects By Brandon Cruz-Youll" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-10 sm:pt-12 md:pt-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold text-center mb-10 sm:mb-14 md:mb-16">
            Dedication In Action!
          </h1>
          <div className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-16 gap-y-12 sm:gap-y-16 lg:gap-y-24">
            <div className="col-span-12">
              <FeaturedProject
                type="Volunteer Project"
                title="Support SFUSD"
                summary="A website to connect San Francisco residents with their local schools' opportunities for volunteering and donating."
                img={support}
                link="https://supportsfschools.org"
                github="https://github.com/sfbrigade/support-sfusd"
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
                title="Alien Invasion: create a game in javascript without using any libraries."
                img={alien}
                link="https://javascript-alien-invasion.vercel.app/"
                github="https://github.com/CSC317-Spring2021/csc317-javascript-individual-game-assignment-BeeSeeWhy"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="School Project"
                title="Duck Hunter"
                summary="The assignment was create a storefront in javascript wihtout using any libraries"
                img={ducks}
                github="https://github.com/CSC317-Spring2021/csc317-group-html-storefront-BeeSeeWhy"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
