"use client";

import Image from "next/image";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export type ViewOptions = "Projects" | "Experience" | "Skills" | "Education";

const viewOptions: ViewOptions[] = ["Projects", "Experience", "Skills", "Education"];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (option: ViewOptions) => {
    setMenuOpen(false);
    const section = document.getElementById(option.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  console.log("Navigation component re-rendered!");

  return (
    <nav className="fixed top-0 gap-10 z-50 justify-center items-center px-20 py-5 w-full text-md font-bold text-white bg-black min-h-[50px]">
      <div className="flex justify-center sm:absolute sm:left-10 sm:top-0 sm:py-4">
        <Image src={"/logo.svg"} alt={"Logo Image"} width={80} height={80} />
      </div>
      <div onClick={handleMenu} className="cursor-pointer absolute right-5 top-0 py-5 sm:hidden">
        <IoMdMenu className="text-3xl " />
      </div>
      {/* Desktop Menu */}
      <div className="flex-col hidden justify-center gap-2 text-center sm:flex-row sm:gap-10 sm:flex">
        {viewOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleClick(option)}
            role="link"
            className="hover:text-gray-300 transition-colors bg-transparent border-none cursor-pointer"
          >
            {option}
          </button>
        ))}
      </div>
      {/* Mobile Menu */}
      <div
        className={`flex-col mt-2 text-center justify-center gap-2 sm:hidden transition-all duration-500 ease-in-out overflow-hidden 
          ${menuOpen ? "max-h-96" : "max-h-0"}`
        }
      >
        {menuOpen && (
          viewOptions.map((option) => (
            <div key={option}>
              <button
                key={option}
                onClick={() => handleClick(option)}
                role="link"
                className="hover:text-gray-300 transition-colors bg-transparent border-none cursor-pointer"
              >
                {option}
              </button>
            </div>
          ))
        )}
      </div>

    </nav>
  );
}
