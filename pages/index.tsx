import Head from "next/head";

//Components
import Navbar from "../components/Navbar";
import About from "../sections/About";

//Sections
import Hero from "../sections/Hero";

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
        </div>
      </div>
    </>
  );
}
