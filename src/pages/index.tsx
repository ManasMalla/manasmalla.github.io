import { CollaborationSection } from "@/components/collaboration";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import IAmRemarkable from "@/components/iamremarkable";
import { LetsTalkSection } from "@/components/lets_talk";
import RecommendationSection from "@/components/recommendations";
import Services from "@/components/services";
import { WorkSection } from "@/components/work";
import Head from "next/head";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "@next/font/google";
import { useRouter } from "next/router";
import { ArrowUpRight } from "react-feather";

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
          <IAmRemarkable />
          <WorkSection />
          <CollaborationSection />
          {/* <Services /> */}
          <LetsTalkSection />
          <RecommendationSection />
        </div>
      </main>
    </>
  );
}
