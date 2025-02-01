import React from "react";

const works = [
  {
    id: "project1",
    imgSrc: "/projects/project1.png",
    title: "Blog App",
    tags: [
      { tag: "React", tagImage: "/tags/react.svg" },
      { tag: "JavaScript", tagImage: "/tags/js.svg" },
      { tag: "Tailwind", tagImage: "/tags/tailwind.svg" },
    ],
    projectLink: "https://eblogapp.netlify.app/",
    projectDescription:
      "A dynamic and responsive blog platform built with React, designed for creating, managing, and reading blog posts with ease.",
  },
  {
    id: "project2",
    imgSrc: "/projects/project2.png",
    title: "Movie Management",
    tags: [
      { tag: "Java", tagImage: "/tags/java.svg" },
      { tag: "Spring", tagImage: "/tags/spring.svg" },
      { tag: "MySql", tagImage: "/tags/mysql.svg" },
    ],
    projectLink: "https://github.com/surajverma02/movie-recommendation",
    projectDescription:
      "This is a movie recommendation system built using Spring Boot and JWT for secure user authentication and authorization.",
  },
  {
    id: "project3",
    imgSrc: "/projects/project3.png",
    title: "Travel Guide",
    tags: [
      { tag: "CSS", tagImage: "/tags/css.svg" },
      { tag: "React", tagImage: "/tags/react.svg" },
      { tag: "Node", tagImage: "/tags/node.svg" },
      { tag: "Express", tagImage: "/tags/express.svg" },
    ],
    projectLink: "https://github.com/surajverma02/travel-agency",
    projectDescription:
      "A responsive and user-friendly travel agency website that allows users to explore travel destinations, view location details, and book trips seamlessly.",
  },
  {
    id: "project4",
    imgSrc: "/projects/project4.png",
    title: "Journal App",
    tags: [
      { tag: "Java", tagImage: "/tags/java.svg" },
      { tag: "Spring", tagImage: "/tags/spring.svg" },
      { tag: "MongoDB", tagImage: "/tags/mongo.svg" },
    ],
    projectLink: "https://github.com/surajverma02/journal-app",
    projectDescription:
      "This is a movie Journal Application built using Spring Boot and JWT for secure user authentication and authorization.",
  },
  {
    id: "project5",
    imgSrc: "/projects/project5.png",
    title: "Job Seeker Website",
    tags: [
      { tag: "HTML", tagImage: "/tags/html.svg" },
      { tag: "CSS", tagImage: "/tags/css.svg" },
      { tag: "JavaScript", tagImage: "/tags/js.svg" },
    ],
    projectLink: "https://demo-coursify.netlify.app/",
    projectDescription:
      "The frontend project for the candidate hiring website demo creates a user-friendly interface connecting employers and job seekers. It features modern design, easy navigation, and responsiveness, streamlining the recruitment process for a seamless experience.",
  },
];

function Work() {
  return (
    <section id="work" className="work w-full  md:pt-20">
      <div id="work-head" className="head mb-10 lg:mb-20">
        <h2 className="heading text-3xl font-medium">&#128188; My Work</h2>
        <p className="sm:text-xl text-center sm:text-left mt-2">
          Here's some of my <br className="block sm:hidden" /> projects that I
          have worked on.
        </p>
      </div>
      {works.map((work, key) => (
        <div id={work.id} key={key} className="sm:p-10 lg:p-0">
          <div className="project-image">
            <img className="rounded-t-2xl" src={work.imgSrc} alt={work.title} />
          </div>
          <div className="project-text rounded-b-2xl bg-[#111] p-2 sm:p-3">
            <div className="project-head flex w-full justify-between">
              <h3 className="text-lg">{work.title}</h3>
              <a href={work.projectLink} target="_blank">
                <img className="h-7" src="/icons/link.svg" alt={work.title} />
              </a>
            </div>
            <div className="skill-tag my-2 flex gap-2">
              {work.tags.map(({ tag, tagImage }, key) => (
                <div className="px-1.5 py-1 bg-[#222] flex justify-between items-center text-sm gap-1 rounded-lg">
                  <img className="h-4" src={tagImage} />
                  <p className="">{tag}</p>
                </div>
              ))}
            </div>
            <div className="w-full border-1 border-zinc-400/10 my-2"></div>
            <p className="text-sm sm:text-md">
              {work.projectDescription.slice(0, 100) + "..."}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Work;
