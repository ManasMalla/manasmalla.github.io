import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import IAmRemarkable from "@/components/iamremarkable";
import RecommendationSection from "@/components/recommendations";
import Services from "@/components/services";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  ChevronRight,
  FileText,
} from "react-feather";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Manas Malla</title>
        <meta
          name="description"
          content="The official portfolio of Manas Malla. designer. developer. student. wwdc20 scholar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Gallery />
        <div className="mx-8 lg:mx-28">
          <Services />
          <div className="my-20 overflow-y-visible h-[0rem] -translate-y-[16rem]">
            <div className="relative">
              <div className="bg-[#EAF9FA] dark:bg-opacity-10 w-3/4 lg:w-1/3 aspect-square absolute -right-16 lg:-right-36 rounded-full" />
              <div className="border-[#93CED2] dark:opacity-30 border-2 w-3/4 lg:w-1/3 aspect-square absolute -right-0 lg:-right-8 top-16 rounded-full border-dashed" />
              <img
                src="party-memoji.png"
                className="w-32 lg:w-48 right-28 lg:right-44 absolute"
              />
              <div className="right-8 lg:right-16 top-28 lg:top-48 absolute">
                <h3 className="text-lg lg:text-2xl text-[#6DA0A4]">Connect</h3>
                <h3 className="text-lg lg:text-2xl">Got a project</h3>
                <Link
                  href="/contact"
                  className="underline text-lg lg:text-2xl font-bold underline-offset-8"
                >
                  Lets Talk!
                </Link>
              </div>
            </div>
          </div>
          <RecommendationSection />

          <IAmRemarkable />
          <section id="work" className="mb-16">
            <h2 className="text-4xl py-12 ">
              The {}
              <span className="underline decoration-blue-200 decoration-2 underline-offset-[12px]">
                Work
              </span>
              {} I do
            </h2>
            <div className="flex lg:flex-row flex-col lg:mr-24 gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[765/856] bg-[#D2E3FC]/30 dark:bg-[#D2E3FC]/80 rounded-2xl">
                  <Image
                    alt="ASquare Gokarting"
                    width={765}
                    height={856}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/projects/asquaregokarting.png"
                    className="w-full h-full object-cover object-top rounded-2xl"
                  />
                </div>
                <h4 className="text-2xl my-6 font-semibold">
                  ASquare Gokarting
                </h4>
                <p className="opacity-60">
                  An adventurous theme park with a play arena, drive-in, and
                  race track that is considered to be India&apos;s longest
                  track. Come and test your skills on this route with your
                  friends and family.
                </p>
              </div>
              <div className="w-full lg:w-1/2 lg:mt-24">
                <div className="aspect-[765/856] bg-[#FEF7E0]/50 dark:bg-[#FEF7E0]/80 rounded-2xl">
                  <Image
                    alt="Nandikurshi"
                    width={765}
                    height={856}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/projects/nandikrushi-poster.png"
                    className="w-full h-full object-cover object-top rounded-2xl"
                  />
                </div>
                <h4 className="text-2xl my-6 font-semibold">Nandikrushi</h4>
                <p className="opacity-60">
                  Nandikrushi is an e-commerce platform where certified natural
                  farmers post their produce and consumers close to the farmer
                  location will buy them.
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:mr-24 gap-12 lg:gap-24 lg:-translate-y-8 mt-12 lg:mt-0">
              {/* <div className="w-full lg:w-1/2">
                <div className="aspect-[765/856] bg-[#FCE8E6]/30 dark:bg-[#FCE8E6]/80"></div>
                <h4 className="text-2xl my-6 font-semibold">BeCoronaReady</h4>
                <p className="opacity-60">
                  Bringing awareness to people about the precautions,
                  preventions and things to protect ourselves from COVID19 as
                  well as preserve and enrich our health in a playful and
                  interactive way for everyone.
                </p>
              </div> */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[765/856] bg-[#FCE8E6]/30 dark:bg-[#FCE8E6]/80 rounded-2xl">
                  <Image
                    alt="Aham Svastha"
                    width={765}
                    height={856}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/projects/aham-svastha-banner.png"
                    className="w-full h-full object-cover object-top rounded-2xl"
                  />
                </div>
                <h4 className="text-2xl my-6 font-semibold">Aham Svastha</h4>
                <p className="opacity-60">
                  Aham Svastha motivates you to be fit and healthy in the
                  busy-driven world by retreating to the golden-olden
                  traditions: Yoga, Eating healthy food, Exercising, Drinking
                  adequate water, Sufficient Sleep!
                </p>
              </div>
              {/* <div className="w-full lg:w-1/2 lg:mt-24">
                <div className="aspect-[765/856] bg-[#CEEAD6]/30 dark:bg-[#CEEAD6]/80"></div>
                <h4 className="text-2xl my-6 font-semibold">EcoFun</h4>
                <p className="opacity-60">
                  Solving climate change — Nourish our Blue & Green Planet by
                  helping us measure our carbon footprint, encourage us to grow
                  trees and be eco friendly.
                </p>
              </div> */}
              <div className="w-full lg:w-1/2 lg:mt-24">
                <div className="aspect-[765/856] bg-[#CEEAD6]/30 dark:bg-[#CEEAD6]/80 rounded-2xl">
                  <Image
                    alt="BeCoronaReady"
                    width={765}
                    height={856}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/projects/BeCoronaReady.png"
                    className="w-full h-full object-cover object-top rounded-2xl"
                  />
                </div>
                <h4 className="text-2xl my-6 font-semibold">BeCoronaReady</h4>
                <p className="opacity-60">
                  Bringing awareness to people about the precautions,
                  preventions and things to protect ourselves from COVID19 as
                  well as preserve and enrich our health in a playful and
                  interactive way for everyone.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                router.push("https://github.com/ManasMalla?tab=repositories");
              }}
              className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black font-light rounded-full lg:-translate-y-16 mt-4 lg:mt-0"
            >
              <span className="font-normal">@ManasMalla</span> on GitHub
            </button>
            <button
              onClick={() => {
                router.push("/work");
              }}
              className="px-4 lg:px-12 py-4 font-light rounded-full lg:-translate-y-16 mt-4 lg:mt-0"
            >
              <span className="font-normal inline-flex">View All</span>
              <ArrowRight className="inline-flex w-4 h-4 ml-4" />
            </button>
          </section>
          <div className="w-max mx-auto mb-24">
            <h2 className="text-2xl lg:text-5xl w-[18ch] font-semibold">
              Let me know if you want to talk about a potential collaboration.
              I&apos;m available for freelance work.
            </h2>
            <Link href="/contact" className="flex my-12">
              <h3 className="text-lg lg:text-3xl text-[#B06000]/40 dark:text-[#FDE293]/80 underline decoration-2 underline-offset-8">
                Let&apos;s build good things together
              </h3>{" "}
              <ArrowUpRight className="text-[#B06000]/30 w-8 h-8 ml-2 dark:text-[#FDE293]/80" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
