import Head from "next/head";

//Components
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Metaverse - github.com/emirmorgan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
      </div>
    </>
  );
}
