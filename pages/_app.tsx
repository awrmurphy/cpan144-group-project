import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-blue-50 to-green-50">
      <Banner />
      <NavBar />
      <div className="grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
