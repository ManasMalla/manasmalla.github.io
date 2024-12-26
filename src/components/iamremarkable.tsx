import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRight, Award, ChevronRight } from "react-feather";

export default function IAmRemarkable() {
  const awards = [
    {
      title: "1st Place - Seniors",
      provider: "The Intl. Asc. of Lions Club",
      subtitle:
        "Mathematics, Analytical Thinking, District Level; Visakhapatnam",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Lions_Clubs_International_logo.svg/1200px-Lions_Clubs_International_logo.svg.png",
      padding: true,
    },
    {
      title: "SmartIDEAthon",
      provider: "GITAM - Startup India",
      subtitle: "Semi-finalists (Top 32) for our venture, STEMQuest",
      image: "https://www.gitam.edu/sites/default/files/2022-09/GITAM-logo.jpg",
      padding: false,
    },
    {
      title: "BUILD",
      provider: "ITIC",
      subtitle:
        "Finalists (Top 75) for our venture, STEMQuest with a grant of 1 Lakh",
      image: "/logos/build.png",
      padding: false,
    },
    {
      title: "Swift Student Scholar",
      provider: "Apple",
      subtitle: "Top 15 for my WWDC20 SSC playground, BeCoronaReady!",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png",
      padding: true,
    },
    {
      title: "Java Level 1 & 2",
      provider: "The Cambridge Cert. Auth.",
      subtitle: "VLSE Symposium: Poster Presentation - Quantum Walk",
      image: "/logos/the-cca.jpg",
      padding: false,
    },
    {
      title: "Swift Level 1 & 2",
      provider: "The Cambridge Cert. Auth.",
      subtitle: "VLSE Symposium: Poster Presentation - Quantum Walk",
      image: "/logos/the-cca.jpg",
      padding: false,
    },

    {
      title: "1st Place",
      provider: "Internal SiH, GITAM",
      subtitle:
        "Earned 10K for our venture, AutoSmith in the 24 hour hackathon",
      image: "/logos/sih.png",
      padding: false,
    },
    {
      title: "iiO Class Topper",
      provider: "SilverZone",
      subtitle: "VLSE Symposium: Poster Presentation - Quantum Walk",
      image: "https://exam.silverzone.org/assets/images/bn.png",
      padding: true,
    },
    {
      title: "Top 40%",
      provider: "Breakthrough Junior Challenge",
      subtitle:
        "The video scored in the Top 40 percent of all videos in the Peer-to-Peer judging.",
      image: "",
      padding: false,
    },
    {
      title: "1st Place",
      provider: "Bharat Art Gallery",
      subtitle: "Conducted on the theme of 'Independence Day'!",
      image: "",
      padding: false,
    },
    {
      title: "ConcART Finalist",
      provider: "DevFest India '21",
      subtitle:
        "Choosing a technology and explaining it through art, either made digitally or free-hand. I submitted a digital artwork explaining and exploring the all new and the most personal Android OS ever, Android 12 with Material You!",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/event_banners/Copy%20of%20DevFest2021-EventThumbnail_oxOuRYe.png",
      padding: false,
    },
    {
      title: "Resource Person and Mentor",
      provider: "GMRIT Rajam",
      subtitle: "#STEPCONE 2023 - Annual Technical Paper And Contest Expo",
      image: "/logos/gmrit.png",
      padding: false,
    },
    {
      title: "1st Prize",
      provider: "World Ocean Science Congress",
      subtitle: "Poster Presentation: EcoFun, an app to solve climate change",
      image: "/logos/wosc.png",
      padding: false,
    },

    {
      title: "Poster Presentation",
      provider: "TCABS-E",
      subtitle: "VLSE Symposium: Poster Presentation - Quantum Walk",
      image:
        "https://static.wixstatic.com/media/a1924b_980d4aa2234f4f8296e45a789b4e007e~mv2.png",
      padding: true,
    },
    {
      title: "Completed 3 levels",
      provider: "Brainobrain Intl. Abacus",
      subtitle: "VLSE Symposium: Poster Presentation - Quantum Walk",
      image:
        "https://seeklogo.com/images/B/brainobrain-logo-7347CD1501-seeklogo.com.png",
      padding: true,
    },
    {
      title: "SpellBees Finalist",
      provider: "Oakridge Intl. School",
      subtitle: "VLSE Symposium: Poster Presentation - Quantum Walk",
      image:
        "https://www.oakridge.in/wp-content/uploads/2020/10/cropped-OIS-central-Horizontal-logo-copy-2.png",
      padding: true,
    },
    {
      title: "1st Prize",
      provider: "PURAVIDA",
      subtitle: "VLSE Symposium: Poster Presentation - Quantum Walk",
      image:
        "https://media.licdn.com/dms/image/C560BAQEtj7y4sYyr6Q/company-logo_200_200/0/1587741983932?e=2147483647&v=beta&t=l6NNCwKuca4dXzzb_01slMY9OfxGiQNHp-AS-BMelo8",
      padding: false,
    },
  ];
  const router = useRouter();
  return (
    <section id="achievements">
      <div className="flex pb-12 items-center justify-between">
        <h2 className="text-4xl font-semibold">
          I am{" "}
          <span className="underline decoration-[#FBBC04]/20 decoration-2 underline-offset-[12px]">
            remarkable
          </span>{" "}
          because...
        </h2>
        <button
          onClick={() => {
            router.push("/work");
          }}
          className="font-light rounded-full"
        >
          <span className="font-normal inline-flex">View All</span>
          <ArrowRight className="inline-flex w-4 h-4 ml-4" />
        </button>
      </div>

      <div className="flex gap-x-8 animate-[scroll_50.5s_linear_infinite] hover:pause">
        {awards.concat(awards).map((item) => {
          return (
            <Link key={item.title} href="">
              <div className="px-8 py-4 bg-blue-100/70 dark:bg-slate-900/70 flex gap-6 items-center rounded-lg shrink-0 cursor-pointer">
                {item.image == "" ? (
                  <Award className="px-3 w-10 h-10 rounded-full bg-blue-200 dark:bg-slate-800" />
                ) : (
                  <img
                    src={item.image}
                    className={
                      item.padding
                        ? "px-3 w-10 h-10 rounded-full bg-blue-200/70 dark:bg-slate-800 object-contain"
                        : "w-10 h-10 rounded-full bg-blue-200/70 dark:bg-slate-800 object-contain"
                    }
                  />
                )}
                <div className="w-[15rem]">
                  <div className="flex gap-x-3 items-center">
                    <h3 className="font-bold text-lg line-clamp-1">
                      {item.title}
                    </h3>
                    <ChevronRight className="w-4 h-4" />
                  </div>

                  <h4 className="text-blue-300 line-clamp-1">
                    {item.provider}
                  </h4>
                  <h4 className="text-xs w-[24ch] line-clamp-2 opacity-75">
                    {item.subtitle}
                  </h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
