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
    <div>
      <div>
        <h2>Explore Technologies</h2>
      </div>

      <AvailableTech technologies={technologies} />
    </div>
  );
};

export default Technologies;
