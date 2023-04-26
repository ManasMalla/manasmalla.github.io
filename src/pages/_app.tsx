import Footer from "@/components/footer";
import NavigationBar from "@/components/navigationbar";
import "@/styles/globals.css";
import "@/styles/cursor.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

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
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
