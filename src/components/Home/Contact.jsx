import React from "react";
import Social from "../Social";

const Contact = () => {
  return (
    <section id="contact" className="py-25 w-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-5xl sm:text-6xl font-bold my-10">Keep In Touch.</h2>
        <p className="text-zinc-400 text-center">I'm currently specializing in <span className="text-[#42ba90]">Development</span>. </p>
        <p className="text-zinc-400 text-center">Feel free to get in touch and talk more about your projects.</p>
        <Social />
      </div>
    </section>
  );
};

export default Contact;
