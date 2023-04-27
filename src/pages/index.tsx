import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import RecommendationSection from "@/components/recommendations";
import Services from "@/components/services";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  ChevronRight,
  FileText,
} from "react-feather";
export default function Home() {
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
      title: "WWDC20 Swift Student Scholar",
      provider: "Apple",
      subtitle:
        "I was selected in top 15 for the Apple's WorldWide Developer Conference 2020's Swift Student Challenge for my playground, BeCoronaReady!",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png",
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
      image:
        "https://scontent.fvtz1-2.fna.fbcdn.net/v/t39.30808-6/313997635_520857836721067_7363203990520852225_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=f_H5IpmwTIYAX-hL1js&_nc_ht=scontent.fvtz1-2.fna&oh=00_AfDx_WoSv90lHbesG3OEJlcOhrPmB2TGzGFAt0wtP7FQ8w&oe=6450893A",
      padding: false,
    },
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
      title: "WWDC20 Swift Student Scholar",
      provider: "Apple",
      subtitle:
        "I was selected in top 15 for the Apple's WorldWide Developer Conference 2020's Swift Student Challenge for my playground, BeCoronaReady!",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png",
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
      image:
        "https://scontent.fvtz1-2.fna.fbcdn.net/v/t39.30808-6/313997635_520857836721067_7363203990520852225_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=f_H5IpmwTIYAX-hL1js&_nc_ht=scontent.fvtz1-2.fna&oh=00_AfDx_WoSv90lHbesG3OEJlcOhrPmB2TGzGFAt0wtP7FQ8w&oe=6450893A",
      padding: false,
    },
  ];
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
          <Services />
          <section id="resume">
            <div>
              <h2 className="text-4xl py-16">Resume</h2>
              <div className="flex justify-between lg:flex-row flex-col">
                <div>
                  <h3 className="text-3xl font-semibold lg:mt-6">
                    Work Experience
                  </h3>
                  <div className="my-11">
                    <div className="flex">
                      <h4 className="text-xl">Spotmies LLP</h4>
                      <Link href="https://www.spotmies.com/" className=" ml-2">
                        <ArrowUpRight className="p-1" />
                      </Link>
                    </div>
                    <h5 className="text-md font-semibold">Flutter Intern</h5>
                    <p className="text-md opacity-50">Dec 2021 - Mar 2023</p>
                  </div>
                  <h3 className="text-3xl font-semibold mt-6">
                    Leadership Experience
                  </h3>

                  <div className="my-11 flex flex-col gap-6">
                    <div>
                      <div className="flex">
                        <h4 className="text-xl">
                          EcoClub, Visakha Valley School
                        </h4>
                      </div>
                      <h5 className="text-md font-semibold">President</h5>
                      <p className="text-md opacity-50">May 2018 - May 2020</p>
                    </div>
                    <div>
                      <div className="flex">
                        <h4 className="text-xl">
                          Maths Club, Visakha Valley School
                        </h4>
                      </div>
                      <h5 className="text-md font-semibold">Representative</h5>
                      <p className="text-md opacity-50">May 2019 - May 2020</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-semibold lg:mt-6">Education</h3>
                  <div className="my-11 flex flex-col gap-6">
                    <div>
                      <div className="flex">
                        <h4 className="text-xl">
                          Northmoor Edison Primary School
                        </h4>
                        <Link
                          href="https://www.peoriapublicschools.org/northmoor"
                          className=" ml-2"
                        >
                          <ArrowUpRight className="p-1" />
                        </Link>
                      </div>
                      <h5 className="text-md font-semibold">Preschool-1st</h5>
                      <p className="text-md opacity-50">Sept 2009 - Jun 2011</p>
                    </div>
                    <div>
                      <div className="flex">
                        <h4 className="text-xl">Visakha Valley School</h4>
                        <Link
                          href="https://www.visakhavalleyschool.com/"
                          className=" ml-2"
                        >
                          <ArrowUpRight className="p-1" />
                        </Link>
                      </div>
                      <h5 className="text-md font-semibold">1st-10th</h5>
                      <p className="text-md opacity-50">Aug 2011 - May 2020</p>
                    </div>
                    <div>
                      <div className="flex">
                        <h4 className="text-xl">
                          M.P. & E.V. English Medium School
                        </h4>
                      </div>
                      <h5 className="text-md font-semibold">11th-12th</h5>
                      <p className="text-md opacity-50">Jun 2020 - Jul 2022</p>
                    </div>
                    <div>
                      <div className="flex items-end">
                        <h4 className="text-xl">
                          Gandhi Institute of
                          <br />
                          Technology and Management
                        </h4>
                        <Link
                          href="https://www.gitam.edu/"
                          className=" ml-2 mb-1"
                        >
                          <ArrowUpRight className="p-1" />
                        </Link>
                      </div>
                      <h5 className="text-md font-semibold">
                        Bachelor&apos;s degree, Information Technology
                      </h5>
                      <p className="text-md opacity-50">
                        Sept 2022 - Sept 2026
                      </p>
                    </div>
                  </div>
                </div>
                <div />
              </div>

              <h3 className="text-3xl font-semibold lg:mt-6">
                Community Experience
              </h3>
              <div className="flex my-11 justify-between lg:flex-row flex-col gap-4 lg:gap-0">
                <div>
                  <div>
                    <div className="flex">
                      <h4 className="text-xl">Google</h4>
                      <Link
                        href="https://productexperts.withgoogle.com/"
                        className=" ml-2"
                      >
                        <ArrowUpRight className="p-1" />
                      </Link>
                    </div>
                    <h5 className="text-md font-semibold mt-2">
                      Google Product Expert
                      <span className="ml-4 text-[0.7em] font-normal italic">
                        Android • WearOS by Google • Google Play Console
                      </span>
                    </h5>
                    <p className="text-md opacity-50">Jan 2023 - Present</p>
                    <div className="flex mt-2">
                      <h5 className="text-md font-semibold">
                        Android Study Jams Facilitator
                      </h5>
                      <Link
                        href="https://developer.android.com/teach"
                        className="ml-1"
                      >
                        <ArrowUpRight className="p-[0.32rem]" />
                      </Link>
                    </div>
                    <p className="text-md opacity-50">Jun 2022 - Present</p>
                  </div>
                  <div className="mt-6">
                    <div className="flex">
                      <h4 className="text-xl">
                        Google Developer Student Clubs
                      </h4>
                      <Link
                        href="https://gdsc.community.dev/gandhi-institute-of-technology-and-management-gitam-visakhapatnam/"
                        className=" ml-2"
                      >
                        <ArrowUpRight className="p-1" />
                      </Link>
                    </div>
                    <h5 className="text-md font-semibold">Volunteer, GITAM</h5>
                    <p className="text-md opacity-50">Feb 2022 - Present</p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex">
                      <h4 className="text-xl">
                        Google Developer Groups, Vizag
                      </h4>
                      <Link
                        href="https://gdg.community.dev/gdg-vizag/"
                        className=" ml-2"
                      >
                        <ArrowUpRight className="p-1" />
                      </Link>
                    </div>
                    <h5 className="text-md font-semibold">Core Contributor</h5>
                    <p className="text-md opacity-50">Jan 2022 - Present</p>
                  </div>
                  <div className="mt-6">
                    <div className="flex">
                      <h4 className="text-xl">Women TechMakers, Vizag</h4>
                      <Link
                        href="https://developers.google.com/womentechmakers"
                        className=" ml-2"
                      >
                        <ArrowUpRight className="p-1" />
                      </Link>
                    </div>
                    <h5 className="text-md font-semibold">Core Contributor</h5>
                    <p className="text-md opacity-50">Jan 2022 - Present</p>
                  </div>
                </div>
                <div className="w-36" />
              </div>
              <div className="flex lg:flex-row flex-col">
                <div className="w-full flex-grow">
                  <h3 className="text-3xl font-semibold lg:mt-6">Skills</h3>
                  <div className="flex lg:flex-row flex-col my-11 justify-between">
                    <div className="flex-grow">
                      <h4 className="text-xl pb-4 font-semibold">Languages</h4>
                      <ul className="grid grid-cols-2 gap-x-16 my-4 gap-y-4">
                        <li>Bash</li>
                        <li>
                          C
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>
                          C#
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>C++</li>
                        <li>CSS/SCSS</li>
                        <li className="font-semibold">
                          Dart
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>Elixir</li>

                        <li className="font-semibold">
                          GoLang
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>

                        <li className="font-semibold">HTML</li>

                        <li className="font-semibold">
                          Java
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>JavaScript</li>

                        <li className="font-semibold">
                          Kotlin
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>LOGO</li>
                        <li>Objective-C</li>
                        <li>PhP</li>

                        <li className="font-semibold">
                          Python
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>QBasic</li>
                        <li>Rust</li>
                        <li>Scratch</li>
                        <li>SQL</li>

                        <li className="font-semibold">
                          Swift
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>Turtle</li>
                        <li>TypeScript</li>
                        <li>Visual Basic</li>
                        <li>XAML</li>
                        <li>XML</li>
                      </ul>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl pb-4 font-semibold">Frameworks</h4>
                      <ul className="grid grid-cols-2 gap-x-16 my-4 gap-y-4">
                        <li className="font-semibold">
                          Jetpack Compose
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>

                        <li className="font-semibold">
                          SwiftUI
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>
                          TailwindCSS
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>
                          Next.Js
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>
                          React/ React Native
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>

                        <li className="font-semibold">
                          Parse
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>Mongo</li>

                        <li className="font-semibold">
                          Flutter
                          <Link href="/skills/flutter" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>.NET</li>
                        <li>
                          Unity
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>

                        <li className="font-semibold">
                          TensorFlow
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>
                          Pandas
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li>Matplotlib</li>
                        <li>Numpy</li>
                        <li>Seaborn</li>
                        <li>SciLearn</li>
                        <li>
                          JSON
                          <Link href="" className="ml-1">
                            <ArrowUpRight className="py-[0.4rem] inline" />
                          </Link>
                        </li>
                        <li></li>
                        <li>Other</li>
                        <li>UI/UX Design</li>
                      </ul>
                    </div>
                    <div />
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col">
                <div className="w-full">
                  <h3 className="text-3xl font-semibold lg:mt-6">Tools</h3>
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
                <div className="w-3/4">
                  <h3 className="text-3xl font-semibold mt-3 lg:mt-6">
                    Online Courses
                  </h3>
                  <div className="my-11 flex flex-col gap-6">
                    <div>
                      <div className="flex">
                        <h4 className="text-xl">Udemy</h4>
                        {/* <Link
                          href="https://productexperts.withgoogle.com/"
                          className=" ml-2"
                        >
                          <ArrowUpRight className="p-1" />
                        </Link> */}
                      </div>
                      <div className="flex mt-2">
                        <h5 className="text-md font-semibold">
                          The Complete Android N Developer Course
                        </h5>
                        <Link
                          href="https://www.udemy.com/course/complete-android-n-developer-course/"
                          className="ml-1"
                        >
                          <ArrowUpRight className="p-[0.32rem]" />
                        </Link>
                      </div>
                      <p className="text-md opacity-50">Mar 2018 - Aug 2018</p>
                      <div className="flex mt-2">
                        <h5 className="text-md font-semibold">
                          The Complete iOS 12 & Swift Developer Course - Build
                          28 Apps
                        </h5>
                        <Link
                          href="https://www.udemy.com/course/ios-12-developer-course"
                          className="ml-1"
                        >
                          <ArrowUpRight className="p-[0.32rem]" />
                        </Link>
                      </div>
                      <p className="text-md opacity-50">Jan 2019 - May 2022</p>
                    </div>
                    {/* <div>
                      <div className="flex">
                        <h4 className="text-xl">Udemy</h4>
                        <Link
                          href=""
                          className=" ml-2"
                        >
                          <ArrowUpRight className="p-1" />
                        </Link>
                      </div>
                      <h5 className="text-md font-semibold">
                        The Complete Android N Developer Course
                      </h5>
                      <p className="text-md opacity-50">Mar 2018 - Aug 2018</p>
                      <h5>The Complete iOS 13 & Swift Developer Course</h5>
                    </div> */}
                    <div>
                      <div className="flex">
                        <h4 className="text-xl">Google Developer Training</h4>
                        {/* <Link
                          href="https://productexperts.withgoogle.com/"
                          className=" ml-2"
                        >
                          <ArrowUpRight className="p-1" />
                        </Link> */}
                      </div>
                      <div className="flex mt-2">
                        <h5 className="text-md font-semibold">
                          Android Basics with Compose
                        </h5>
                        <Link
                          href="https://developer.android.com/courses/android-basics-compose/course"
                          className="ml-1"
                        >
                          <ArrowUpRight className="p-[0.32rem]" />
                        </Link>
                      </div>
                      <p className="text-md opacity-50">Jan 2023 - Apr 2023</p>
                      <div className="flex mt-2">
                        <h5 className="text-md font-semibold">
                          Compose Pathway
                        </h5>
                        <Link
                          href="https://developer.android.com/courses/pathways/compose"
                          className="ml-1"
                        >
                          <ArrowUpRight className="p-[0.32rem]" />
                        </Link>
                      </div>
                      <p className="text-md opacity-50">May 2022 - Jun 2022</p>
                      <div className="flex mt-2">
                        <h5 className="text-md font-semibold">
                          Android Basics in Kotlin
                        </h5>
                        <Link
                          href="https://developer.android.com/courses/android-basics-kotlin/course"
                          className="ml-1"
                        >
                          <ArrowUpRight className="p-[0.32rem]" />
                        </Link>
                      </div>
                      <p className="text-md opacity-50">Dec 2021 - Jan 2021</p>
                    </div>
                    {/* <div>
                      <div className="flex">
                        <h4 className="text-xl">Google Developers Training</h4>
                        <Link
                          href="https://developer.android.com/courses"
                          className=" ml-2"
                        >
                          <ArrowUpRight className="p-1" />
                        </Link>
                      </div>
                      <h5 className="text-md font-semibold">
                        Android Basics with Compose
                      </h5>
                      <p className="text-md opacity-50">Aug 2011 - May 2020</p>
                      <h5 className="text-md font-semibold">
                        Android Basics with Kotlin
                      </h5>
                      <p className="text-md opacity-50">Aug 2011 - May 2020</p>
                    </div> */}
                  </div>
                </div>
              </div>
              <Link href="">
                <div className="flex items-center text-[#B31412]">
                  <FileText />
                  <h4 className="mx-6 mt-1">View as PDF</h4>
                  <ArrowRight className="p-1" />
                </div>
              </Link>
            </div>
          </section>
          <div className="my-20 overflow-y-visible h-[0rem] -translate-y-[16rem]">
            <div className="relative">
              <div className="bg-[#EAF9FA] dark:bg-opacity-10 w-3/4 lg:w-1/3 aspect-square absolute -right-16 lg:-right-36 rounded-full" />
              <div className="border-[#93CED2] dark:opacity-30 border-2 w-3/4 lg:w-1/3 aspect-square absolute -right-0 lg:-right-8 top-16 rounded-full border-dashed" />
              <img
                src="party-memoji.png"
                className="w-32 lg:w-48 right-28 lg:right-44 absolute"
              />
              <div className="right-8 lg:right-16 top-28 lg:top-48 absolute">
                <h3 className="text-lg lg:text-2xl text-[#6DA0A4]">Connect</h3>
                <h3 className="text-lg lg:text-2xl">Got a project</h3>
                <Link
                  href="/contact"
                  className="underline text-lg lg:text-2xl font-bold underline-offset-8"
                >
                  Lets Talk!
                </Link>
              </div>
            </div>
          </div>
          <RecommendationSection />

          <section id="achievements">
            <div className="flex pb-12 items-center justify-between">
              <h2 className="text-4xl">
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

            <div className="flex gap-x-8 animate-[scroll_15s_linear_infinite] hover:pause">
              {awards.map((item) => {
                return (
                  <Link key={item.title} href="">
                    <div className="px-8 py-4 bg-slate-900/70 flex gap-6 items-center rounded-lg shrink-0 cursor-pointer">
                      {item.image == "" ? (
                        <Award className="px-3 w-10 h-10 rounded-full bg-slate-800" />
                      ) : (
                        <img
                          src={item.image}
                          className={
                            item.padding
                              ? "px-3 w-10 h-10 rounded-full bg-slate-800 object-contain"
                              : "w-10 h-10 rounded-full bg-slate-800 object-contain"
                          }
                        />
                      )}
                      <div>
                        <div className="flex gap-x-3 items-center">
                          <h3 className="font-bold text-lg whitespace-nowrap">
                            {item.title}
                          </h3>
                          <ChevronRight className="w-4 h-4" />
                        </div>

                        <h4 className="text-blue-300 whitespace-nowrap">
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
          <section id="work" className="mb-16">
            <h2 className="text-4xl py-12 ">
              The {}
              <span className="underline decoration-blue-200 decoration-2 underline-offset-[12px]">
                Work
              </span>
              {} I do
            </h2>
            <div className="flex lg:flex-row flex-col lg:mr-24 gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[765/856] bg-[#D2E3FC]/30 dark:bg-[#D2E3FC]/80"></div>
                <h4 className="text-2xl my-6 font-semibold">
                  ASquare Gokarting
                </h4>
                <p className="opacity-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet odio ut turpis vulputate molestie vitae at
                  sapien. Vivamus.{" "}
                </p>
              </div>
              <div className="w-full lg:w-1/2 lg:mt-24">
                <div className="aspect-[765/856] bg-[#FEF7E0]/50 dark:bg-[#FEF7E0]/80"></div>
                <h4 className="text-2xl my-6 font-semibold">Nandikrushi</h4>
                <p className="opacity-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet odio ut turpis vulputate molestie vitae at
                  sapien. Vivamus.{" "}
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:mr-24 gap-12 lg:gap-24 lg:-translate-y-8 mt-12 lg:mt-0">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[765/856] bg-[#FCE8E6]/30 dark:bg-[#FCE8E6]/80"></div>
                <h4 className="text-2xl my-6 font-semibold">BeCoronaReady</h4>
                <p className="opacity-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet odio ut turpis vulputate molestie vitae at
                  sapien. Vivamus.{" "}
                </p>
              </div>
              <div className="w-full lg:w-1/2 lg:mt-24">
                <div className="aspect-[765/856] bg-[#CEEAD6]/30 dark:bg-[#CEEAD6]/80"></div>
                <h4 className="text-2xl my-6 font-semibold">EcoFun</h4>
                <p className="opacity-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet odio ut turpis vulputate molestie vitae at
                  sapien. Vivamus.{" "}
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
          <div className="w-max mx-auto mb-24">
            <h2 className="text-2xl lg:text-5xl w-[18ch] font-semibold">
              Let me know if you want to talk about a potential collaboration.
              I&apos;m available for freelance work.
            </h2>
            <Link href="/contact" className="flex my-12">
              <h3 className="text-lg lg:text-3xl text-[#B06000]/40 dark:text-[#FDE293]/80 underline decoration-2 underline-offset-8">
                Let&apos;s build good things together
              </h3>{" "}
              <ArrowUpRight className="text-[#B06000]/30 w-8 h-8 ml-2 dark:text-[#FDE293]/80" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
