import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profilealt.png";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        {/*<!-- HTML Meta Tags -->*/}
        <title>BeeSeeWhy&apos;s Portfolio</title>
        <meta name="description" content="Brandon Cruz-Youll's Portfolio." />

        {/*<!-- Facebook Meta Tags -->*/}
        <meta property="og:url" content="https://www.beeseewhy.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Brandon Cruz-Youll's Portfolio" />
        <meta property="og:description" content="BCY = BeeSeeWhy." />
        <meta
          property="og:image"
          content="https://www.beeseewhy.dev/profilealt.png"
        />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="beeseewhy.dev" />
        <meta property="twitter:url" content="https://www.beeseewhy.dev/" />
        <meta name="twitter:title" content="Brandon Cruz-Youll's Portfolio" />
        <meta name="twitter:description" content="BCY = BeeSeeWhy." />
        <meta
          name="twitter:image"
          content="https://www.beeseewhy.dev/profilealt.png"
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="Brandon" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <h1 className="!text-8xl font-bold !text-left">
                From Vision to Screen: Engineering Your Digital Future.
              </h1>

              <p className="my-4 text-base font-medium">
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
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/Brandon_CruzYoull_Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:brandon.cruzyoull@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
