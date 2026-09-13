import React, { useState } from "react";
import { Itechnology } from "../../types/technologyType";
import { toast } from "react-toastify";

const TechCard = ({
  technologies,
  selectedTechnologies,
  setSelectedTechnologies,
}: {
  technologies: Itechnology[];
  selectedTechnologies: Itechnology[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<Itechnology[]>>;
}) => {
  const [isStack, setIsStack] = useState<string[]>([]);

  const handleAddToStack = (tech: Itechnology) => {
    setIsStack((prev) => [...prev, tech.id]);

    toast.success(`${tech.name} added to your stack!`);
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech: Itechnology) => (
        <article
          key={tech.id}
          className="flex min-h-87.5 flex-col rounded-2xl border border-slate-100 bg-white p-6 transition duration-200"
        >
          <div className="flex items-start justify-between gap-4">
            <img
              src={tech.icon}
              alt={`${tech.name} icon`}
              className="h-12 w-12 object-contain"
            />
            <span className="rounded-full border border-sky-100 bg-sky-50 px-3.5 py-1.5 text-sm font-medium text-sky-500">
              {tech.badge}
            </span>
          </div>

          <div className="mt-7 flex flex-1 flex-col">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              {tech.name}
            </h3>
            <p className="mt-3 text-base leading-6 text-slate-500">
              {tech.description}
            </p>

            <div className="mt-auto border-t border-slate-100 pt-3">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
                <span className="rounded-md bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
                  {tech.category}
                </span>
                <span>{tech.difficulty}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-slate-600">
                  <span className="text-base text-amber-400" aria-hidden="true">
                    ★
                  </span>
                  {tech.rating}
                </span>
              </div>

              <button
                onClick={() => {
                  setSelectedTechnologies((prev) => [...prev, tech]);
                  handleAddToStack(tech);
                }}
                disabled={selectedTechnologies.some(
                  (technology) => technology.id === tech.id,
                )}
                type="button"
                className="mt-5 w-full rounded-xl bg-slate-950 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-200"
              >
                {selectedTechnologies.some(
                  (technology) => technology.id === tech.id,
                )
                  ? "Added to Stack"
                  : "Add to Stack"}
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default TechCard;
