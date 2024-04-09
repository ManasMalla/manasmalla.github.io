import Footer from "@/components/footer";
import NavigationBar from "@/components/navigationbar";
import "@/styles/globals.css";
import "@/styles/cursor.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { initializeParse } from "@parse/react-ssr";
import { Zap } from "react-feather";
import Link from "next/link";

initializeParse(
  "https://parseapi.back4app.com", //custom url
  "JlJirSbTEE73qeicYe6S7vkmp8yQVXBhQxyZkRc3", //app id
  "MjotdJTmVIglgZvoeQAxLCtmGN1Hm0SPlLmraGWq" //js
);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  function getIndexOfWebpage(): number {
    switch (router.pathname) {
      case "/":
        return 0;
      case "/work":
        return 3;
      default:
        return 0;
    }
  }
  return (
    <div className="font-ambit dark:bg-black dark:text-white">
      <NavigationBar index={getIndexOfWebpage()} />
      <div className="fixed z-40 -translate-y-36 h-screen pointer-events-none">
        <div className="relative h-screen w-screen p-2">
          {/* <div className="festive-border w-full h-full opacity-70"></div> */}
          <img
            src="/festival/border-leaves-left.png"
            className="absolute bottom-0 -left-8"
          />
          {/* <img
              src="/festival/border-leaves-right.png"
              className="absolute -bottom-8 -right-8"
            /> */}
          {/* <img
              src="/festival/border.png"
              className="absolute h-screen w-screen px-4 py-4 object-contain"
            /> */}
          <img
            src="/festival/border-right.png"
            className="absolute -bottom-8 -right-8 -z-20"
          />
          <img
            src="/festival/flower-garland.png"
            className="absolute -top-24 right-8 -z-30"
          />
        </div>
      </div>
      <div className="fixed text-[0.75rem] gap-x-3 lg:gap-x-[unset] lg:text-sm bg-black text-white text-center top-0 z-[20] w-full py-4 flex justify-center items-center">
        <span>
          <Zap className="w-4 h-4 mr-3 opacity-80" />
        </span>{" "}
        <span className="w-[24ch] lg:w-[unset] opacity-70">
          Read my journey through WWDC24 Swift Student Challenge.
        </span>{" "}
        <Link href="/" className="text-white ml-1">
          Coming Soon!
        </Link>
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
