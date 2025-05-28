import Spinner from "./Spinner";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function SearchLoaderCard() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-20 px-6 py-12 bg-gradient-to-br from-black/40 to-zinc-900/30 backdrop-blur-lg rounded-3xl border border-fuchsia-500/20 shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] text-white flex flex-col items-center gap-6 text-center animate-fadeIn transition-all duration-700 ease-out">
      
      <div className="flex items-center gap-3 animate-pulse">
        <SparklesIcon className="w-8 h-8 text-fuchsia-400 drop-shadow-lg" />
        <h3 className="text-2xl font-bold tracking-wide">
          Buscando recetas mágicas...
        </h3>
      </div>

      <p className="text-sm text-fuchsia-300 italic animate-fadeIn delay-150">
        Estamos sacudiendo los ingredientes detrás de escena
      </p>

      <div className="mt-4 animate-fadeIn delay-300">
        <Spinner />
      </div>

      
    </div>
  );
}
