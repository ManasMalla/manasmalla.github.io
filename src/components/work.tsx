"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowRight } from "react-feather";

export function WorkSection() {
  const router = useRouter();
  return (
    <section id="work" className="mb-16">
      <h2 className="text-4xl py-12 ">
        The {}
        <span className="underline decoration-blue-200 decoration-2 underline-offset-[12px]">
          work
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
          <h4 className="text-2xl my-6 font-semibold">ASquare Gokarting</h4>
          <p className="opacity-60">
            An adventurous theme park with a play arena, drive-in, and race
            track that is considered to be India&apos;s longest track. Come and
            test your skills on this route with your friends and family.
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
            Aham Svastha motivates you to be fit and healthy in the busy-driven
            world by retreating to the golden-olden traditions: Yoga, Eating
            healthy food, Exercising, Drinking adequate water, Sufficient Sleep!
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
            Bringing awareness to people about the precautions, preventions and
            things to protect ourselves from COVID19 as well as preserve and
            enrich our health in a playful and interactive way for everyone.
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
  );
}
