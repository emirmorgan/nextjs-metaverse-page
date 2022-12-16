import Head from "next/head";

//Components
import Navbar from "../components/Navbar";

//Sections
import Hero from "../sections/Hero";
import About from "../sections/About";
import Explore from "../sections/Explore";

export default function Home() {
  return (
    <>
      <Head>
        <title>Metaverse - github.com/emirmorgan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <Hero />
        <div className="relative">
          <About />
          <div className="gradient-03" />
          <Explore />
        </div>
      </div>
    </>
  );
}
