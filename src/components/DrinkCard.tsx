import { useAppStore } from "../stores/useAppStore";
import type { Drink } from "../types";
import { SparklesIcon } from "@heroicons/react/24/solid";

type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  const selectRecipe = useAppStore((s) => s.selectRecipe);
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    generatedWithAI,
  } = drink;

  return (
    <div
      className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-fuchsia-500/20 hover:border-fuchsia-500/60 transition-all duration-300 overflow-hidden cursor-pointer relative"
      onClick={() => {
        selectRecipe(id);
      }}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-2"
        />

        {generatedWithAI && (
          <div className="absolute top-2 left-2 bg-fuchsia-700/80 backdrop-blur-sm p-1.5 rounded-full shadow-md animate-fadeIn">
            <SparklesIcon className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-white/90 leading-tight truncate">
          {name}
        </h3>
      </div>
    </div>
  );
}
