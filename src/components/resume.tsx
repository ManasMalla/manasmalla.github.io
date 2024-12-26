import Link from "next/link";
import MultiResumeTileCard from "./MultiResumeTileCard";
import ResumeTileCard from "./resume_card";
import { ArrowRight, ArrowUpRight, FileText } from "react-feather";

export default function ResumeComponent() {
  return (
    <div id="resume" className="max-w-[960px]">
      <div>
        <h2 className="text-4xl pb-8 pt-0 font-bold">Resume</h2>
        <div className="w-full flex justify-between lg:flex-row flex-col max-w-[1040px]">
          <div>
            <h3 className="text-2xl font-semibold lg:mt-6 mb-10">
              Work Experience
            </h3>
            <ResumeTileCard
              title="Spotmies LLP"
              subtitle="Flutter Developer"
              third_line="December 2021 - March 2023"
              link="https://spotmies.com"
            />
            <ResumeTileCard
              title="ReAIdy.io"
              subtitle="Flutter Developer"
              third_line="August 2023 - April 2024"
              link="https://spotmies.com"
            />
            {/* <h3 className="text-2xl font-semibold mt-6 mb-10">
                Leadership Experience
              </h3>
  
              <div className="flex flex-col">
                <ResumeTileCard
                  title="EcoClub, Visakha Valley School"
                  subtitle="President"
                  third_line="May 2018 - May 2020"
                />
                <ResumeTileCard
                  title="Maths Club, Visakha Valley School"
                  subtitle="Representative"
                  third_line="May 2019 - May 2020"
                />
              </div> */}
          </div>
          <div>
            <h3 className="text-2xl font-semibold lg:mt-6">Education</h3>
            <div className="flex flex-col mt-10">
              {/* <ResumeTileCard
                  title="Northmoor Edison Primary School"
                  subtitle="Preschool - 1st grade"
                  third_line="September 2009 - June 2011"
                  link="https://www.peoriapublicschools.org/northmoor"
                /> */}
              {/* <ResumeTileCard
                    title="Visakha Valley School"
                    subtitle="2nd - 10th grade"
                    third_line="August 2011 - May 2020"
                    link="https://www.visakhavalleyschool.com"
                  /> */}

              <ResumeTileCard
                title="M.P. & E.V. English Medium School"
                subtitle="11th - 12th grade"
                third_line="June 2020 - July 2022"
              />
              <ResumeTileCard
                title="Gandhi Institute of Technology and Management"
                subtitle="B.Tech. • Computer Science Engineering"
                third_line="September 2022 - September 2026"
                link="https://gitam.edu"
              />
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold lg:mt-6">Community Experience</h3>
        <div className="flex mt-11 justify-between lg:flex-row flex-col gap-4 lg:gap-0  max-w-[890px]">
          <div>
            <MultiResumeTileCard
              title="Google"
              items={[
                {
                  subtitle: "Google Product Expert",
                  overline: "Android • WearOS by Google • Google Play Console",
                  third_line: "Jan 2023 - Present",
                  link: "https://productexperts.withgoogle.com/",
                },
                {
                  subtitle: "Android Study Jams Facilitator",
                  third_line: "Jun 2022 - Present",
                  link: "https://developer.android.com/teach",
                },
              ]}
            />
            <MultiResumeTileCard
              title="Google Developer Student Clubs"
              link="https://gdsc.community.dev/gandhi-institute-of-technology-and-management-gitam-visakhapatnam/"
              items={[
                {
                  subtitle: "Lead, GITAM",
                  third_line: "July 2023 - June 2024",
                },
                {
                  subtitle: "Volunteer, GITAM",
                  third_line: "February 2022 - July 2023",
                },
              ]}
            />
          </div>
          <div>
            <ResumeTileCard
              title="Google Developer Groups, Vizag"
              subtitle="Core Contributor"
              third_line="Jan 2022 - Present"
              link="https://gdg.community.dev/gdg-vizag/"
            />
            <ResumeTileCard
              title="Women TechMakers, Vizag"
              subtitle="Core Contributor"
              third_line="Jan 2022 - Present"
              link="https://developers.google.com/womentechmakers"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="w-full flex-grow">
            <h3 className="text-2xl font-semibold lg:mt-5">Skills</h3>
            <div className="flex lg:flex-row flex-col my-11 justify-between items-start">
              <div className="flex-grow">
                <h4 className="text-xl pb-4 font-semibold">Languages</h4>
                <ul className="grid gap-x-16 my-4 gap-y-4">
                  {[
                    // { name: "Bash", link: false },
                    { name: "C", link: true },
                    // { name: "C#", link: true },
                    // { name: "C++", link: false },
                    { name: "CSS/SCSS", link: false },
                    { name: "Dart", link: true, className: "font-semibold" },
                    // { name: "Elixir", link: false },
                    { name: "GoLang", link: true, className: "font-semibold" },
                    { name: "HTML", link: false, className: "font-semibold" },
                    { name: "Java", link: true, className: "font-semibold" },
                    // { name: "JavaScript", link: false },
                    { name: "Kotlin", link: true, className: "font-semibold" },
                    // { name: "LOGO", link: false },
                    // { name: "Objective-C", link: false },
                    // { name: "PhP", link: false },
                    { name: "Python", link: true, className: "font-semibold" },
                    // { name: "QBasic", link: false },
                    // { name: "Rust", link: false },
                    // { name: "Scratch", link: false },
                    { name: "SQL", link: false },
                    { name: "Swift", link: true, className: "font-semibold" },
                    // { name: "Turtle", link: false },
                    { name: "TypeScript", link: false },
                    // { name: "Visual Basic", link: false },
                    // { name: "XAML", link: false },
                    // { name: "XML", link: false },
                  ].map((language, index) => (
                    <li key={index} className={language.className || ""}>
                      {language.name}
                      {language.link && (
                        <Link href="" className="ml-1">
                          <ArrowUpRight className="py-[0.4rem] inline" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl pb-4 font-semibold">Frameworks</h4>
                <ul className="grid gap-x-16 my-4 gap-y-4">
                  {[
                    {
                      name: "Jetpack Compose",
                      link: true,
                      className: "font-semibold",
                    },
                    { name: "SwiftUI", link: true, className: "font-semibold" },
                    { name: "TailwindCSS", link: true },
                    { name: "Next.Js", link: true },
                    // { name: "React/ React Native", link: true },
                    // { name: "Parse", link: true, className: "font-semibold" },
                    { name: "Mongo", link: false },
                    {
                      name: "Flutter",
                      link: true,
                      className: "font-semibold",
                      href: "/skills/flutter",
                    },
                    // { name: ".NET", link: false },
                    { name: "Unity", link: true },
                    {
                      name: "TensorFlow",
                      link: true,
                      className: "font-semibold",
                    },
                    // { name: "Pandas", link: true },
                    // { name: "Matplotlib", link: false },
                    // { name: "Numpy", link: false },
                    // { name: "Seaborn", link: false },
                    // { name: "SciLearn", link: false },
                    { name: "JSON", link: true },
                    // { name: "Other", link: false },
                    // { name: "UI/UX Design", link: false },
                  ].map((framework, index) => (
                    <li key={index} className={framework.className || ""}>
                      {framework.name}
                      {framework.link && (
                        <Link href={framework.href || ""} className="ml-1">
                          <ArrowUpRight className="py-[0.4rem] inline" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold lg:mt-5">Online Courses</h3>
            <div className="my-11 flex flex-col gap-6">
              <MultiResumeTileCard
                title="Udemy"
                items={[
                  {
                    subtitle: "The Complete Android N Developer Course",
                    third_line: "March 2018 - August 2018",
                    link: "https://www.udemy.com/course/complete-android-n-developer-course/",
                  },
                  {
                    subtitle:
                      "The Complete iOS 12 & Swift Developer Course - Build 28 Apps",
                    third_line: "January 2019 - May 2022",
                    link: "https://www.udemy.com/course/ios-12-developer-course",
                  },
                ]}
              />
              <MultiResumeTileCard
                title="Google Developer Training"
                items={[
                  {
                    subtitle: "Android Basics with Compose",
                    third_line: "Jan 2023 - Apr 2023",
                    link: "https://developer.android.com/courses/android-basics-compose/course",
                  },
                  {
                    subtitle: "Compose Pathway",
                    third_line: "May 2022 - Jun 2022",
                    link: "https://developer.android.com/courses/pathways/compose",
                  },
                  {
                    subtitle: "Android Basics in Kotlin",
                    third_line: "Dec 2021 - Jan 2021",
                    link: "https://developer.android.com/courses/android-basics-kotlin/course",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="w-full">
            <h3 className="text-2xl font-semibold lg:mt-6">Tools</h3>
            <div className="flex my-6">
              <div>
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 my-4 gap-y-4">
                  <li>
                    Figma
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>
                    Adobe XD
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>Sketch</li>
                  <li>
                    Android Studio
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>
                    Swift Playgrounds
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>
                    Material
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>Vercel</li>
                  <li>
                    ChatGPT
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>Dall-E</li>
                  <li>Amazon Web Services</li>
                  <li>
                    Google Cloud
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>
                    Firebase
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>Git</li>
                  <li>
                    GitHub
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>Postman</li>
                  <li>
                    Xcode
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>VirtualBox</li>
                  <li>
                    Fusion 360
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>Blender</li>
                  <li>
                    Adobe Photoshop
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>
                    Adobe Illustrator
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>
                    Adobe Character Animator
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>
                    Adobe After Effects
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>Adobe Media Encoder</li>
                  <li>
                    Adobe Audition
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>
                    Raspberry Pi
                    <Link href="" className="ml-1">
                      <ArrowUpRight className="py-[0.4rem] inline" />
                    </Link>
                  </li>
                  <li>Gradle</li>
                  <li>CMake</li>
                  <li>ec2</li>
                  <li>Node.Js</li>
                  <li>Visual Studio Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link href="/Manas Malla Resume.pdf">
          <div className="flex items-center text-[#B31412]">
            <FileText />
            <h4 className="mx-6 mt-1">View as PDF</h4>
            <ArrowRight className="p-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
