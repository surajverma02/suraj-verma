import React from "react";

const skills = [
  {
    skill: "HTML",
    skillImg: "/tags/html.svg",
  },
  {
    skill: "CSS",
    skillImg: "/tags/css.svg",
  },
  {
    skill: "JavaScript",
    skillImg: "/tags/js.svg",
  },
  {
    skill: "Tailwind Css",
    skillImg: "/tags/tailwind.svg",
  },
  {
    skill: "React",
    skillImg: "/tags/react.svg",
  },
  {
    skill: "Node Js",
    skillImg: "/tags/node.svg",
  },
  {
    skill: "NPM",
    skillImg: "/tags/npm.svg",
  },
  {
    skill: "Express",
    skillImg: "/tags/express.svg",
  },
  {
    skill: "Java",
    skillImg: "/tags/java.svg",
  },
  {
    skill: "Spring",
    skillImg: "/tags/spring.svg",
  },
  {
    skill: "MySql",
    skillImg: "/tags/mysql.svg",
  },
  {
    skill: "MongoDB",
    skillImg: "/tags/mongo.svg",
  },
  {
    skill: "Database",
    skillImg: "/tags/db.svg",
  },
  {
    skill: "Git",
    skillImg: "/tags/git.svg",
  },
];

function Skill() {
  return (
    <section id="skill" className="py-10 sm:py-20">
      <h2 className="heading text-3xl font-medium mb-10">&#128301; My Skills</h2>
      <div className="skill px-5 flex flex-wrap gap-5 sm:gap-10 justify-center">
        {skills.map(({ skill, skillImg }, key) => (
          <div className="w-30 h-30 flex justify-center items-center">
            <img className="tags h-15" src={skillImg} alt={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
