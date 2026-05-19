import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profilealt.png";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-4 sm:pt-6 md:pt-10 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-12">
          <div className="w-full lg:w-1/2 max-w-xl lg:max-w-none">
            <Image src={profilePic} alt="Brandon" className="w-full h-auto" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start self-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold text-center lg:text-left leading-tight">
              From Vision to Screen: Engineering Your Digital Future.
            </h1>
            <p className="my-4 text-sm sm:text-base lg:text-lg font-medium text-center lg:text-left">
              As a passionate and skilled front-end developer, I specialize in
              transforming ideas into dynamic and visually stunning web
              applications. My expertise in modern technologies like React.js
              allows me to build seamless, high-performance user interfaces
              that not only look great but also deliver exceptional user
              experiences. On this portfolio site, you&apos;ll find a curated
              selection of my latest projects that highlight my proficiency in
              crafting responsive designs, optimizing performance, and
              implementing interactive features. Dive into my work to see how
              I combine creativity with technical expertise to bring
              innovative concepts to life and solve complex challenges in web
              development.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start self-center lg:self-start mt-2 gap-3 sm:gap-4">
              <Link
                href="/Brandon_Cruz-Youll_Resume.pdf"
                target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-5 sm:px-6
              rounded-lg text-base sm:text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              "
                download={true}
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link
                href="mailto:brandon@beeseewhy.com"
                target={"_blank"}
                className="text-base sm:text-lg font-medium capitalize text-dark underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
