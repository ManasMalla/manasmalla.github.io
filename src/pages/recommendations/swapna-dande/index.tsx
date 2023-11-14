import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft } from "react-feather";

export default function SwapnaAkkaTestimonial() {
  return (
    <div>
      <Head>
        <title>Recommendation: Swapna Dande</title>
        <meta
          name="Recommendation"
          content="Check out this recommendation from Swapna Dande, Core Contributor at GDG Vizag."
          key="desc"
        />
      </Head>
      <section className="mx-auto mb-16">
        <div className="px-24 py-12">
          <Link href="/#recommendations">
            <ChevronLeft className="mb-12" />
          </Link>
          <h2 className="text-4xl">
            <span className="underline decoration-blue-200 decoration-4 underline-offset-[12px]">
              Swapna
            </span>{" "}
            Dande
          </h2>
          <h3 className="text-2xl pt-6 opacity-40">
            Core Contributor, GDG Vizag
          </h3>
        </div>

        <div className="flex px-36">
          <div className="flex-shrink-0 h-[27rem] w-[22rem] relative">
            <div className="h-96 w-[22rem] bg-[#eaf9fa] dark:bg-[#2d3030] absolute z-20 right-6 top-6 rounded-[0.325rem]"></div>
            <div className="h-96 w-[22rem] bg-[#f5fcfd] dark:opacity-10 absolute z-10 right-12 top-12 rounded-[0.325rem]"></div>
            <img
              src="https://media.licdn.com/dms/image/D5603AQGky0Gwuu1vdg/profile-displayphoto-shrink_800_800/0/1685290645408?e=1701907200&v=beta&t=kBW3wO0bWzo-r-DUXFcZjEM-wS5TK9CswjnxZRXVs-s"
              className="h-96 w-[22rem] rounded-[0.325rem] object-cover z-30 absolute"
            />
          </div>
          <div className="flex flex-col shrink px-16 justify-center pb-12">
            <h3 className="text-lg font-semibold mb-8">
              I&apos;ve had the privilege of knowing Manas Malla for a few years
              now, and he&apos;s an outstanding developer and an absolute hard
              worker.
            </h3>
            <p className="">
              Manas Malla is not only a dedicated professional but also a true
              enthusiast when it comes to technology and community building.
              <br />
              <br />
              What truly sets Manas apart is his role as an Android Study Jam
              facilitator and GDSC (Google Developer Student Clubs) lead at
              GITAM. He has played a pivotal role in nurturing the talents of
              the next generation of developers.
              <br />
              <br />
              His contributions to the GDG (Google Developer Groups) and WTM
              (Women Techmakers) Vizag community have left a profound impact on
              countless individuals, including myself.
              <br />
              <br />
              Manas&apos;s leadership in these communities goes beyond just
              being an organizer; he is a great supporter and mentor. His
              willingness to share his knowledge, offer guidance, and provide
              resources has been instrumental in the growth of our community. He
              believes in the power of collaboration and is always eager to
              bring people together to work on meaningful projects.
              <br />
              <br />
              In Manas&apos;s case, actions truly speak louder than words. If
              you&apos;re looking for a developer who&apos;s not only skilled
              but also a fantastic community leader, I highly recommend Manas
              Malla. He&apos;s an asset to any team or community lucky enough to
              have him.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
