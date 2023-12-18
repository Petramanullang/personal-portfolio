"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { log } from "console";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("html");
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
      imageUrl:
        "https://imgs.search.brave.com/Ah9tCB4hGe_t-CO6y5SzVGyTGfBTErCEg8Bef421w2o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/NjI0ODAzL3Bob3Rv/L3JhbWVuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz03Ul9E/cDhFRFNWajE5WHVS/ckl1SkxqM3FNT0JJ/QkxQUzU0VHhqYWQw/RjB3PQ",
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <>
      <div className="relative mt-44 mb-16 flex justify-between items-center">
        <span className="relative text-white flex items-center text-3xl">
          <span className="text-primary">#</span>Skills
          <span className="after:absolute after:inline-block after:border-t-2 after:border-solid after:border-primary after:w-[400px] after:ml-3" />
        </span>
      </div>
      <div className="w-full border">
        <Tabs value={activeTab}>
          <TabsHeader
            placeholder={""}
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}>
            {data.map(({ label, value }) => (
              <Tab
                placeholder={""}
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value
                    ? "text-white font-bold"
                    : "text-text font-bold"
                }>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody placeholder={""}>
            {data.map(({ value, desc, imageUrl }) => (
              <TabPanel key={value} value={value}>
                {desc}
                {imageUrl && <img src={imageUrl} alt={value} />}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default SkillsSection;
