"use client";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div>
        <section className="px-20 mt-16 text-white">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify p-6 text-center rounded-sm lg:max-w-3xl xl:max-w-3xl lg:text-left">
              <h1 className="text-3xl font-bold leadi">
                Petra is a{" "}
                <span className="text-primary">website developer</span> and{" "}
                <br />
                <span className="text-primary">front-end developer</span>
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                He crafts responsive websites where technologies
                <br />
                meet creativity
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold border dark:border-primary">
                    Contact me !!
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="/img/img.png"
                alt="Hero Section Image"
                className="object-contain bg-primary bg-opacity-70 h-72 sm:h-80 lg:h-[450px] xl:h-112 2xl:h-128 rounded-3xl"
                style={{borderRadius: "30% 70% 48% 52% / 43% 42% 58% 57% "}}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
