import NavigationBar from "@/components/navigationbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-ambit">
      <NavigationBar />
      <Component {...pageProps} />
    </div>
  );
}
