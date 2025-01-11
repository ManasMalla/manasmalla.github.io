import { Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Instagram,
  Twitter,
  Linkedin,
  GitHub,
  Youtube,
  UserPlus,
  Menu,
  Book,
  Share,
  Bookmark,
} from "react-feather";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export default function SwiftStudentChallenge20() {
  return (
    <div className={`dark:bg-black ${plus_jakarta_sans.className}`}>
      <main className="px-8 lg:px-24 py-16 dark">
        <div className="gap-8 flex flex-col items-center dark:text-white">
          <img src="https://miro.medium.com/v2/1*vxXqtiCZNq7i15rTUhvzmw.png" />
          <h1 className="text-3xl lg:text-5xl font-semibold text-center">
            My Swift Student Challenge Journey!
          </h1>
          <h3 className="text-xl lg:text-3xl opacity-80">A Dream Come True</h3>
          <div className="flex items-center gap-4 text-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://media.licdn.com/dms/image/D5603AQFYsCJRGlxWqQ/profile-displayphoto-shrink_800_800/0/1678267583894?e=2147483647&v=beta&t=_pEcFZ5qeHoIH2eVvOD-gULQAlC0yGEx22JNU9S5WOQ"
            />

            <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">Manas Malla</h4>
              <div className="opacity-70">•</div>
              <h4 className="opacity-70">June 17 2020</h4>
              <div className="opacity-70">•</div>
              <Book className="inline-flex w-4 h-4 opacity-70" />
              <h5 className=" opacity-70">8 min read</h5>
            </div>
          </div>
          <div className="flex gap-8">
            <p>
              <Share className="inline-flex mr-4 w-4 h-4" />
              Share
            </p>
            <p>
              <Bookmark className="inline-flex mr-4 w-4 h-4" />
              Bookmark
            </p>
          </div>
          <p className="lg:w-[65ch] leading-8">
            <span className="text-3xl">W</span>hen the Apple 2020 Worldwide
            Developers Conference kicks off on June 22 in a new virtual format,
            a global community of 23 million developers will have the
            opportunity to join from around the world for free through the{" "}
            <a
              href="https://apps.apple.com/us/app/apple-developer/id640199958"
              className="text-blue-600"
            >
              Apple Developer app
            </a>{" "}
            and the Apple Developer website. Now in its 31st year, WWDC20 will
            bring together the largest group of innovators and entrepreneurs
            ever assembled to connect, share, and create. {<br />}
            {<br />}
            Among them will be 350{" "}
            <a
              href="https://developer.apple.com/wwdc20/swift-student-challenge/"
              className="text-blue-600"
            >
              Swift Student Challenge
            </a>{" "}
            winners from 41 different countries and regions. The students were
            chosen based on their original Swift playground submission, part of
            Apple’s annual WWDC student challenge, which recognizes and
            celebrates the next generation of coders and creators. {<br />}
            {<br />}{" "}
            <span className="w-full">
              <div className="mx-auto p-4 bg-slate-200/30 w-max rounded-md flex">
                <img
                  className="w-16 h-16 mr-8 rounded-md"
                  src="https://www.anthemawards.com/wp-content/uploads/sites/21/2022/10/Sofia-Ongele.jpg"
                />
                <p className="text-end">
                  <span className="text-lg italic pb-2 font-medium">
                    “Make some tech and do a whole lot of good along the way.”
                  </span>
                  <br />~ Sofia Ongele
                </p>
              </div>
            </span>{" "}
            <span className="block text-2xl font-semibold py-6 ">
              Just Another Small Intro About Me
            </span>{" "}
            Since my early childhood, I had a great fascination for computers
            and was curious all the time. Once, during my preschool in the US,
            as a part of our computer lab class, we were asked to, as normal,
            color a picture in a coloring software. I had colored it and was
            soon about to finish when I saw a button that looked pretty much
            like the save button, so I thought I could click on it and save it
            to show it to my mom at home.{<br />}
            {<br />}But, unfortunately, it was the print button and since I
            didn’t see the save dialog opening, I kept pressing it several
            times. I started to hear some mechanical sound but couldn&apos;t
            comprehend where it was coming from. But, my teacher exactly knew
            what was hapening as soon as she heard the sound. She came to me and
            explained what I just did. Then, did it all start, my long voyage on
            this endless journey with technology by playing around, googling it
            up and experimentation, finally realizing the vast possibilities
            technology had. That day I was sure of what I was to become.
            {<br />}
            {<br />}Returning back from the US, I joined in my 2nd grade in {""}
            <a
              className="text-blue-600 font-medium"
              href="https://www.visakhavalleyschool.com/"
            >
              Visakha Valley School
            </a>{" "}
            and glancing through my computer textbook made me feel, it was way
            below the standard, so I mostly used to learn from the internet -
            learning how to google stuff - and soon we learned about programming
            languages in grade 3. Then when we were playing around with{" "}
            <a
              href="https://en.wikipedia.org/wiki/Logo_(programming_language)"
              className={`font-semibold ${roboto_mono.className} mx-1`}
            >
              Logo
            </a>{" "}
            and{" "}
            <a
              href="https://turtleacademy.com/"
              className={`font-semibold ${roboto_mono.className} mx-1`}
            >
              Turtle
            </a>
            , I was like{" "}
            <span className="italic opacity-70">
              “What! We just write this code to draw a line ...?”
            </span>{" "}
            And then I started to question
            <span className="italic opacity-70">
              “How can we write apps like the ones which we use in daily-life on
              our phones and computers”
            </span>
            , then I started googling, asking my relatives and going haywire!{" "}
            {<br />}
            {<br />}Finally, I got to know that I needed to learn other
            languages like{" "}
            <span
              className={`${roboto_mono.className} mx-1 px-2 bg-blue-400/20 dark:bg-blue-800/30 py-1 rounded-lg`}
            >
              Java, Swift, VisualBasic, C++, Python and XML
            </span>{" "}
            to make them. Soon, I got to know of Rob Percival sir courses on
            Udemy, then I persuaded my parents to buy me the courses and I was
            even awarded certification for it by the {""}
            <a
              href="https://www.the-cca.org/"
              className="text-blue-600 font-medium"
            >
              Cambridge Certification Authority.
            </a>
            <span className="block text-2xl font-semibold py-6">
              Exploring the Appleverse
            </span>{" "}
            Throughout the course, he used the macOS Operating System. Who
            can&apos;t resist but to fall in love with the operating system, so
            I persuaded my parents to get me an iMac. Bearing to all the effort
            and the prize money I received in a national-level competition, I
            finally bought an iMac. {<br />}
            {<br />}Also, I had this craze of working with the latest OS
            available, and once, while searching about the latest in macOS, I
            stumbled upon the WWDC annual developer conference. Without a second
            though, I watched it in a sitting and that was how I got to know
            about WWDC Scholarship! {<br />}
            {<br />}I first participated in the year 2019 after learning all the
            fundamentals of the{" "}
            <a
              href="https://developer.apple.com/swift/"
              className="text-blue-600 font-medium"
            >
              Swift
            </a>{" "}
            language and writing few apps to get the feel of coding. Sadly, I
            was rejected and so I continuously followed the Apple developer
            website this year. What could stop me from being eagerly waiting for
            the WWDC Scholarship 2020 and being tensed whether will it be hosted
            or not in such a global crisis situation that clouded us. {<br />}
            {<br />}
            <span className="block text-2xl font-semibold py-6">
              Apple’s Swift Student Challenge 2020!
            </span>{" "}
            Still keeping hope I waited, improving my skills and at last, I did
            receive an email invitation for Apple’s Swift Student Challenge, so
            I thought it would be a bit different this year. I participated
            especially for the reason that I could interact with all the other
            coding intellectuals out there and have an opportunity to earn the
            Apple Developer Membership on my own stand. Also, the fact of
            bearing the tag of being an{" "}
            <span className="italic opacity-70">
              ‘Apple Swift Student Challenge’
            </span>{" "}
            winner itself gives me extreme pleasure, atleast the dream of being
            one did! {<br />}
            {<br />}
            Seeing the situation that the novel coronavirus 2019 has created
            around me, made me question myself if I, as a student and developer
            could help in this global crisis and challenging time. Then, did an
            idea breach into my head:{" "}
            <span className="font-semibold">
              an experience that could bring awareness to people about the {""}
              <span className="text-blue-600">
                precautions, preventions
              </span>{" "}
              and things to <span className="text-blue-600">protect</span>
              {""} ourselves from COVID19 as well as{" "}
              <span className="text-blue-600">preserve</span> and enrich our
              health in a playful and interactive way for everyone.
            </span>
            {<br />}
            {<br />}We mainly tried to focus our interactive playgroundbook to
            helps kids get to know about coronavirus easily while having fun. We
            started with the basic Swift Playgrounds Author template and started
            to build a basic game. Soon, stage by stage, step by step, we
            improvised and now it builds upon the{" "}
            <span
              className={`${roboto_mono.className} mx-1 px-2 bg-blue-400/20 dark:bg-blue-800/30 py-1 rounded-lg`}
            >
              SpriteKit, PlaygroundSupport, UIKit, Foundation, BookCore
            </span>
            . It has been coded in <span className="font-semibold">Xcode</span>{" "}
            and been made for{" "}
            <span className="font-semibold">Swift Playground 3.3</span> on the
            iPad. {<br />}
            {<br />}We designed assets with inspiration from assets available
            online using <span className="font-semibold">Photoshop</span> and
            used few assets from shutterstock and clipart libraries which we
            felt were bit difficult to design. We tested the app on{" "}
            <span className="font-semibold">iPad Air 2</span> and were elated
            upon successfully building my first Swift Playgroundbook. I&apos;d
            thank Apple for such a wonderful opportunity and for providing the
            tools required to build this PlaygroundBook. {<br />}
            {<br />}
            <span className="block text-2xl font-semibold py-6">
              My feeling about winning Swift Student Challenge?{" "}
            </span>
            I was eagerly waiting the whole night for the results, felt tensed
            and was <span className="text-blue-600">ruminating all night</span>{" "}
            about the result which would be declared that night and thus
            couldn’t get sleep. {<br />}
            {<br />}I woke up early that morning, at about{" "}
            <span className="text-blue-600">4 A.M.</span> and to my surprise, I
            did receive the acceptance email. I checked twice and thrice as I
            couldn&apos;t digest nor confirm what my eyes were looking at and
            then was on cloud nine. It was the best moment of my whole life. I
            could never thank God enough and all the people who have sculptured
            me so that I could achieve this. {<br />}
            {<br />}I was literally on cloud nine as it was{" "}
            <span className="text-blue-600">a dream come true</span>! {<br />}
            {<br />}
            <span className="block text-2xl font-semibold py-6">
              Going forward, what I aspire
            </span>{" "}
            Going forward, I feel{" "}
            <span className="font-semibold">extreme responsibility</span> to
            direct my coding skill to make apps useful and used by all and the{" "}
            {""}
            <span className={`mx-2 ${roboto_mono.className}`}>
              Swift Student Challenge
            </span>{" "}
            has given me the opportunity and the platform to reach out to the{" "}
            {""}
            <span className="font-medium">
              public and express my thoughts and ideas to the world
            </span>
            . I&apos;ve gained extreme inspiration from Apple&apos;s founder{" "}
            <span
              className={`mx-2 ${roboto_mono.className} bg-blue-200/50 py-1 px-2 rounded-md`}
            >
              Steve Jobs
            </span>
            after reading his biography and book &apos;Steve Jobs&apos; and{" "}
            <span
              className={`mx-2 ${roboto_mono.className} bg-blue-200/50 py-1 px-2 rounded-md`}
            >
              The Steve Jobs Way
            </span>
            . {<br />}
            {<br />}His perfectionism, simplicity, determination, looking even
            into the most minute detail and his user-perspective really blew my
            mind and to such an extent that I even performed a small skit about
            his life&apos;s journey at school.
            <br />
            <br />
            Progressing, winning this challenge has given me a tremendous boost
            and motivation to make more apps and to reach my goal of one day,
            coming up on stage and speaking on the WWDC stage as CEO.{" "}
            <span className="font-semibold text-blue-500">Trivia: </span>I wish
            to give the Keynote there on the WWDC Keynote Stage! {<br />}
            {<br />}
            <span className="inline">
              <div className="flex items-center opacity-75 mx-8">
                <div className="w-2 bg-black dark:bg-white h-28"></div>
                <span className="italic mx-8">
                  Yes, I am working on a few cross-platform apps like{" "}
                  <span className={`${roboto_mono.className} italic`}>
                    <span className="text-blue-600">
                      &apos;BeCoronaReady&apos;
                    </span>
                    , &apos;EcoFun&apos;, and &apos;Memories&apos;
                  </span>
                  . Seeing the vast opportunity that technology offers to be
                  able to shape the world, I thought of translating my
                  playground, Be Corona Ready, to an interactive game that helps
                  to bring awareness regarding the various prevention methods to
                  be taken to stay safe from nCOVID19 and be responsible as
                  given by the World Health Organisation (WHO)!
                </span>
              </div>
            </span>
            {<br />}
            {<br />}
            <span className="text-blue-600 font-medium">EcoFun</span> is an app
            for solving climate change —{" "}
            <span className="text-blue-500">
              Nourish our Blue & Green Planet
            </span>{" "}
            - by helping us{" "}
            <span className="font-semibold">measure our carbon footprint</span>,
            encourage us to grow trees and be eco friendly as we, humans gifted
            with enormous potential have the responsibility to{" "}
            <span className="font-semibold">
              strive together to stop global climate issues
            </span>
            , generated by our actions. {<br />}
            {<br />}
            <span className="text-blue-600 font-medium">Memories</span> is a
            social media app which I believe can help in recollecting our golden
            memories in our life and promoting AI as a cure people’s mental
            health. {<br />}
            {<br />}
            <span className="block text-2xl font-semibold py-6">
              What are you looking forward from WWDC ’20?
            </span>{" "}
            <span className="inline">
              <div className="flex items-center opacity-75 mx-8">
                <div className="w-2 bg-black dark:bg-white h-16"></div>
                <span className="italic mx-8">
                  &quot; We can&apos;t get through a single day without having
                  an impact on the world around us. What we do makes a
                  difference and a step in being the change we want to see in
                  the world. &quot;
                </span>
              </div>
            </span>{" "}
            <br />
            And I believe that WWDC is such a platform which guides us in
            developing stuff to make such changes in the world. I hope it will
            also be a fun day getting to chat and interact with so many of our
            incredible Swift Student Challenge winners and {""}
            <span className="font-semibold">hearing their stories</span>!{" "}
            <span className="font-medium text-blue-500 ">
              It’s going to be a fantastic week!
            </span>{" "}
            Also, I can’t wait to look forward about the latest updates and
            features that Apple has in store for us. {<br />}
            {<br />}Concluding, I am very happy that Apple supports and nurtures
            the next generation of developers through its annual WWDC student
            program — and it’s just one of the many ways that WWDC20 is
            recognizing and celebrating coders and innovators of all ages and
            backgrounds. For the first time ever, there will be a special
            collection of curated sessions perfect for budding coders and
            designers, and daily Swift Playgrounds challenges that anyone can
            participate in and enjoy.
          </p>
        </div>
      </main>
    </div>
  );
}
