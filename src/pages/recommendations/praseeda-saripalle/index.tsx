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
            Praseeda
          </span>{" "}
          Saripalle
        </h2>
        <h3 className="text-2xl pt-6 opacity-40">Lead @ GDSC GVPCEW</h3>
      </div>

      <div className="flex px-36">
        <div className="flex-shrink-0 h-[27rem] w-[22rem] relative">
          <div className="h-96 w-[22rem] bg-[#eaf9fa] absolute -z-10 right-6 top-6 rounded-[0.325rem]"></div>
          <div className="h-96 w-[22rem] bg-[#f5fcfd] absolute -z-20 right-12 top-12 rounded-[0.325rem]"></div>
          <img
            src="https://media.licdn.com/dms/image/D5603AQEdL5JK-XDSfQ/profile-displayphoto-shrink_800_800/0/1669657636236?e=1687996800&v=beta&t=tDF-7Ae7JJVZtsSRreLdXINeyajfOfmxMLEFWLwvm3w"
            className="h-96 w-[22rem] rounded-[0.325rem] object-cover"
          />
        </div>
        <div className="flex flex-col shrink px-16 justify-center pb-12">
          <h3 className="text-lg font-semibold mb-8">
            There is always something that drives us and keeps us inspired.
          </h3>
          <p className="">
            If the driving factor itself is you, one could imagine how much
            energy is contained in you! And, the person who is so apt to
            resemble this analogy is Manas Malla. Being a creative designer by
            passion, and an Android Developer by profession, Manas has been
            highly excelling in any field given! Though I am ahead of him almost
            by 3 years of age, I never consider myself a senior to him when it
            comes to excelling in the amount of knowledge that he has in this
            field of development. Whenever I get to meet him, I always learn
            something new, he is just a library of knowledge, content, and
            information!
            <br />
            <br />
            Our common interest in Community Learning inspired us to join Google
            Developer Groups/WomenTechmakers Vizag. As a volunteer involved with
            the core activities, I keenly looked into the work that Manas has
            been effortlessly contributing to the community. He is just a
            perfectionist in anything he does. His design and creative skills
            are to the peaks. And lot more to learn from him technically!
            <br />
            <br />
            As the famous saying goes, &quot;Peer-Pressure is Poisonous,
            Peer-Learning is Precious&quot;, Manas has always been that person
            who is anytime approachable to anyone. He is so down to earth, he is
            always ever-ready to help his peers or whoever approaches him with a
            similar interest. His passion for teaching and making peer learning
            happen in the community, has made this happen- He was selected as
            Android Study Jams Facilitator for the community. With that, he has
            been teaching the best content in the most easily understandable way
            to hundreds of students. Adding more to this, he is also WWDC20
            Swift Student Scholar and started interning as a Developer when he
            was just in his in 12th Grade!
            <br />
            <br />
            More and More laurels to Manas! Wish him all the very best in his
            future endeavors.
          </p>
        </div>
      </div>
    </section>
  );
}
