import React, { useRef, useState } from "react";

function Navbar() {
  const navItems = [
    {
      label: "Home",
      link: "#home",
    },
    {
      label: "About",
      link: "#about",
    },
    {
      label: "Works",
      link: "#work",
    },
    {
      label: "Skills",
      link: "#skill",
    },
    {
      label: "Contact",
      link: "#contact",
    },
  ];

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar flex items-center">
      <div onClick={toggleMenu} className="cursor-pointer md:hidden h-9 p-1 bg-[#222] hover:bg-[#181818] rounded-lg">
          <img className="h-full" src="/icons/menu.svg" alt="menu" />
        </div>
      <div className="hidden nav-manu md:block">
        {navItems.map(({ label, link }, key) => (
          <a href={link} key={key} className="nav-link ml-4">
            {label}
          </a>
        ))}
      </div>
      <div className={` ${isActive ? '' : 'hidden'} w-[50%] fixed right-0 top-0 h-[100vh] bg-[#222] border-1 border-zinc-500/10 flex flex-col items-center justify-center gap-[5%] text-3xl`}>
        {navItems.map(({ label, link }, key) => (
          <a href={link} key={key} className="nav-link">
            {label}
          </a>
        ))}
        <div onClick={toggleMenu} className="cursor-pointer absolute top-[5%] left-[5%]">
          <img src="/icons/close.svg" alt="close" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
