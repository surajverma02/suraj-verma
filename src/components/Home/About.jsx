import React from "react";

function About() {
  return (
    <section id="about" className="w-full md:my-5 sm:my-20">
      <h2 className="heading text-3xl font-medium">&#128522; About Me</h2>
      <div className="about-text w-full flex justify-center items-center text-zinc-400 py-6">
        <div className="flex-1 flex flex-col gap-5">
          <p>
            Hey! I'm <span className="text-[#42ba90]">Suraj Verma</span>, I've
            been close to a computer since I'm in high school, and been
            passionate about it ever since.
          </p>
          <p>
            I really liked to build stuff using no-code tools back in 2019, and
            from that, I explored how to code myself, fast-forward to today, I
            do programming in various languages like, <span className="text-[#42ba90]">Java, JavaScript, Python</span> and frameworkes like, <span className="text-[#42ba90]">React, SpringBoot, Express</span> and worked in various project that helps me to increase my knowledge and I'm interested in building something awesome with code and
            automate tasks with code, currently focused on <span className="text-[#42ba90]">Full Stack Development</span>, Open Source and Competitive Programming.
          </p>
          <p>
            When I'm not coding I play games with my friends, watch some movies
            on Disney+ Hotstar, or if the weather's good, play{" "}
            <span className="text-[#42ba90]">cricket</span>! &#127951;
          </p>
        </div>
        <div className="img-box flex-1 h-75 flex justify-center items-center">
          <img
            className="rounded-full h-full"
            src="/images/myPhoto.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default About;
