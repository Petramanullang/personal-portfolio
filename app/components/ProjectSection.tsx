import React from "react";
import Link from "next/link";
import CardSection from "./CardSection";

const ProjectSection = () => {
  return (
    <>
      <div id="project">
        <div className="relative mt-44 mb-5 flex justify-between items-center">
          <span className="relative text-white flex items-center text-3xl">
            <span className="text-primary">#</span>project
            <span className="after:absolute after:inline-block after:border-t-2 after:border-solid after:border-primary after:w-[700px] after:ml-3" />
          </span>
          <Link
            href="/project"
            className="justify-self-end text-base text-white">
            {"View All -->"}
          </Link>
        </div>
        <CardSection />
      </div>
    </>
  );
};

export default ProjectSection;
