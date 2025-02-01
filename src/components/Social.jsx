import React from "react";

function Social() {
  const social = [
    {
      label: "Github",
      link: "https://github.com/surajverma02",
      src: "/icons/github.svg",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/suraj-verma-a4a8b8221",
      src: "/icons/linkedin.svg",
    },
    {
      label: "Email",
      link: "mailto:surajverma8730448@gmail.com",
      src: "/icons/email.svg",
    },
  ];

  return (
    <section className="my-7 sm:my-10 flex gap-5">
      {social.map(({ label, link, src }, key) => (
        <a key={key} href={link}>
          <div className="social px-1.5 md:px-2 py-1 md:py-2 bg-[#222] flex justify-between items-center gap-1 md:gap-2 rounded-lg">
            <img className="h-5 md:h-6" src={src} alt={label} />
            <p className="social-name font-medium text-sm md:text-md">{label}</p>
          </div>
        </a>
      ))}
    </section>
  );
}

export default Social;
