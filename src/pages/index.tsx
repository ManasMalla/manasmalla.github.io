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
        <div className="mx-20">
          <Services />
          <section id="resume">
            <div>
              <h2 className="text-4xl py-16">Resume</h2>
              <div className="flex justify-between">
                <div>
                  <h3 className="text-3xl font-semibold mt-6">
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
                  <h3 className="text-3xl font-semibold mt-6">Education</h3>
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

              <h3 className="text-3xl font-semibold mt-6">
                Community Experience
              </h3>
              <div className="flex my-11 justify-between">
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
              <div className="flex">
                <div className="w-full">
                  <h3 className="text-3xl font-semibold mt-6">Skills</h3>
                  <div className="flex my-11 justify-between">
                    <div>
                      <h4 className="text-2xl">Design</h4>
                      <ul className="grid grid-cols-2 gap-x-8 my-4 gap-y-2">
                        <li>SwiftUI</li>
                        <li>Jetpack Compose</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-2xl">Development</h4>
                      <ul className="grid grid-cols-2 gap-x-8 my-4 gap-y-2">
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                      </ul>
                    </div>
                    <div />
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-3xl font-semibold mt-6">
                    Online Courses
                  </h3>
                  <div className="my-11 flex flex-col gap-6">
                    <div>
                      <div className="flex">
                        <h4 className="text-xl">Udemy</h4>
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
                          href="https://developer.android.com/teach"
                          className="ml-1"
                        >
                          <ArrowUpRight className="p-[0.32rem]" />
                        </Link>
                      </div>
                      <p className="text-md opacity-50">Jan 2023 - Present</p>
                      <div className="flex mt-2">
                        <h5 className="text-md font-semibold">
                          Android Basics with Kotlin
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
              <div className="flex">
                <div className="w-full">
                  <h3 className="text-3xl font-semibold mt-6">Tools</h3>
                  <div className="flex my-6">
                    <div>
                      <ul className="grid grid-cols-2 gap-x-8 my-4 gap-y-2">
                        <li>Figma</li>
                        <li>Android Studio</li>
                        <li>Swift Playgrounds</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                        <li>SwiftUI</li>
                      </ul>
                    </div>
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
              <div className="bg-[#EAF9FA] w-1/3 aspect-square absolute -right-36 rounded-full" />
              <div className="border-[#93CED2] border-2 w-1/3 aspect-square absolute -right-8 top-16 rounded-full border-dashed" />
              <img src="party-memoji.png" className="w-48 right-44 absolute" />
              <div className="right-16 top-48 absolute">
                <h3 className="text-2xl text-[#6DA0A4]">Connect</h3>
                <h3 className="text-2xl">Got a project</h3>
                <Link href="/contact" className="underline text-2xl font-bold">
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
