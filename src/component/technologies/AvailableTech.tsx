import React, { useState } from "react";
import { Itechnology } from "../../types/technologyType";

const AvailableTech = ({ technologies }: { technologies: Itechnology[] }) => {
  console.log(technologies, "AvailableTech: ");

  return (
    <div>
      {technologies.map((tech: Itechnology) => (
        <div key={tech.id}>
          <h3>{tech.name}</h3>
          <p>{tech.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AvailableTech;
