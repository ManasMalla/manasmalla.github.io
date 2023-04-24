import { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

export default function RecommendationSection() {
  const [index, setIndex] = useState(0);
  const recommendations = [
    {
      name: "Praseeda Saripalle",
      designation: "Lead @ GDSC GVPCEW",
      image:
        "https://media.licdn.com/dms/image/D5603AQEdL5JK-XDSfQ/profile-displayphoto-shrink_800_800/0/1669657636236?e=1687996800&v=beta&t=tDF-7Ae7JJVZtsSRreLdXINeyajfOfmxMLEFWLwvm3w",
    },
    {
      name: "Bala Tripura Sundari",
      designation: "Ambassador @ WTM Vizag",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/IMG-20210112-WA0082.jpg",
    },
    {
      name: "Sampath Balivada",
      designation: "SDE1 @ PayPal",
      image:
        "https://media.licdn.com/dms/image/D5603AQEeemWpuZV8pw/profile-displayphoto-shrink_800_800/0/1679033640505?e=1687996800&v=beta&t=NbBtV058LdNZNsndgHMPE-t7GK5UQnile9C9BQ4mZmg",
    },
    {
      name: "Usha Ramani Vemuru",
      designation: "Organizer @ GDG Vizag",
      image:
        "https://raw.githubusercontent.com/usharamani/www.vusharamani.com/master/public/images/UshaforI2.jpg",
    },
  ];
  return (
    <section id="recommendations" className="mx-auto mb-16">
      <h2 className="text-4xl py-12 px-24">
        A few things people
        <br />
        usually say{" "}
        <span className="underline decoration-blue-200 decoration-2 underline-offset-[12px]">
          about me
        </span>
      </h2>
      <div className="flex px-24">
        <div className="flex-shrink-0 h-[27rem] w-[22rem] relative">
          <div className="h-96 w-[22rem] bg-[#eaf9fa] absolute -z-10 right-6 top-6 rounded-[0.325rem]"></div>
          <div className="h-96 w-[22rem] bg-[#f5fcfd] absolute -z-20 right-12 top-12 rounded-[0.325rem]"></div>
          <img
            src={recommendations[index].image}
            className="h-96 w-[22rem] rounded-[0.325rem] object-cover"
          />
        </div>
        <div className="flex flex-col shrink px-16 justify-center pb-12">
          <h3 className="text-lg font-semibold mb-8">
            There is always something that drives us and keeps us inspired.
          </h3>
          <p className="w-[33rem]">
            If the driving factor itself is you, one could imagine how much
            energy is contained in you! And, the person who is so apt to
            resemble this analogy is Manas Malla. Being a creative designer by
            passion, and an Android Developer by profession, Manas has been
            highly excelling in any field given! Though I am ahead of him almost
            by 3 years of age, I never consider myself a senior to him when it
            comes to excelling in the amount of knowledge that he has in this
            field of development.
            <span>
              ..{" "}
              <a
                href="recommendations/praseeda-saripalle"
                className="text-[#005AC1] font-semibold underline decoration-2 underline-offset-4 decoration- decoration-[#005AC1]"
              >
                Read More
              </a>
            </span>
          </p>
          <h4 className=" my-8">
            {recommendations[index].name}
            <span className="ml-8 opacity-40">
              {recommendations[index].designation}
            </span>
          </h4>
          <div className="flex gap-4">
            <p>•</p>
            <p className="opacity-30">•</p>
            <p className="opacity-30">•</p>
            <p className="opacity-30">•</p>
            <ArrowLeft
              className={index == 0 ? `opacity-30` : ``}
              onClick={() => {
                if (index == 0) {
                  //   setIndex(3);
                } else {
                  //   setIndex(index - 1);
                }
              }}
            />
            <ArrowRight
              className={index == 3 ? `opacity-30` : ``}
              onClick={() => {
                if (index == 3) {
                  setIndex(0);
                } else {
                  //   setIndex(index + 1);
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
