"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Frontend Developer"],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <>
      <div>
        <section className="mt-28 text-white">
          <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify text-center rounded-sm lg:max-w-3xl xl:max-w-3xl lg:text-left">
              <h1 className="mb-2">Hi there</h1>
              <h1 className="text-[28px] md:text-4xl font-bold max-h-26 md:h-20">
                Petra here and im a <br />
                <span className="text-primary text-[28px] ">{text}</span>
              </h1>
              <p className="mt-4 mb-8 text-base md:text-lg max-w-xl sm:mb-12">
                I create responsive websites where technology meets creativity
                and my ambition is to become a fullstack developer.
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
            <div className="flex items-center justify-center lg:mt-0 h-96 lg:h-96">
              <Image
                src="/img/img.png"
                alt="Hero Section Image"
                className="object-cover bg-primary h-80 lg:h-[480px]"
                style={{ borderRadius: "39% 61% 61% 39% / 41% 49% 51% 59% " }}
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
