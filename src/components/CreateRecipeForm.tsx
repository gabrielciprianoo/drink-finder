import { SparklesIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { useCreateRecipeAI } from "../hooks/useCreateRecipeAI";

export default function CreateRecipeForm() {
  const { onChange, onSubmit, prompt, loading } = useCreateRecipeAI();
  return (
    <form onSubmit={onSubmit} className="space-y-6 animate-fadeIn">
      <Transition
        appear
        show
        enter="transition-opacity duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl px-5 py-4 relative">
          <div className="absolute -top-3 left-4 bg-zinc-900 text-fuchsia-400 text-xs px-2 py-0.5 rounded-full font-semibold tracking-wide w-fit">
            Ejemplo
          </div>
          <p className="example-text">
            "Una bebida tropical, sin alcohol, con mango, limón y toque de
            jengibre"
          </p>
        </div>
      </Transition>

      <div className="flex flex-col gap-4">
        <div className="relative w-full">
          <textarea
            value={prompt}
            onChange={(e) => onChange(e.target.value)}
            required
            rows={3}
            className="peer w-full resize-none px-4 pt-5 pb-3 bg-zinc-900 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 placeholder-transparent transition-all text-base"
            placeholder="Describe tu bebida"
          />
          <label className="absolute left-4 top-2 text-sm text-zinc-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 transition-all">
            Describe tu bebida...
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 font-medium text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <ArrowPathIcon className="w-5 h-5 animate-spin" />
              Generando...
            </>
          ) : (
            <>
              <SparklesIcon className="w-5 h-5" />
              Generar receta
            </>
          )}
        </button>
      </div>
    </form>
  );
}
