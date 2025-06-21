import { useState } from "react";
import CreateRecipeForm from "../components/CreateRecipeForm";

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setRecipe(null);

    // Simulación de generación de receta (IA)
    setTimeout(() => {
      setRecipe(`🍹 Receta para: ${prompt}\n\nIngredientes:\n- Mango\n- Chile\n- Hielo\n\nInstrucciones:\nMezcla todo con amor.`);
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-fuchsia-400 mb-4">
        Crea tu bebida con IA
      </h1>
      <p className="text-center text-zinc-400 text-lg mb-10">
        Describe los sabores, ingredientes o el estilo que buscas. La IA se encargará del resto.
      </p>

     
      <CreateRecipeForm
        prompt={prompt}
        loading={loading}
        onChange={setPrompt}
        onSubmit={handleSubmit}
      />

   
      {recipe && (
        <div className="mt-12 bg-zinc-800/60 border border-zinc-700 rounded-2xl p-6 shadow-xl animate-fadeInUp">
          <h2 className="text-2xl font-bold text-fuchsia-400 mb-3">
            Resultado generado
          </h2>
          <pre className="whitespace-pre-line text-white/80 text-base leading-relaxed">
            {recipe}
          </pre>
        </div>
      )}
    </section>
  );
}
