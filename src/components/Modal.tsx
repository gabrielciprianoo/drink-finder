import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, type JSX } from "react";
import { useAppStore } from "../stores/useAppStore";
import type { Recipe } from "../types";
import { XMarkIcon, HeartIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function Modal() {
  const modal = useAppStore((s) => s.modal);
  const closeModal = useAppStore((s) => s.closeModal);
  const selectedRecipe = useAppStore((s) => s.selectedRecipe);
  const handleClickFavorite = useAppStore((s) => s.handleClickFavorite);
  const isFavorite = useAppStore( (s)=> s.isFavorite  );
  useAppStore((s) => s.favorites);

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];

    for (let i = 1; i <= 6; i++) {
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe];
      const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe];

      if (ingredient && measure) {
        ingredients.push(
          <li
            key={`${i}-${selectedRecipe.idDrink}`}
            className="flex items-center gap-2 text-white/80 text-base"
          >
            <SparklesIcon className="w-4 h-4 text-fuchsia-400 shrink-0" />
            <span>
              <strong className="text-white">{ingredient}</strong> — {measure}
            </span>
          </li>
        );
      }
    }

    return ingredients;
  };

  const isFav = isFavorite(selectedRecipe.idDrink);

  const iconClass = isFav
    ? "fill-fuchsia-400"
    : "fill-white/70 stroke-2";

  if (!selectedRecipe) return null;

  return (
    <Transition appear show={modal} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-4xl transform overflow-visible rounded-2xl bg-zinc-900 text-white shadow-2xl transition-all p-6">
                <button
                  onClick={closeModal}
                  aria-label="Cerrar modal"
                  title="Cerrar"
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-zinc-800/70 hover:bg-zinc-700 transition cursor-pointer"
                >
                  <XMarkIcon className="w-5 h-5 text-white" />
                </button>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                  <div className="md:w-64 md:h-auto w-full h-64 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={selectedRecipe.strDrinkThumb}
                      alt={`Imagen de ${selectedRecipe.strDrink}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-center relative">
                    <div className="flex justify-between items-center gap-4 mb-4 w-full md:max-w-[70%]">
                      <DialogTitle
                        as="h3"
                        className="text-lg md:text-xl font-bold text-fuchsia-400 tracking-tight"
                      >
                        {selectedRecipe.strDrink}
                      </DialogTitle>

                      <div className="relative group">
                        <button
                          onClick={() => {
                            handleClickFavorite(selectedRecipe);
                          }}
                          className="p-1 md:p-2 rounded-full hover:bg-fuchsia-500/10 transition cursor-pointer"
                          aria-label="Agregar a favoritos"
                        >
                          <HeartIcon
                            className={`w-6 h-6 md:w-7 md:h-7 transition-transform hover:scale-110 ${iconClass}`}
/>
                        </button>

                        <span className="absolute top-1/2 left-full ml-2 -translate-y-1/2 whitespace-nowrap text-sm bg-zinc-800 text-white px-2 py-1 rounded shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all z-50">
                          {isFav ? 'Eliminar De Favoritos' : 'Agregar a favoritos'}
                        </span>
                      </div>
                    </div>

                    <section className="mb-4">
                      <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-1">
                        Ingredientes
                      </h4>
                      <ul className="space-y-1">{renderIngredients()}</ul>
                    </section>

                    <section>
                      <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-1">
                        Instruciones
                      </h4>
                      <p className="text-white/70 text-base leading-relaxed whitespace-pre-line">
                        {selectedRecipe.strInstructions}
                      </p>
                    </section>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
