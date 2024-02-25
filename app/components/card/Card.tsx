import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  preview: string;
  viewCode: string;
  tools: string[];
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, tools, preview, viewCode }) => {
  return (
    <div className="flex flex-warp">
      <div className="overflow-hidden shadow-lg border mt-5 hover:shadow-2xl h-90 w-60 md:w-80">
        <Image
          alt="blog photo"
          src={imageUrl}
          className="max-h-42 w-full object-fill border"
          width={500} height={500}
        />
        <div className="flex">
          {tools.map((tool, i) => (
            <Image
              key={i}
              src={tool}
              alt={`Tool ${i}`}
              className="w-10 h-10 mr-2"
            />
          ))}
        </div>
        <div className="bg-transparent w-full p-4">
          <p className="text-white text-2xl font-medium">{title}</p>
          <div className="text-text text-md mt-3">
            <p className="w-full block h-full">{description}</p>
          </div>
          <button className="text-text text-md mt-5 p-1 px-2 border-primary border">
            <Link href={preview}>Preview</Link>
          </button>
          <button className="text-text text-md mt-5 ml-7 p-1 px-2 border">
            <Link href={viewCode}>
              View Code
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
