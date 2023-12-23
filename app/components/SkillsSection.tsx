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
      imageUrl:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
    },
    {
      label: "React",
      value: "react",
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
      <div className="w-2/3 border">
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
            {data.map(({ value, imageUrl }) => (
              <TabPanel key={value} value={value}>
                {imageUrl ? <img src={imageUrl} alt={value} /> : ""}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default SkillsSection;
