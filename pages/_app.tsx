import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col text-center">
      <Banner />
      <NavBar />
      <div className="grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
