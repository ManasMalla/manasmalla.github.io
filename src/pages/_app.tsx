import Footer from "@/components/footer";
import NavigationBar from "@/components/navigationbar";
import "@/styles/globals.css";
import "@/styles/cursor.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { initializeParse } from "@parse/react-ssr";
import { Zap } from "react-feather";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "@next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
      case "/resume":
        return 1;
      case "/story":
        return 4;
      case "/work":
        return 3;
      default:
        return 0;
    }
  }
  return (
    //FDFEFF
    //#2DFF5B
    //060B27 - dark blue
    <div
      className={`${plus_jakarta_sans.className} dark:bg-black dark:text-white`}
    >
      <NavigationBar index={getIndexOfWebpage()} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
