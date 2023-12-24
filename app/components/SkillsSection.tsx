"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("Tech Stack");

  const data = [
    {
      label: "Tech Stack",
      items: [
        {
          value: "HTML",
          level: "Advanced",
          imageUrl: "/svg/html.svg",
        },
        {
          value: "CSS",
          level: "Advanced",
          imageUrl: "/svg/css.svg",
        },
        {
          value: "JavaScript",
          level: "Intermediate",
          imageUrl: "/svg/javascript.svg",
        },
        {
          value: "Typescript",
          level: "Intermediate",
          imageUrl: "/svg/typescript.svg",
        },
        {
          value: "React JS",
          level: "Intermediate",
          imageUrl: "/svg/react.svg",
        },
        {
          value: "Next JS",
          level: "Intermediate",
          imageUrl: "/svg/next.svg",
        },
        {
          value: "Tailwind CSS",
          level: "Intermediate",
          imageUrl: "/svg/tailwind.svg",
        },
        {
          value: "Bootstrap",
          level: "Intermediate",
          imageUrl: "/svg/bootstrap.svg",
        },
        {
          value: "Node JS",
          level: "Basic",
          imageUrl: "/svg/node.svg",
        },
        {
          value: "Vite",
          level: "Basic",
          imageUrl: "/svg/vite.svg",
        },
      ],
    },
    {
      label: "Tools",
      items: [
        {
          value: "VSCode",
          level: "Basic",
          imageUrl: "/svg/visual studio code.svg",
        },
        {
          value: "Github",
          level: "Basic",
          imageUrl: "/svg/github.svg",
        },
        {
          value: "Figma",
          level: "Basic",
          imageUrl: "/svg/figma.svg",
        },
      ],
    },
  ];

  const getContentForTab = (tabLabel: string) => {
    const selectedTab = data.find((tab) => tab.label === tabLabel);
    return selectedTab ? selectedTab.items : [];
  };

  return (
    <>
      <div
        className="relative mt-44 mb-16 flex justify-between items-center"
        id="skills">
        <span className="relative text-white flex items-center text-3xl">
          <span className="text-primary">#</span>Skills
          <span className="after:absolute after:inline-block after:border-t-2 after:border-solid after:border-primary after:w-[400px] after:ml-3" />
        </span>
      </div>
      <div className="flex justify-between">
        <div className="w-2/3 border h-[450px] mb-36">
          <Tabs value={activeTab}>
            <TabsHeader
              placeholder={""}
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
              }}>
              {data.map(({ label }) => (
                <Tab
                  placeholder={""}
                  key={label}
                  value={label}
                  onClick={() => setActiveTab(label)}
                  className={
                    activeTab === label
                      ? "text-white font-bold"
                      : "text-text font-bold"
                  }>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody placeholder={""} className="p-5">
              {data.map(({ label }) => (
                <TabPanel
                  className="grid grid-cols-5 place-items-center gap-14 px-5"
                  key={label}
                  value={label}>
                  {getContentForTab(label).map(
                    ({ value, imageUrl, level }, index) => (
                      <div key={index}>
                        {imageUrl && (
                          <Image
                            src={imageUrl}
                            alt={value}
                            className="shadow-xl mb-2 rounded- mx-auto object-contain h-14 p-2 hover:-translate-y-1 hover:duration-300 hover:ease-in-out transition-transform cursor-pointer"
                            width={500}
                            height={500}
                          />
                        )}
                        <p className="text-center mb-2 text-white font-bold text-lg">
                          {value}
                        </p>
                        <p className="text-center text-sm text-white/50">
                          {level}
                        </p>
                      </div>
                    )
                  )}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
        <div className="flex-col justify-center">
          <p className="text-2xl text-white font-bold mt-36">
            Tech Stack And Tools
          </p>
          <p className="text-base text-white mt-3 w-64 text-center mx-auto">
            There are some tech stack and tools that I&lsquo;ve learned and
            experienced
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
