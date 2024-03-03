import Footer from "@/components/footer";
import NavigationBar from "@/components/navigationbar";
import "@/styles/globals.css";
import "@/styles/cursor.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { initializeParse } from "@parse/react-ssr";
import { Zap } from "react-feather";

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
      <div className="fixed text-[0.75rem] gap-x-3 lg:gap-x-[unset] lg:text-sm bg-black text-white text-center top-0 z-[20] w-full py-4 flex justify-center items-center">
        <span>
          <Zap className="w-4 h-4 mr-3 opacity-80" />
        </span>{" "}
        <span className="w-[24ch] lg:w-[unset] opacity-70">
          Read my journey through WWDC24 Swift Student Challenge.
        </span>{" "}
        <a href="/" className="text-white ml-1">
          Coming Soon!
        </a>
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
