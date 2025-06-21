import { useMemo } from "react";
import CreateRecipeForm from "../components/CreateRecipeForm";
import { useAppStore } from "../stores/useAppStore";
import DrinksList from "../components/DrinksList";
import Modal from "../components/Modal";

export default function CreatePage() {
  const generatedRecipes = useAppStore((s) => s.generatedRecipes.drinks);

  const hasRecipes = useMemo(
    () => generatedRecipes.length > 0,
    [generatedRecipes.length]
  );

  console.log(generatedRecipes);

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-fuchsia-400 mb-4">
        Crea tu bebida con IA
      </h1>
      <p className="text-center text-zinc-400 text-lg mb-10">
        Describe los sabores, ingredientes o el estilo que buscas. La IA se
        encargará del resto.
      </p>

      <CreateRecipeForm />

      {hasRecipes && (
        <>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-fuchsia-400  my-20">
            Ultimas Recetas Generadas
          </h2>
          <DrinksList drinks={generatedRecipes} />
        </>
      )}
      <Modal/>
    </section>
  );
}
