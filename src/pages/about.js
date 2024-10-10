import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/about.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title>Brandon Cruz-Youll | About Page</title>
        <meta name="description" content="about Brandon Cruz-Youll" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <h1 className="!text-8xl font-bold text-center mb-16">
            Passion Fuels Purpose!
          </h1>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hello! I’m Brandon Cruz-Youll, a dedicated front-end developer
                with a fervent passion for continuous learning and growth. With
                a year of hands-on experience in the industry, I specialize in
                transforming designers' creative visions into interactive,
                user-friendly web experiences. My expertise lies in crafting
                elegant and efficient code that enhances the usability and
                aesthetics of websites.
              </p>
              <p className="my-4 font-medium">
                I thrive on the challenge of solving complex problems and
                exploring new technologies to stay ahead of industry trends.
                Whether it's optimizing performance, improving accessibility, or
                experimenting with the latest frameworks, I am committed to
                delivering high-quality solutions that exceed expectations. My
                goal is to blend technical skill with creative insight to create
                seamless, engaging digital experiences that leave a lasting
                impression. Let’s collaborate to bring your next project to
                life!
              </p>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between"></div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8
                    "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />

              <Image
                src={profilePic}
                alt="Brandon Cruz-Youll"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
