import React from "react";
import { Itechnology } from "../../types/technologyType";

interface ISelectedTechnologiesProps {
  selectedTechnologies: Itechnology[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<Itechnology[]>>;
}

const SelectedTechnologies = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: ISelectedTechnologiesProps) => {
  const removeTechnology = (id: string) => {
    const restTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id,
    );
    setSelectedTechnologies(restTechnologies);
  };

  return (
    <aside className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_14px_rgba(15,23,42,0.04)] md:sticky md:top-6 md:self-start lg:sticky lg:top-6">
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
    </aside>
  );
};

export default SelectedTechnologies;
