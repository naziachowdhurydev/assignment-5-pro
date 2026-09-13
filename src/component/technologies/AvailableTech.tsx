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
  const removeTechnology = (id: string) => {
    const restTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id,
    );
    setSelectedTechnologies(restTechnologies);
  };
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
        {selectedTechnologies.length === 0 ? (
          <>
            <p className="mt-1 text-sm text-slate-400">
              No technologies selected yet.
            </p>

            <div className="mt-5 flex min-h-20 items-center justify-center rounded-xl border border-dashed border-slate-200 px-4 text-center text-sm text-slate-400">
              Your stack is empty.
            </div>
          </>
        ) : (
          <>
            <p className="mt-1 text-sm text-slate-400">
              {selectedTechnologies.length} technology
              {selectedTechnologies.length > 1 ? "ies" : "y"} selected.
            </p>

            <div className="mt-5 space-y-3">
              {selectedTechnologies.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-9 w-9 object-contain"
                    />

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">
                        {technology.name}
                      </h4>

                      <p className="text-xs text-slate-400">
                        {technology.category}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeTechnology(technology.id)}
                    className="text-xs font-medium text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
        <button
          onClick={() => setSelectedTechnologies([])}
          className="mt-8 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      </aside>
    </div>
  );
};

export default AvailableTech;
