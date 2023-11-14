import { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

export default function RecommendationSection() {
  const [index, setIndex] = useState(1);
  const recommendations = [
    {
      name: "Bala Tripura Sundari",
      designation: "Ambassador @ WTM Vizag",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/IMG-20210112-WA0082.jpg",
      recomm_short:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue scelerisque arcu vel pretium. Maecenas vulputate turpis id laoreet ultrices. Sed nisi libero, vulputate sed commodo et, sodales vel justo. Aenean tristique et lorem sit amet dapibus. Sed congue lacinia varius. Donec eleifend urna convallis, suscipit mauris vitae, porttitor magna. Cras non porta massa, eget convallis nibh. In mattis, ligula eu finibus molestie, enim nibh ornare tortor, vitae semper est turpis at justo. Nam est ex, eleifend ac erat et.",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies.",
    },
    {
      name: "Praseeda Saripalle",
      designation: "Lead @ GDSC GVPCEW",
      image:
        "https://media.licdn.com/dms/image/D5603AQEdL5JK-XDSfQ/profile-displayphoto-shrink_800_800/0/1669657636236?e=1700092800&v=beta&t=3yIUc4J52uHOAl7PFKAu-H3EtOR4SFWfLgLDbBjd1p8",
      recomm_short:
        "If the driving factor itself is you, one could imagine how much energy is contained in you! And, the person who is so apt to resemble this analogy is Manas Malla. Being a creative designer by passion, and an Android Developer by profession, Manas has been highly excelling in any field given! Though I am ahead of him almost by 3 years of age, I never consider myself a senior to him when it comes to excelling in the amount of knowledge that he has in this field of development.",
      title: "There is always something that drives us and keeps us inspired.",
    },
    {
      name: "Sampath Balivada",
      designation: "SDE1 @ PayPal",
      image:
        "https://media.licdn.com/dms/image/D5603AQEeemWpuZV8pw/profile-displayphoto-shrink_800_800/0/1679033640505?e=2147483647&v=beta&t=Gy7YHw7NOikIdM-XvVZfB4Xc73MS6OFQRY7azTwD7Ak",
      recomm_short:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a quam sed lorem dapibus aliquet. Suspendisse pulvinar ligula sit amet dolor malesuada placerat. Proin enim elit, commodo et rutrum in, venenatis blandit lorem. Cras gravida pulvinar sapien et pharetra. Etiam a tortor in dolor feugiat faucibus. Vestibulum at laoreet turpis. Pellentesque nisi libero, venenatis sodales bibendum ac, euismod sit amet massa. Mauris tempor orci sed tellus luctus elementum. Duis sit amet urna accumsan, pellentesque ante eget, mattis ex. Donec posuere, nisl in condimentum tincidunt, erat massa viverra tellus, non fringilla. ",
      title:
        "Sed nec mollis nisi. Suspendisse hendrerit, arcu nec sagittis dictum.",
    },
    {
      name: "Rama Villuri",
      designation: "SW Architect @ Nokia",
      image:
        "https://media.licdn.com/dms/image/D5603AQHbJKISNBljwQ/profile-displayphoto-shrink_800_800/0/1692009479097?e=1700092800&v=beta&t=MTT-H2MHzHVyZ0eLotszd1-yCBj4VcvdAc-Z1vk8-04",
      recomm_short:
        "Fusce varius, purus nec tincidunt sagittis, nunc nisl sollicitudin justo, et iaculis enim libero eget felis. Vestibulum tincidunt elementum sem eu rhoncus. Pellentesque ullamcorper condimentum mauris, tristique interdum arcu lobortis pretium. Proin porttitor eget purus laoreet interdum. Vestibulum maximus neque sit amet elit pulvinar, vitae viverra lorem molestie. In vulputate id dolor rhoncus bibendum. Donec vitae sapien ut est vestibulum rutrum. Vivamus vel massa porta.",
      title: "Nunc dictum ornare volutpat. Nunc cursus orci at nibh finibus. ",
    },
    {
      name: "Swapna Dande",
      designation: "Core Contributor, GDG Vizag",
      image:
        "https://media.licdn.com/dms/image/D5603AQGky0Gwuu1vdg/profile-displayphoto-shrink_800_800/0/1685290645408?e=1701907200&v=beta&t=kBW3wO0bWzo-r-DUXFcZjEM-wS5TK9CswjnxZRXVs-s",
      recomm_short:
        "Manas Malla is not only a dedicated professional but also a true enthusiast when it comes to technology and community building. What truly sets Manas apart is his role as an Android Study Jam facilitator and GDSC (Google Developer Student Clubs) lead at GITAM. He has played a pivotal role in nurturing the talents of the next generation of developers.",
      title:
        "I've had the privilege of knowing Manas Malla for a few years now, and he's an outstanding developer and an absolute hard worker.",
    },
    {
      name: "Anjali Kakarlapudi",
      designation: "Android Lead, GDSC GVPCEW '22",
      image: "/profile-pictures/anjali-kakarlapudi.jpg",
      recomm_short:
        "Although, he's younger than me, I always look up to him when it comes to the knowledge he has in technology. He is a true perfectionist. His meticulous attention to detail and unwavering commitment to excellence is commendable. Whether it's coding, designing, or managing projects, Manas Malla consistently strives for nothing short of perfection. As a core contributor of Google Developer Groups/Women Techmakers Vizag, Android Study Jams facilitator and Google Developer Student Clubs",
      title:
        "A remarkable professional I've ever met with an unparalleled dedication to work.",
    },
    {
      name: "Sidharth Philkhana",
      designation: "Student, GITAM (Deemed to be University)",
      image:
        "https://psidh.vercel.app/_next/image?url=%2Fimages%2Fpfp.jpg&w=1080&q=100",
      recomm_short:
        "A passionate creative designer and a proficient Android Developer, he effortlessly excels in every field he ventures into. I vividly recall in the first week, we participated in a quiz competition and Manas was electric in his speed and accuracy. As we were classmates, I had an opportunity to interact with him on a daily basis. Since my inaugural day at university",
      title:
        "From the onset of my university journey, Manas Malla has embodied an unparalleled source of inspiration.",
    },
  ];
  return (
    <section id="recommendations" className=" mb-16">
      <h2 className="text-4xl py-12">
        A few things people
        <br />
        usually say{" "}
        <span className="underline decoration-blue-200 decoration-2 underline-offset-[12px]">
          about me
        </span>
      </h2>
      <div className="flex mt-8 lg:flex-row flex-col">
        <div className="flex-shrink-0 h-[21rem] lg:h-[27rem] w-[16rem] lg:mx-0 ml-auto mb-4 lg:mb-0 mr-6 lg:w-[22rem] relative">
          <div className="h-72 lg:h-96 w-[16rem] lg:w-[22rem] bg-[#eaf9fa] dark:bg-[#2d3030] absolute z-20 right-6 top-6 rounded-[0.325rem]"></div>
          <div className="h-72 lg:h-96 w-[16rem] lg:w-[22rem] bg-[#f5fcfd] dark:opacity-10 absolute z-10 right-12 top-12 rounded-[0.325rem]"></div>
          <img
            src={recommendations[index].image}
            className="h-72 lg:h-96 w-[16rem] lg:w-[22rem] rounded-[0.325rem] object-cover z-30 absolute"
          />
        </div>
        <div className="flex flex-col shrink lg:px-16 justify-center pb-12">
          <h3 className="text-lg font-semibold mb-8 w-[20rem] lg:w-[33rem]">
            {recommendations[index].title}
          </h3>
          <p className="lg:w-[33rem]">
            {recommendations[index].recomm_short}
            <span>
              ..{" "}
              <a
                href={`recommendations/${recommendations[index].name
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
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
            {recommendations.map((recom, i) => {
              return (
                <p key={recom.name} className={index == i ? "" : "opacity-30"}>
                  •
                </p>
              );
            })}
            <ArrowLeft
              className={index == 0 ? `opacity-30` : ``}
              onClick={() => {
                if (index == 0) {
                  setIndex(recommendations.length - 1);
                } else {
                  setIndex(index - 1);
                }
              }}
            />
            <ArrowRight
              className={
                index == recommendations.length - 1 ? `opacity-30` : ``
              }
              onClick={() => {
                if (index == recommendations.length - 1) {
                  setIndex(0);
                } else {
                  setIndex(index + 1);
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
