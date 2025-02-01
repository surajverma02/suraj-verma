import React from "react";
import Social from "../Social";

function Home() {
  return (
    <section id="home" className="home py-24 pl-4">
      <div className="name flex flex-col">
        <p className="text-2xl font-semibold sm:text-3xl tracking-wide text-[#42ba90]">
          Hey there, I'm-
        </p>
        <h1 className="my-name text-8xl sm:text-9xl font-bold mt-2">Suraj <br className="name-break hidden" /> Verma.</h1>
      </div>
      <h2 className="headpoint w-[100%] lg:w-[70%] font-medium text-xl sm:text-3xl text-zinc-400 my-7 md:my-10">
        <span className="text-[#fff]">Software Engineer.</span> A
        self-taught developer with an interest in Computer Science.
      </h2>
      <div className="headline text-zinc-400 md:text-xl">
        <p>&#128640; Currently specializing in Full Stack (React / SpringBoot)</p>
        <p>&#128221; Pursuing MCA from IGNOU</p>
      </div>
      <Social />
    </section>
  );
}

export default Home;
