import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import About from "~/components/About";
import ClickArrow from "~/components/ClickArrow";
import Experience from "~/components/Experience";
import Projects from "~/components/Projects";
import Tech from "~/components/Tech";
import Laptop from "../components/Laptop";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>lidevlin</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link
          rel="icon"
          href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mCxNfNr_MJKWXp_H4blznwjDP8QgML4fIK2bQ%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1&ipt=5ac37d86f8448a82af3beb94e44837fc84ea1a3fb9c7958a6105f3b45c2e8e56&ipo=images"
        />
      </Head>

      <div
        className={`h-screen w-screen overflow-hidden overflow-y-auto to-[#030714]`}
      >
        <div
          className={`mx-auto w-full md:-z-10 ${
            open
              ? "bg-[url('/images/herobg.png')] bg-cover bg-center bg-no-repeat"
              : "h-screen bg-white"
          }`}
        >
          <ClickArrow open={open} />
          <Laptop open={open} setOpen={setOpen} />
        </div>
        {open ? (
          <div className="flex flex-col">
            <About />
            {/* <Suspense fallback={null}>
              
            </Suspense> */}
            <Tech />
            <Experience />
            <Projects />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
