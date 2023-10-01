import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft } from "react-feather";

export default function PraseedaAkkaTestimonial() {
  return (
    <section className="mx-auto mb-16">
      <div className="px-24 py-12">
        <Link href="/#recommendations">
          <ChevronLeft className="mb-12" />
        </Link>
        <h2 className="text-4xl">
          <span className="underline decoration-blue-200 decoration-4 underline-offset-[12px]">
            Sidharth
          </span>{" "}
          Philkhana
        </h2>
        <h3 className="text-2xl pt-6 opacity-40">
          Student, GITAM (Deemed to be University)
        </h3>
      </div>

      <div className="flex px-36">
        <div className="flex-shrink-0 h-[27rem] w-[22rem] relative">
          <div className="h-96 w-[22rem] bg-[#eaf9fa] dark:bg-[#2d3030] absolute z-20 right-6 top-6 rounded-[0.325rem]"></div>
          <div className="h-96 w-[22rem] bg-[#f5fcfd] dark:opacity-10 absolute z-10 right-12 top-12 rounded-[0.325rem]"></div>
          <img
            src="https://psidh.vercel.app/_next/image?url=%2Fimages%2Fpfp.jpg&w=1080&q=100"
            className="h-96 w-[22rem] rounded-[0.325rem] object-cover z-30 absolute"
          />
        </div>
        <div className="flex flex-col shrink px-16 justify-center pb-12">
          <h3 className="text-lg font-semibold mb-8">
            From the onset of my university journey, Manas Malla has embodied an
            unparalleled source of inspiration.
          </h3>
          <p className="">
            A passionate creative designer and a proficient Android Developer,
            he effortlessly excels in every field he ventures into. I vividly
            recall in the first week, we participated in a quiz competition and
            Manas was electric in his speed and accuracy. As we were classmates,
            I had an opportunity to interact with him on a daily basis.
            <br />
            <br />
            Since my inaugural day at university, Manas Malla has been the
            epitome of a tech virtuoso, an exceptionally down-to-earth, active,
            and dynamic personality. His mastery in tech is unparalleled,
            seamlessly navigating different realms of the digital landscape.
            Manas not only excels in tech but also assists those in need. His
            endeavors have left an indelible mark on our tech-centric student
            community. Under his influential guidance, my learning path has been
            profoundly shaped, with invaluable insights and hands-on lessons
            that mirror the dynamic nature of the tech domain.
            <br />
            <br />
            Our shared enthusiasm for learning led us to meet in Google DevFest
            2022. As an attendee, I was amazed to see Manas's unwavering
            commitment to community contributions. His precision in
            volunteering, creating designs, inviting guests, logistic support,
            and creative prowess reached its peak, and he also was an event
            speaker for Android, offering a technical skill set that is truly
            commendable.
            <br />
            <br />
            In the realm of peer learning, Manas stands out as the embodiment of
            patience, approachable, and down-to-earth. He readily extends his
            help to anyone with shared interests. I learned Web Development and
            Tailwind CSS framework through his guidance. He always encourages me
            to get out of my comfort zone and try challenging stuff. When I had
            a good grip on React, it was Manas who strongly suggested me to deep
            dive into NextJs - which he gained expertise in. He also taught me
            concepts of User Experience and how a developer’s thought process
            should be. From Freeform to Figma, Manas was the driving force
            behind me for mastering these design tools.
            <br />
            <br />
            Manas is more than a mentor; he's an icon of inspiration, instilling
            a passion for tech and a commitment for community. I wish all the
            very best to Manas for all his future goals and aspirations.
          </p>
        </div>
      </div>
    </section>
  );
}
