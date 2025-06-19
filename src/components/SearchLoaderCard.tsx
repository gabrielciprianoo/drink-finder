import Spinner from "./Spinner";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function SearchLoaderCard() {
  return (
    <div className="h-screen md:h-auto flex justify-center items-center">
      <div className="w-full max-w-xl mx-auto  px-6 py-12 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 border border-fuchsia-500/25 shadow-[0_0_40px_-10px_rgba(236,72,153,0.4)] text-white flex flex-col items-center gap-6 text-center animate-fadeIn">
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-6 h-6 text-fuchsia-400 animate-bounce" />
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white/90">
            Buscando recetas mágicas...
          </h3>
        </div>

        <p className="text-sm text-fuchsia-300 italic max-w-xs md:max-w-md">
          Estamos sacudiendo los ingredientes detrás de escena
        </p>

        <div className="mt-6">
          <Spinner />
        </div>
      </div>
    </div>
  );
}
