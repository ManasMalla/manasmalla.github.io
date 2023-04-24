import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "react-feather";
export default function Home() {
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
        <div className="mx-8 lg:mx-20">
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
                      <h4 className="text-xl pb-4">Languages</h4>
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
                      <h4 className="text-xl pb-4">Frameworks</h4>
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
          <div className="my-20 overflow-y-clip h-[32rem]">
            <div className="relative">
              <div className="bg-[#EAF9FA] w-3/4 lg:w-1/3 aspect-square absolute -right-16 lg:-right-36 rounded-full" />
              <div className="border-[#93CED2] border-2 w-3/4 lg:w-1/3 aspect-square absolute -right-0 lg:-right-8 top-16 rounded-full border-dashed" />
              <img
                src="party-memoji.png"
                className="w-32 lg:w-48 right-28 lg:right-44 absolute"
              />
              <div className="right-8 lg:right-16 top-28 lg:top-48 absolute">
                <h3 className="text-lg lg:text-2xl text-[#6DA0A4]">Connect</h3>
                <h3 className="text-lg lg:text-2xl">Got a project</h3>
                <Link
                  href="/contact"
                  className="underline text-lg lg:text-2xl font-bold"
                >
                  Lets Talk!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
