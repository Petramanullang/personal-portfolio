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
      />
    </div>
  );
};

export default CardSection;
