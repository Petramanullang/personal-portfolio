"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const page = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClick = (link: string) => {
    setActiveLink(link);

    const targetElement = document.getElementById(link);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsNavOpen(false);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="">
        {/* max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 */}
        <div
          className={`md:px-32 top-0 z-50 bg-background flex flex-wrap items-center justify-between mx-auto p-4 fixed w-full ${
            scrollPosition > 50 ? "shadow-lg" : ""
          }`}>
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/svg/logo.svg"
              alt=""
              className="h-5"
              width={20}
              height={20}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Petra Juliansen
            </span>
          </a>
          <button
            onClick={toggleNav}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`h-[100vh] md:h-0 w-full md:block md:w-auto ${
              isNavOpen ? "block" : "hidden"
            }`}
            id="navbar-default">
            <ul className="font-medium text-center flex flex-col p-4 md:p-0 mt-4  gap-6  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className={`block text-[#ABB2BF] text-base py-2 px-3 md:p-0 focus:text-white ${
                    activeLink === "home" ? "text-white" : ""
                  }`}
                  onClick={() => handleClick("home")}>
                  <span className="text-primary">#</span>home
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className={`block text-[#ABB2BF] text-base py-2 px-3 md:p-0 ${
                    activeLink === "project" ? "text-white" : ""
                  }`}
                  onClick={() => handleClick("project")}>
                  <span className="text-primary">#</span>project
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`block text-[#ABB2BF] text-base py-2 px-3 md:p-0 focus:text-white ${
                    activeLink === "skills" ? "text-white" : ""
                  }`}
                  onClick={() => handleClick("skills")}>
                  <span className="text-primary">#</span>skills
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`block text-[#ABB2BF] text-base py-2 px-3 md:p-0 ${
                    activeLink === "about" ? "text-white" : ""
                  }`}
                  onClick={() => handleClick("about")}>
                  <span className="text-primary">#</span>about-me
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`block text-[#ABB2BF] text-base py-2 px-3 md:p-0 ${
                    activeLink === "contact" ? "text-white" : ""
                  }`}
                  onClick={() => handleClick("contact")}>
                  <span className="text-primary">#</span>contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default page;
