import React from "react";
import { Itechnology } from "../../types/technologyType";
import TechCard from "./TechCard";

interface IAvailableTechProps {
  technologies: Itechnology[];
  selectedTechnologies: Itechnology[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<Itechnology[]>>;
}

const AvailableTech = ({
  technologies,
  selectedTechnologies,
  setSelectedTechnologies,
}: IAvailableTechProps) => {
  return (
    <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(250px,1fr)]">
      <TechCard
        technologies={technologies}
        selectedTechnologies={selectedTechnologies}
        setSelectedTechnologies={setSelectedTechnologies}
      />

      <aside className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_14px_rgba(15,23,42,0.04)] lg:sticky lg:top-6">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">
          Your Stack
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          No technologies selected yet.
        </p>
        <div className="mt-5 flex min-h-20 items-center justify-center rounded-xl border border-dashed border-slate-200 px-4 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      </aside>
    </div>
  );
};

export default AvailableTech;
