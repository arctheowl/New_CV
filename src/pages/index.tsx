import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import About from "~/components/About";
import ClickArrow from "~/components/ClickArrow";
import Experience from "~/components/Experience";
import Laptop from "../components/Laptop";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>lidevlin</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`h-screen w-full ${open ? "bg-[#2e026d]" : "bg-white"}`}>
        <ClickArrow open={open} />
        <Laptop open={open} setOpen={setOpen} />
        {open ? (
          <>
            <About />
            <Experience />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Home;