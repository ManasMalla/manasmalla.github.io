"use client";
import { Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
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

export default function IdeaSprint() {
  const [surpriseVisiblity, setSurpriseVisibility] = useState(false);
  return (
    <div className={`dark:bg-black ${plus_jakarta_sans.className}`}>
      <header className="p-8 lg:px-16 dark:bg-slate-950 dark:text-white flex flex-col gap-4">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://media.licdn.com/dms/image/D5603AQFYsCJRGlxWqQ/profile-displayphoto-shrink_800_800/0/1678267583894?e=2147483647&v=beta&t=_pEcFZ5qeHoIH2eVvOD-gULQAlC0yGEx22JNU9S5WOQ"
            />
            <Menu className="hidden lg:flex" />
            <h4 className="text-lg lg:text-2xl font-semibold hidden lg:flex ">
              Manas Malla
            </h4>
          </div>
          <div className="flex items-center gap-8">
            <Search />
            <ChevronDown />
            <button className="flex bg-white px-6 py-2 rounded-full font-semibold text-black">
              <UserPlus className="p-1 lg:mr-2" />
              <p className="hidden lg:flex">Follow</p>
            </button>
          </div>
        </div>
      </header>
      <main className="px-8 lg:px-24 py-16 dark">
        <div className="gap-8 flex flex-col items-center dark:text-white">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684574906816/95f6c7fe-6ef0-4761-978b-c29cea264b60.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
            className="w-3/4"
          />
          <h1 className="text-3xl lg:text-5xl font-semibold text-center">
            The 48 Hour Ideathon
          </h1>
          <h3 className="text-xl lg:text-3xl opacity-80">Behind the Scenes</h3>
          <div className="flex items-center gap-4 text-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://media.licdn.com/dms/image/D5603AQFYsCJRGlxWqQ/profile-displayphoto-shrink_800_800/0/1678267583894?e=2147483647&v=beta&t=_pEcFZ5qeHoIH2eVvOD-gULQAlC0yGEx22JNU9S5WOQ"
            />

            <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">Manas Malla</h4>
              <div className="opacity-70">•</div>
              <h4 className="opacity-70">May 21 2023</h4>
              <div className="opacity-70">•</div>
              <Book className="inline-flex w-4 h-4 opacity-70" />
              <h5 className=" opacity-70">20 min read</h5>
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
            <span className="block text-lg opacity-70 font-semibold py-6 ">
              Friday, May 5th
            </span>
            <span className="text-3xl">A</span>fter a long tiring day{" "}
            <span className="opacity-60">
              (or hmm... should I say a long tiring week)
            </span>{" "}
            at University, preparing for the weekend, chilling out with friends
            and scrolling through our feed is what any student would be doing.
            Nothing different with me! But out of the blue, something just
            strikes my WhatsApp status feed, one of my seniors at the University
            shares about a forty-eight-hour hackathon that is being organized
            and guess what? The applications were still open.
            <br />
            <br />I couldn&apos;t wait a moment anymore, not even a few seconds
            to inform my buddies that I was going to apply for the ideathon and
            that were going to be my teammates. So, I just tapped the
            registration link, filled in the Google Form, then called up my
            buddies and told them that I registered the four of us in the app
            development category for the 48-hour hackathon that was being
            organized the next day. Excitement was clearly in the air for all
            four of us! We just couldn&apos;t wait for the theme to be announced
            so that we could get to work.
            <br />
            <br />
            Such creative and inquisitive minds, I have as buddies!
            <span className="block text-2xl font-semibold py-6 ">
              The Brainstorming
            </span>
            Without wasting even a second, we started to brainstorm on how we
            would get our project done, charting out plans, assigning roles and
            splitting responsibilities. None of us even know what the topic was,
            nor what was to be done nor ever participated in a hackathon
            earlier, we were just excited to work together and create something
            new, something that could be revolutionary. Yup, it was our first
            hackathon together. Although I once was part of a hackathon,
            organized by GMR Insititute of Technology, I wasn&apos;t able to
            participate in it as I was invited over to be a mentor and judge for
            the hackathon, but, that sure gave me a glimpse of the fun
            hackathons came along with.
            <br />
            <br />
            We soon arrived at a decision that{" "}
            <a
              href="https://www.linkedin.com/in/sreetejadusi/"
              className="text-blue-500"
            >
              Sree Teja Dusi
            </a>{" "}
            would work on the frontend of the project;{" "}
            <a
              href="https://www.linkedin.com/in/lochan-mathukumilli-ab2943240/"
              className="text-blue-500"
            >
              Lochan Mathukumilli
            </a>{" "}
            would work on the B-ideas for our project, whatever that was going
            to be;{" "}
            <a
              className="text-blue-500"
              href="https://www.linkedin.com/in/satwik-varma-657202257/"
            >
              Satwik Varma
            </a>{" "}
            would be responsible for the ideation and mood boarding; and I would
            be working on the backend for the project.
            <br />
            <br />
            We wanted to make sure whatever our project was going to be, it must
            be made available to all and we just had forty-eight hours at hand.
            So, the best solution to move forward with our aim of building an
            application that we could publish to all the platforms now available
            in the market, like Android, iOS, Windows, the Web, etc. was to go
            for building the app using a cross-platform framework like React,
            Flutter, Compose Multiplatform. Soon after a series of heated up
            arguments and discussions, we all finally agreed that Flutter was
            the best choice keeping in mind the stability and support the
            framework provided.
            <br />
            <br />
            What we would wait for? Nothing. So, all of us got to work! I was
            brushing up my backend skills, Dusi was going through the Flutter
            docs, Lochan was scanning through the web for the latest in blue
            oceans and their strategy and Satwik sat down with his eyes gleaming
            as he scrolled through the vast ocean of UI/UX designs that the web
            embedded in it.
            <span className="block text-2xl font-semibold py-6 ">
              Day 1: Ideation and Designing
            </span>
            Waking up early in the morning and getting ready to code! Alas, the
            day arrived. As the hour, minute and seconds hand of the clock
            exactly struct the number twelve, a mail popped up.
            <br />
            <br />
            You might just be wondering how crazy are we people who stayed up
            till midnight just to check their mail for a hackathon that was for
            forty-eight hours. But the truth ends up being that we never sleep
            before midnight. It just doesn&apos;t happen. Managing our
            academics, having fun with friends and family, tuning in to the
            latest updates in our interests, and working on personal projects,
            twenty-four hours is just less to get it all done.
            <br />
            <br />
            The mail read as follows
            <br />
            <br />
            <span className="inline">
              <div className="flex items-center opacity-75 mx-8">
                <div className="w-1 bg-black dark:bg-white h-96"></div>
                <span className="italic mx-8">
                  Dear participant, thank you for joining GCGC - CD&apos;s
                  &quot;Join the Ideathon Challenge&quot;! Please find the
                  below-attached problem statement and tasks as well.
                  <br />
                  <br />
                  <span className="font-bold">Problem Statement - 2</span>
                  <br />
                  Many students miss important academic events, such as
                  lectures, seminars, and meetings, due to a lack of awareness
                  or forgetfulness.
                  <br />
                  To address this challenge, your task is to develop a mobile
                  application that helps students stay informed about upcoming
                  academic events and deadlines.
                  <br />
                  <br />
                  The app should have the following features:
                  <br />
                  <br />
                  <ol className="list-decimal">
                    <li>
                      Create a calendar feature that allows students to view and
                      manage their class schedules, exam dates, and other
                      important academic events.{" "}
                    </li>
                    <li>
                      Develop a notification system that sends reminders to
                      students about upcoming events, deadlines, and other
                      important information.{" "}
                    </li>
                    <li>
                      Implement a feature that allows students to customize
                      their notification preferences and to set reminders for
                      specific events or tasks.
                    </li>
                    <li>
                      Design a user-friendly interface that is visually
                      appealing and easy to navigate, and that makes it easy for
                      students to access and use the app&apos;s features.
                    </li>
                  </ol>
                  <br />
                  You can work as long as you&apos;re happy with your solution
                  till 7th May EOD.
                </span>
              </div>
            </span>{" "}
            <br />
            To our surprise, the organizing committee shared the different
            features that they needed in the application. Half of the work was
            already done! It was like getting a 50% discount at a big shopping
            mall.
            <br />
            <br />
            As they always say, brainstorming and preparing a list of tasks to
            be done to accomplish something is the best way to achieve success,
            make sure we didn&apos;t drift away and remind us of what&apos;s
            left. So, having faith in what people say, we went ahead and did
            just that.
            <span className="block text-xl font-semibold py-6 ">
              Our To-Do List
            </span>
            <ol className="list-decimal ml-12">
              <li>Collect inspiration and prepare a mood board.</li>
              <li>Research, Research and More Research.</li>
              <li>
                Fine pick the app&apos;s styles, typography, color schemes,
                shapes and sizes.
              </li>
              <li>Ideate the app&apos;s name</li>
              <li>Imagine the app&apos;s logo</li>
              <li>Sketch out the app&apos;s wireframe.</li>
              <li>Draw and vectorize all the vectors we needed for the app</li>
              <li>
                Design the low-fidel and high-fidelity prototypes with Figma
              </li>
              <li>
                Plan out the app&apos;s architecture and identify the modules.
              </li>
              <li>
                Create a Flutter project and share it across GitHub (so that we
                could collaborate)
              </li>
              <li>Kickstart by coding all the screens in the :ui layer</li>
              <li>Setup Firebase in the project</li>
              <li>Wire up the :ui-components with the backend</li>
              <li>
                Test the app vigorously on varied platforms and form factors
              </li>
              <li>Fill in the submission form</li>
            </ol>
            <span className="block text-xl font-semibold py-6 ">
              #1. Inspiration
            </span>
            With our checklist prepared, Satwik now set out on a long voyage
            across the Google seas, to explore various user interfaces and
            experiences which made sure our design was unique, still fit the
            expectations a user generally would have on a learning management
            system and the flow wasn&apos;t difficult to navigate and use. After
            a few hours of searching the creative wide web, Satwik prepared the
            mood board.
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684579729697/c9b6f9b3-983c-46e6-aa94-40ffb9d06488.png?auto=compress,format&format=webp"
              className="mt-8"
            />
            <span className="block text-center mt-2 mb-4 opacity-70">
              Our Moodboard
            </span>
            <span className="block text-xl font-semibold py-6 ">
              #2. Research
            </span>
            Once we had everything we needed to get started building something
            new, the next thing would be to research. Reading articles, browsing
            Medium and Dribble, exploring typefaces and styles, and researching
            color psychology.
            <img
              src="https://pbs.twimg.com/media/FCz1ylnXEAoyueR?format=jpg&name=4096x4096"
              className="mt-8"
            />
            <span className="block text-center mt-2 mb-4 opacity-70">
              A overview of the Material Design website
            </span>
            <br />
            The best place a designer can go to research design systems is the
            Material 3 Design website by Google. It&apos;s a non-exhaustive
            resource that you can venture into and keep venturing for hours,
            exploring a sub-link and it just becomes a recursive function. It
            includes everything from the foundation like shape, color, type, and
            accessibility and complex topics like layout, design tokens, motion,
            and best practices. It includes an extensive list of components,
            their specifications, documentation and implementation guidelines
            for a varied range of platforms.
            <span className="block text-xl font-semibold py-6 ">
              #3. Judging
            </span>
            Now comes the fun part as we&apos;ve finished all of the research,
            it&apos;s time to experiment, have fun and choose what best our
            idea.
            <span className="block text-lg font-semibold py-6 ">
              1. Typography
            </span>
            Typography is an essential part of branding. Typography isn&apos;t
            just about choosing a good-looking font, and selecting font size,
            but instead undermines the essence and feel of our product, i.e.
            what it conveys. Although it isn&apos;t defined anywhere, every
            typeface has an emotion that is connected with it.
            <img
              src="https://lh3.googleusercontent.com/dxg8esuYNTQQtfwR5hRz_qy6p0y1r7nRARA00et-uET8ERZ1ZvmPhaoua95Jmd2W1DvIV5z34v8MM8HCquq5Uf_ImFA-yKv5GjLoEqbwEzcq=s0"
              className="mt-8"
            />
            <span className="block text-center mt-2 mb-4 opacity-70">
              A overview of the Material Design typography styles
            </span>
            <br />
            For example, the first emotion people feel when they look at a serif
            font is the big headlines that newspapers get printed with, whereas
            a bold complex calligraphy script font would emphasize creativity. A
            sans serif font would give the reader a more professional feeling
            but at the same is easy for the user to read amidst crowded long
            paragraphs of text even a small size, whereas a display font would
            be attractive and can be understood only when used at a larger type
            scale, suitable for headings.
            <br />
            <br />
            We knew right from the start that we needed our typeface to be
            professional and easy to read, so a combination of a good display
            font and a sans-serif font for the body would be a perfect match.
            After a few hours of scrolling through the Google Fonts page, we
            felt Poppins font would be the best for our app with its simplicity
            and wide range of font weights.
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684584898777/1c5c872f-ff3c-42a7-9bdc-2b4e96b983b3.png?auto=compress,format&format=webp"
              className="mt-8"
            />
            <span className="block text-center mt-2 mb-4 opacity-70">
              G-Samay: Typography
            </span>
            <br />
            <span className="block text-xl font-semibold py-6 ">2. Color</span>
            Color is used to express style and communicate meaning. A design
            usually looks best when a primary color, a secondary color, tertiary
            color (together called accent colors) and neutral color are put to
            use. Color psychology is the study of how different colors affect
            human mood and behavior. It explores how colors can influence
            emotional responses, as well as how responses to color are affected
            by factors such as age and cultural background.
            <img
              src="https://lh3.googleusercontent.com/SXDcKYOGhQLlTHAwC5mw0Ax008YQIdUvKeevqSy_K9Kl91F_Qi3wDMoDNXAJ8ltD7wKM1Tgfeo5GZyMsf-d6GqrS2wrkWcozoXhIpCYcG2c=s0"
              className="mt-8"
            />
            <span className="block text-center mt-2 mb-4 opacity-70">
              G-Samay: Typography
            </span>
            <br />
            For example, a shade of blue might convey an emotion of calmness,
            peacefulness, loyalty, competence or productivity; whereas a shade
            of green conveys an emotion of nature, safety, healing, and
            freshness. A shade of yellow shares a feeling of creativity,
            happiness, and warmth; whereas a shade of red provides an emotion of
            love, energy, strength, confidence, excitement or love. White shares
            an emotion of simplicity, cleanliness, innocence and honesty;
            whereas black gives a feeling of formality, mystery, sophistication,
            power and security.
            <br />
            <br />
            However, while choosing our color palette, we made sure we
            didn&apos;t deviate from the parent brand. Our app shouldn&apos;t
            feel disconnected, it should be seamless and feel known. GITAM
            follows a strong branding, a shade of red and yellow with a tint of
            black and white, and a bit of blue here and there.
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684600505150/4669bf9f-39c2-425f-b385-7ee21261bb37.png?auto=compress,format&format=webp"
              className="mt-8"
            />
            <span className="block text-center mt-2 mb-4 opacity-70">
              G-Samay: Color Scheme
            </span>
            <br />
            Going by the Material Design guidelines and using the Material Theme
            Builder, we finally decided that a particular hue of red would be
            perfect as the primary color, the shade of yellow would perfectly
            match as the secondary color, and green would a tertiary color.
            White and black would the neutral colors. A design usually has 60%
            of the neutral color, 30% of the primary color and 10% of the
            secondary color.
            <span className="block text-xl font-semibold py-6 ">3. Name</span>
            Our task was to build an application that could help students keep
            track of their academic events so that they never missed out on an
            opportunity again. So we felt our name should revolve around
            something that conveys learning, academic event, planning, reminder,
            and time management. At the same time, we wanted to include that the
            app was a part of the GITAM ecosystem, so it had to have the GITAM
            or G.
            <br />
            <br />
            We had a few iterations before we stumbled upon G-Samay.
            <br />
            <br />
            <span>
              <div className="flex">
                <div className="w-1/2 my-auto px-8">
                  <img
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684601949818/fc974899-8862-489e-bd9a-53f53fe61360.png?auto=compress,format&format=webp"
                    className="mt-8"
                  />
                  <span className="block text-center mt-2 mb-4 opacity-70">
                    Brainstorming names for an LMS
                  </span>
                </div>
                <p className="w-1/2">
                  It just stuck to our minds that the name should carry along
                  with it some heritage, some touch of Sanskrit, even we
                  weren&apos;t convinced why it was so, but we just felt it
                  sounded good, so we went along. At first, Dusi suggested going
                  along with G-Vidhya, as it is translated to learning at GITAM
                  as that was the first thought we got when we knew we were
                  building an LMS.
                </p>
              </div>
            </span>
            <br />
            However, I felt that truly didn&apos;t connect to the problem
            statement, so brainstorming, I came up with a few options that
            closely resembled our aim: G-Aayojan{" "}
            <span className="opacity-60">
              (trans. <span className="italic">G-Planning </span>)
            </span>
            , G-Suchit{" "}
            <span className="opacity-60">
              (trans. <span className="italic">G-Remind</span> or{" "}
              <span className="italic">G-Inform </span>)
            </span>{" "}
            and G-Samay{" "}
            <span className="opacity-60">
              (trans. <span className="italic">G-Time </span>)
            </span>
            .
            <br />
            <br />
            I truly believe in making sure we made sure everyone&apos;s voice
            was heard and they have their say in decision-making. So, we took a
            poll on WhatsApp and G-Samay took the majority of the votes, with
            everyone except me voting for G-Samay.
            <br />
            <br />
            <span className="italic opacity-60">
              PS. I voted for G-Suchit as I believed it gave more context to
              what the app was about, informing the user, but the majority wins.
              They believed the app name should roll off the tongue and be easy
              to remember. Who would want to remember a weird Sanskrit name just
              to remind them of academic events which students would mostly be
              not interested in, in the first place?
            </span>
            <span className="block text-xl font-semibold py-6 ">4. Logo</span>
            Initially, we thought to go with the GITAM logo as the logo for our
            app. But, I believed there should be some distinction. After all, we
            weren&apos;t building an app to promote GITAM or shared about GITAM,
            we were building a platform that helped students and teachers at
            GITAM manage their schedules and stay updated on academic events.
            <br />
            <br />
            <span>
              <div className="flex">
                <div className="w-1/3">
                  <img
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684601898263/687ce872-1c5b-4098-9a79-cd64dff4fd6f.png?auto=compress,format&format=webp"
                    className="mt-8 w-28 mx-auto"
                  />
                  <span className="block text-center mt-2 mb-4 opacity-70">
                    G-Samay: The Logo
                  </span>
                </div>
                <p className="w-2/3">
                  I wanted to make sure our logo conveyed time, a reminder,
                  included the G (for GITAM) and included the brand colors. So
                  after hours of sketching in my diary and huge cups of cold
                  beverage (p.s. it was such a hot weekend), I finally arrived
                  at a few possible sketches. Sipping a bit more cold iced tea,
                  a few polls, a few drags and drops with Illustrator and there
                  we had it. Alas, we had our logo!
                </p>
              </div>
            </span>
            <br />
            We now had everything in place, strong branding, typography styles,
            a story people could connect to and a perfect name. But, it was
            afternoon already!
            <span className="block text-2xl font-semibold py-6 ">Lunch</span>
            It was 1 PM already, that too on a Saturday afternoon. The aromatic
            smells of freshly prepared Sambhar, steaming on the stove, how on
            Earth could anyone work with such a distraction? That too tasty
            yummy sambar! No chance. At least not me! Filled with all the
            nutrients in a single plate, that would surely boost my
            productivity.
            <br />
            <br />
            <span>
              <div className="flex">
                <p className="w-2/3">
                  All that Vitamin A in those orange carrots, that protein in
                  the dal, all those energy-giving carbohydrates in the rice ( I
                  overeat when its sambar ), all those other vitamins and
                  minerals in all those vegetables like lady&apos;s fingers,
                  bottle guard, sweet potato, brinjal... my mouth is already
                  water just describing the day&apos;s lunch. Although people
                  suggest having lunch like a prince, I definitely ate like a
                  bakasura.
                </p>
                <div className="w-1/3">
                  <img
                    src="https://geekrobocook.com/wp-content/uploads/2021/03/49_Sambar.jpg"
                    className="ml-8 h-48 object-cover"
                  />
                  <span className="block text-center mx-auto mt-2 mb-4 ml-16 opacity-70">
                    Sambar: The Indian Stew
                  </span>
                </div>
              </div>
            </span>
            Now back to the tabletop.
            <span className="block text-xl font-semibold py-6 ">
              #3. Wireframing
            </span>
            Now comes the most interesting part, brainstorming and pulling
            everything we have till now into a wireframe, i.e. a well-described
            workflow that a user would have to go through to use the
            application. Usually, it consists of the list of the screens that
            the app would have, what are the different options the user would be
            presented with, what steps the user need to take to get a particular
            task done, etc.
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684605130319/6424a9c3-83f2-4681-8996-0e2e90bf0cab.png?auto=compress,format&format=webp"
              className="mt-8"
            />
            <span className="block text-center mt-2 mb-4 opacity-70">
              G-Samay: App Workflow and Architecture (FigJam)
            </span>
            <span className="block text-xl font-semibold py-6 ">
              #4. Designing
            </span>
            Now, was the time to get creative. Three different window sizes to
            target to make sure our app looked great on all the device form
            factors out there: Compact{" "}
            <span className="text-blue-500">(w &#60; 600)</span>, Medium{" "}
            <span className="text-blue-500">(840 &#62; w &#62; 600) </span> and
            Expanded <span className="text-blue-500">(w &#62; 840)</span>.
            <br />
            <br />
            Initially, we had a few renders of the design with about a lot of
            whitespace, then we included more of the primary color and added
            illustrations, we felt something wasn&apos;t right. We tried a
            varied range of shapes and layout structures. Rounded corners??
            Nope. Padding?? Nope. Color?? Nope. It was getting high time and
            still we hadn&apos;t finished preparing our prototype. Time was
            running out of our hands and confidence was running out like water.
            <br />
            <br />
            So, we thought to give our overclocked brains a bit of rest. No
            creative idea was crossing our minds, we weren&apos;t able to decide
            what was missing. Something just missed. So, all of us concluded
            that whatever happens would happen, we just needed a few hours of
            relaxation time. After all, all work and no play makes Jack a dull
            boy! Tuning into the classics on Spotify, watching a few movies, and
            munching on cheesy pasta, that&apos;s what I did. After a 5-hour
            refresh break, followed by dinner, it was 9 in the night. After
            researching and exploring the GITAM page, checking out our mood
            board and the vast web, and around ten iterations, we finally
            arrived at our layout.
            <br />
            <br />
            An image of GITAM overlayed with a dark color to ensure color
            contrast and accessibility, with bright illustrations was the best
            iteration we arrived at for the first screen that the user would be
            greeted with. Later screens would have 60% of the primary color, and
            a lot of white space so that the design could breathe, and it was
            easy for people to read at a glance.
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684686823077/461ae0e7-448b-4e12-88eb-23bce33dab0f.png?auto=compress,format&format=webp"
              className="mt-8"
            />
            <span className="block text-center mt-2 mb-4 opacity-70">
              An overview of G-Samay
            </span>
            <br />
            Once we were in the flow, nothing could break us down. Screen after
            screen, it took us 2 hours, but we were done and we felt we did a
            satisfactory job and that we could improve over time. Especially
            with our parents pushing us to bed, and after a long tiring day, we
            too got coaxed and fell asleep.
            <span className="block text-2xl font-semibold py-6 ">
              Day 2: Code, Code and More Code
            </span>
            <span className="block text-xl font-semibold py-6 ">#5. Code</span>
            <span className="block text-lg font-semibold py-6 ">
              The Big Shock
            </span>
            The next day, we couldn&apos;t get up till 11, at least the some of
            us. I at least didn&apos;t have the golden opportunity to sleep till
            eleven. It was Sunday family time, an hour-long walk along the
            beach.
            <br />
            <br />I knew we still had a lot to do. We didn&apos;t even get
            started coding. The time was eleven. I called up Dusi and told him
            that we had to get started or else we wouldn&apos;t make it on time.
            <br />
            <br />
            Then, the biggest bomb just exploded in my chat. I couldn&apos;t
            expect that even in my wildest dreams. Dusi&apos;s dad had to take
            his laptop to an event as a part of his profession and Dusi was left
            with no laptop and we had a project to code. He was too far away
            with his mom alone, and couldn&apos;t come over.
            <br />
            <br />
            Unicorns started to stampede in my mind. Complete coding a project,
            both the front end and the back end, all by myself that too in a
            day? That was such a BIG IF question! As big as the Eiffel Tower
            itself. At that moment, I felt how great it would have it has been
            if this was a prototype building competition, the design came
            amazing. Would I be able to finish the app on time, would I be able
            to code it in time that too so well that it resembled the prototype,
            I had over ten screens to code and a backend to connect.
            <span className="block text-lg font-semibold py-6 ">
              1. The Front End
            </span>
            However, I couldn&apos;t let all of our hard work go in vain, it
            needed to be in the competition, and I needed to push myself. I just
            couldn&apos;t see my friends sad. Taking it up as a challenge and
            not losing hope, I created the Flutter project. I knew if there was
            any chance of me completing the project on time, it was if I could
            complete coding all the screens before 4 PM the day.
            <br />
            <br />I was nothing different than a bull that day. A huge 27-inch
            4K display beside my powerful MacBook Pro, which I used as an
            external display would have the Figma design, my Android device
            plugged in so that I could see real-time updates in my code, and my
            fingers running over the keyboard as fast as the wind. It was
            exactly 4 when I completed wiring up all the screens. A sight of
            relief could be seen in my eyes, but it was the UI module that I
            just finished. I hadn&apos;t written any of the backend or the logic
            that was needed. The app now was nothing more than a Figma
            prototype, it had no rules, no logic, just the button would take you
            to the next screen.
            <br />
            <br />
            Without taking a break or a moment to rest or think, my brain
            constantly delivered the best solutions to the most difficult logic,
            such that I felt my problem-solving skills could write an algorithm
            even when I was asleep. It felt like I was Ved Vyas reciting the
            Mahabharata (explaining about my app and the feature) and my brain
            like Lord Ganesha worked out the logic seamlessly without a delay.
            <span className="block text-lg font-semibold py-6 ">
              2. The Back End
            </span>
            It was almost 6 PM by the time Firebase Authentication was in place.
            Butterflies started to fly again in my stomach. I still had a
            notification system to implement, a calendar to schedule and view
            events, a custom dialog to add to the calendar, connecting that data
            to the backend, and I just had 6 hours more.
            <br />
            <br />
            Connecting Firestore took another hour, and wiring up all the logic
            and rules for navigation consumed another precious hour. Sweat
            started to drip. My 80 wpm typing speed wasn&apos;t able to match up
            to the seconds hand that the clock wouldn&apos;t slow down. My
            confidence started dropping. Hands started shaking up. Three more
            hours into the night and I had just finished coding the backend for
            the class schedules, events, and the server-side code of the
            calendar. However, I still had to wire the calendar&apos;s UI to the
            server&apos;s backend and implement the notification service. Had I
            just forgotten, I still had to code the profile screen which we
            forgot to include in the design phase. It was eleven already. Just
            60 minutes, i.e. 3600 seconds left.
            <br />
            <br />
            Among all these hurdles, suddenly I got a call. It was like finding
            a pool of water amid the Kalahari desert. It was Dusi&apos;s call.
            His dad returned from the concert and he got his laptop back.
            Without a moment to waste, I shared the project on GitHub and I gave
            him the project report in a few minutes so that he could jump right
            in. It was such a big relief and confidence booster.
            <br />
            <br />I asked him to link up the calendar page with the backend and
            write the code to add custom events with the help of a dialog. While
            he was on that task, I quickly implemented notifications as I had
            some prior experience implementing notifications in a Flutter app as
            a part of my internship. However, there was a slight twist, I
            couldn&apos;t now implement Firebase Cloud Messaging and pair it up
            with Cloud Firestore in an hour&apos;s time, but I had to push
            notifications dynamically before an event in the user&apos;s
            calendar.
            <br />
            <br />
            Luckily, the awesome_notifications package for Flutter came with a
            schedule parameter that took in a NotificationCalendar that would
            schedule the notification and display it even if the app was closed.
            So, now I just had to fetch the list of all events during app
            startup, cancel all previously scheduled notifications and schedule
            the new batch of the events. It was such a lifesaver. The time was
            11:30 PM and I was done with my task and Dusi was nearly finished.
            The time was running, I still had to stitch everything into an APK
            that I needed to submit. But, Dusi is very good at giving chills
            down my spine.
            <br />
            <br />
            We just had 15 minutes left and he was still not finished. I tried
            calling him up, but he wouldn&apos;t respond. I didn&apos;t know
            what to do. I started to fill in the submission form. It was just
            like the teammate who would eagerly wait for his teammate to hand
            him over the relay race stick to do his part. I thought let&apos;s
            submit the project, at least they would consider it and the fact
            that we were in our first year. At least, we would be given a
            certificate of participation! However, while I was typing flutter
            build apk, our great developer responds with the message{" "}
            <span className="text-[0.7rem] px-1 opacity-50">
              (Tap on the card to reveal the surprise!)
            </span>
            :
            <span
              className="block p-8 bg-blue-500 dark:bg-white m-8 rounded-lg text-white dark:text-black text-center cursor-pointer"
              onClick={() => {
                setSurpriseVisibility(!surpriseVisiblity);
              }}
            >
              {!surpriseVisiblity ? (
                <p>Surprise....! 🤫</p>
              ) : (
                "The feature is done! Check it out. Pandagow 🎉"
              )}
            </span>
            Just 5 min before the competition ended did we upload our project to
            GitHub, submit the Google Form with the application link!
            <span className="block text-2xl font-semibold py-6 ">
              Wrapping it up
            </span>
            Such an experience it was! Our first hackathon. Although we had many
            hurdles, we finished our project that too in time. Destinly kept
            hurdling us with challenges, but we took it with a challenging
            spirit and went forward.
            <br />
            <br />
            The passion to build something useful and revolutionary was our
            driving force. We could have completed it, but I am a person who
            always believes in perfection rather than progress.
            <br />
            <br />
            It sure was a learning journey I can never forget, both technically
            and in terms of managing a project! Working on this project helped
            us understand the workflow organizations usually go through for
            building real-life solutions and real-time exposure to working as a
            team creatively.
            <br />
            <br />I hope that sharing my experience through the forty-eight-hour
            hackathon would motivate you to build something and would make sure
            you warn your friends much in advance of last-minute unexpected plot
            twists and not to give up. All it requires is determination,
            self-confidence, passion, a group of crazy friend who are there to
            support you and the madness to believe you can change the world
            around you.
            <br />
            <br />A famous quote that would best fit what just happened is:
            <br />
            <br />
            <span className="inline">
              <div className="flex items-center opacity-75 mx-8">
                <div className="w-1 bg-black dark:bg-white h-36"></div>
                <span className="italic mx-8">
                  When you set out to do something that is going to do a lot of
                  good, the entire universe will be with you and will push you
                  forward, make you do things you never expected you could, only
                  if you don&apos;t give up and success will finally be yours!
                </span>
              </div>
            </span>
            <br />
            <br />
            That was what truly happened, coding an entire project
            single-handedly without even taking a break for a moment, within ten
            hours, was the biggest &apos;IF&apos; question I ever had, but it
            proved that I could do it. The results were finally out, and we were
            all elated to know that we bagged first place!
            <br />
            <br />
            We now can&apos;t wait for the solutions that we are going to be
            building together that would hold the possibility to change a lot
            for the good!
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684692589151/193f1bd4-97ec-46f6-9bfd-bb4a622f291f.jpeg?auto=compress,format&format=webp"
              className="mt-8"
            />
            <span className="block text-center mt-2 mb-4 opacity-70">
              A creative announcing the app development winners of the
              IdeaSprint
            </span>
            <br />
          </p>
        </div>
      </main>
    </div>
  );
}
