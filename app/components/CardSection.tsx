import React from "react";
import Card from "./card/Card";

const CardSection = () => {
  return (
    <div className="grid grid-cols-3 place-items-center justify-center">
      <Card
        imageUrl="/img/project-1.png"
        title="Portfolio Website"
        description="you`re using it right now"
        tools={[]}
        preview="#"
        viewCode="https://github.com/Petramanullang/personal-portfolio"
      />
      <Card
        imageUrl="/img/project-2.png"
        title="Destinify"
        description="Travel Website using NextJS"
        tools={[]}
        preview="https://destinify-travel.vercel.app/"
        viewCode="https://github.com/Petramanullang/final-project"
      />
      <Card
        imageUrl="/img/project-3.png"
        title="Visit Japan"
        description="Visit Japan using ReactJS"
        tools={[]}
        preview="https://visit-japan-website.vercel.app/"
        viewCode="https://github.com/Petramanullang/single-page-react"
      />
    </div>
  );
};

export default CardSection;
