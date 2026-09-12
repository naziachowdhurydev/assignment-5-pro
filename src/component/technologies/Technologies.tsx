import React, { use } from "react";
import { Itechnology } from "../../types/technologyType";
import AvailableTech from "./AvailableTech";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  // console.log(technologies, "Technologies:");
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Explore <span className="text-[#db4ca9]">Technologies</span>
        </h2>
        <p className="text-gray-600 text-[18px]">
          Pick one technology per category to build your ideal stack
        </p>
      </div>

      <AvailableTech technologies={technologies} />
    </div>
  );
};

export default Technologies;
