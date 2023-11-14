import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft } from "react-feather";

export default function AnjaliAkkaTestimonial() {
  return (
    <section className="mx-auto mb-16">
      <div className="px-24 py-12">
        <Link href="/#recommendations">
          <ChevronLeft className="mb-12" />
        </Link>
        <h2 className="text-4xl">
          <span className="underline decoration-blue-200 decoration-4 underline-offset-[12px]">
            Anjali
          </span>{" "}
          Kakarlapudi
        </h2>
        <h3 className="text-2xl pt-6 opacity-40">
          Android Lead, GDSC GVPCEW &apos;22
        </h3>
      </div>

      <div className="flex px-36">
        <div className="flex-shrink-0 h-[27rem] w-[22rem] relative">
          <div className="h-96 w-[22rem] bg-[#eaf9fa] dark:bg-[#2d3030] absolute z-20 right-6 top-6 rounded-[0.325rem]"></div>
          <div className="h-96 w-[22rem] bg-[#f5fcfd] dark:opacity-10 absolute z-10 right-12 top-12 rounded-[0.325rem]"></div>
          <img
            src="/profile-pictures/anjali-kakarlapudi.jpg"
            className="h-96 w-[22rem] rounded-[0.325rem] object-cover z-30 absolute"
          />
        </div>
        <div className="flex flex-col shrink px-16 justify-center pb-12">
          <h3 className="text-lg font-semibold mb-8">
            A remarkable professional I&apos;ve ever met with an unparalleled
            dedication to work.
          </h3>
          <p className="">
            Although, he&apos;s younger than me, I always look up to him when it
            comes to the knowledge he has in technology. He is a true
            perfectionist.
            <br />
            <br />
            His meticulous attention to detail and unwavering commitment to
            excellence is commendable. Whether it&apos;s coding, designing, or
            managing projects, Manas Malla consistently strives for nothing
            short of perfection.
            <br />
            <br />
            As a core contributor of Google Developer Groups/Women Techmakers
            Vizag, Android Study Jams facilitator and Google Developer Student
            Clubs lead he is adept at prioritizing tasks, ensuring that each
            receives the attention and dedication required to deliver
            outstanding results.
            <br />
            <br />
            As an Android Study Jams facilitator, he has a unique way of
            elucidating complex ideas through relatable analogies, real-world
            examples, and practical demonstrations rather than relying solely on
            abstract theoretical explanations.
            <br />
            <br />
            Wishing him all the very best to shine in his future pursuits.
          </p>
        </div>
      </div>
    </section>
  );
}
