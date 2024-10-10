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
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
        "
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative
        "
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
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
        <Layout className="pt-16">
          <h1 className="!text-8xl font-bold text-center mb-16">
            Dedication In Action!
          </h1>
          <div className="grid grid-cols-12 gap-24 gap-y-32">
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
            <div className="col-span-6">
              <Project
                type="School Project"
                title="Artemis: A Take on Trello"
                img={artemis}
                link="/"
                github="https://github.com/CSC-648-SFSU/csc648-spring22-04-team02"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="School Project"
                title="Alien Invasion: create a game in javascript without using any libraries."
                img={alien}
                link="/"
                github="https://github.com/CSC317-Spring2021/csc317-javascript-individual-game-assignment-BeeSeeWhy"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="School Project"
                title="Duck Hunter"
                summary="The assignment was create a storefront in javascript wihtout using any libraries"
                img={ducks}
                link="/"
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
