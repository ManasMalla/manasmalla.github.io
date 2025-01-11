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

export default function ChaloRajdhaniPretext() {
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
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1711126527385/3fa3b95b-b1ea-4443-933f-41dbfbb7a8d9.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
            className="w-3/4 rounded-2xl"
          />
          <h1 className="text-3xl lg:text-5xl font-semibold text-center whitespace-pre-line leading-10">
            {"Chalo Rajdhani!"}
          </h1>
          <h3 className="text-xl lg:text-3xl opacity-80">- The Pretext -</h3>
          <div className="flex items-center gap-4 text-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://media.licdn.com/dms/image/D5603AQFYsCJRGlxWqQ/profile-displayphoto-shrink_800_800/0/1678267583894?e=2147483647&v=beta&t=_pEcFZ5qeHoIH2eVvOD-gULQAlC0yGEx22JNU9S5WOQ"
            />

            <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">Manas Malla</h4>
              <div className="opacity-70">•</div>
              <h4 className="opacity-70">Mar 22 2024</h4>
              <div className="opacity-70">•</div>
              <Book className="inline-flex w-4 h-4 opacity-70" />
              <h5 className=" opacity-70">8s min read</h5>
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
            <span className="text-3xl">A</span> developer&rsquo;s nightmare:
            Your manager, calling you up in the middle of the night, and asking
            you to fix an issue in the app, written by that essay-writing
            co-developer of yours. Guess what! The d-day is just tomorrow!
            <br />
            <br />
            Scrolling through lines and lines of code. How big can a bug be for
            an expert developer like you?
            <br />
            <br />
            So, you&rsquo;ve just fixed that app-breaking bug in the code.
            Confident, giving yourself a pat on the back and with a huge Colgate
            smile on your face, you tap that small triangle on the right corner
            of the screen, just opposite of the close button. The compiler
            starts to build the app and then your smile starts to invert to a
            huge frown, just realizing that the bug hasn&rsquo;t packed its bags
            and isn&rsquo;t ready to leave just yet.
            <br />
            <br />
            The frown starts turning into a surprise and, soon, a frustration,
            as you&rsquo;re just staring at the pixel-perfect code (after all,
            who was the one who fixed the code...), just like how I stare at{" "}
            <a href="https://sampath.dev" className="text-amber-500">
              @Sampath Balivada
            </a>
            , and yet not find a single flaw.
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1694932205842/64da26ee-8efe-4f3b-986e-2d0cbb5ecefb.jpeg?auto=compress,format&format=webp"
              className="mt-8"
            />
            <span className="block text-center mt-2 mb-4 opacity-70">
              How could God have not made a single mistake when designing
              Sampath Balivada ? How could one be so perfect and yet be soo..
              knowledgeful?
            </span>
            <br />
            After several hours of banging your head, donning the James Bond
            avatar, putting on those shades{" "}
            <a
              href="https://www.linkedin.com/in/lochan-mathukumilli-ab2943240"
              className="text-amber-500"
            >
              @Lochan Mathukumilli
            </a>{" "}
            puts on... flexing that he&rsquo;s a famous investigative detective,
            and massaging that smooth touchpad your Mac comes with, you finally
            arrive at the blackspot.
            <br />
            <br />
            Yup, there is a duplicate of the same block of code and you were
            changing the code in the wrong place. Just imagine the number of
            changes you&rsquo;d have to make in those &rsquo;n&rsquo; number of
            duplications of the same code. So, yeah, that&rsquo;s why functions
            exist to make our life a lot easier, stress-free and grumpy-free.
            <br />
            <br />
            <span className="block text-2xl font-semibold py-6 ">
              What&rsquo;s a Function?
            </span>
            A function is a self-contained block of statements that performs a
            coherent task of some kind.
            <br />
            <br />
            Any program is a collection of one or more functions. If a program
            contains only one function, it must be{" "}
            <span
              className={`${roboto_mono.className} mx-1 px-2 bg-blue-400/20 dark:bg-blue-800/30 py-1 rounded-lg`}
            >
              main()
            </span>
            . There is no limit on the number of functions that might be present
            in a program. Each function in a program is called in the sequence
            specified by the function calls in{" "}
            <span
              className={`${roboto_mono.className} mx-1 px-2 bg-blue-400/20 dark:bg-blue-800/30 py-1 rounded-lg`}
            >
              main()
            </span>
            . After each function has done its thing, the control returns to
            <span
              className={`${roboto_mono.className} mx-1 px-2 bg-blue-400/20 dark:bg-blue-800/30 py-1 rounded-lg`}
            >
              main()
            </span>
            . When{" "}
            <span
              className={`${roboto_mono.className} mx-1 px-2 bg-blue-400/20 dark:bg-blue-800/30 py-1 rounded-lg`}
            >
              main()
            </span>{" "}
            runs out of statements and function calls, the program ends.
            <br />
            <br />
            All functions enjoy a state of perfect equality. No precedence, no
            priorities, nobody is nobody&rsquo;s boss.
            <br />
            <br />
            <span className="inline">
              <div className="flex items-center opacity-75 mx-8">
                <div className="w-1 bg-black dark:bg-white h-28"></div>
                <span className="italic mx-8">
                  Any function can be called from any other function. Even{" "}
                  <span
                    className={`${roboto_mono.className} mx-1 px-2 bg-blue-400/20 dark:bg-blue-800/30 py-1 rounded-lg`}
                  >
                    main()
                  </span>{" "}
                  can be called from other functions.
                </span>
              </div>
            </span>
            <br />A function can be called any number of times. The order in
            which the functions are defined in a program and the order in which
            they get called need not necessarily be the same. However, it is
            advisable to define the functions in the same order in which they
            are called. This makes the program easier to understand. A function
            cannot be defined in another function.
            <br />
            <br />
            <span className="font-semibold text-blue-500">Trivia</span>
            <br />A calling function is the function which calls another
            function, i.e, the called function. Arguments passed to a function
            are called actual arguments. Arguments received by a function are
            called formal arguments and are a copy of the actual arguments.
            <br />
            <span className="block text-2xl font-semibold py-6">
              Conclusion
            </span>
            So don&rsquo;t try to cram the entire logic in one function.
            Instead, break a program into small units, write functions for each
            of these isolated subdivisions and make sure to rewrite the same
            code over and over again. Don&rsquo;t hesitate to write functions
            that are called only once.
            <br />
            <br />
            If the operation of a program can be divided into separate
            activities, and each activity is placed in a different function,
            then each could be written and checked more or less independently.
            Separating the code into modular functions also makes the program
            easier to design and understand, and saves you from the wrath of
            your co-developers.
            <br />
            <br />
            So that&rsquo;s functions, minced, diced and deciphered. Till
            I&rsquo;m back with another excerpt, Keep on adventuring, See you on
            the developer trail.
            <br />
            <br />
            <span className="w-full">
              <div className="mx-auto p-4 bg-slate-200/30 rounded-md flex">
                <img
                  className="w-16 h-24 mr-8 ml-4 rounded-md"
                  src="https://m.media-amazon.com/images/I/81ZPcK6HpuL._AC_UF1000,1000_QL80_.jpg"
                />
                <p className="">
                  💡 Although I present the contents of the book,{" "}
                  <span className="text-blue-500 font-mono">Let Us C</span>,
                  authored by{" "}
                  <span className="text-blue-500 font-mono">
                    Yashavant Kanetkar
                  </span>
                  , in a fun and thought-provoking way, I highly recommend you
                  to read through the book once to get a sense of it. You can
                  find the book{" "}
                  <a href="" className="text-amber-500">
                    here
                  </a>
                  .
                </p>
              </div>
            </span>{" "}
          </p>
        </div>
      </main>
    </div>
  );
}
