import React from "react";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <>
      <div>
        <div className="relative my-44 flex border">
          <span className="relative text-white flex items-center text-3xl">
            <span className="text-primary">#</span>project
            <span className="after:absolute after:inline-block after:border-t-2 after:border-solid after:border-primary after:w-1/2 after:ml-3" />
          </span>
            <Link href="/projects" className="justify-self-end">view all</Link>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
