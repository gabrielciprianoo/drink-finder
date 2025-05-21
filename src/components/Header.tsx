import { NavLink, useLocation } from "react-router-dom";
import {
  HeartIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);
  const fetchCategories = useAppStore( ( s ) => s.fetchCategories);
  const categories = useAppStore( ( s ) => s.categories);

  useEffect(()=>{
    fetchCategories()
  }, [fetchCategories])
  return (
    <header
      className={`transition-opacity duration-1000 ease-out
    ${
      isHome
        ? "relative bg-[url('/background.jpg')] min-h-screen bg-center bg-cover opacity-0 animate-fadeIn"
        : "bg-zinc-900 text-white w-full shadow-sm"
    }`}
    >
      {isHome && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-fuchsia-950/80 to-black/60 z-0" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xs z-0" />
        </>
      )}

      <div className="relative z-10 container mx-auto md:max-w-2xl lg:max-w-5xl px-2 py-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/drinky.png" alt="Drinky Logo" className="h-35 w-auto" />
          </NavLink>

          <nav className="flex space-x-8 text-md uppercase">
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-fuchsia-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded"
                  : "flex items-center gap-2 text-zinc-100 hover:text-fuchsia-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded"
              }
            >
              <HeartIcon className="h-5 w-5" />
              Favoritos
            </NavLink>
            <NavLink
              to="/create-with-ai"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-fuchsia-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded"
                  : "flex items-center gap-2 text-zinc-100 hover:text-fuchsia-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded"
              }
            >
              <SparklesIcon className="h-5 w-5" />
              Crea con IA
            </NavLink>
          </nav>
        </div>

       
        {isHome && (
          <div className="flex flex-col items-center justify-center animate-fadeIn delay-300 py-15">
            <h2 className="capitalize text-3xl text-center font-bold text-white mt-10 mb-15 opacity-0 animate-fadeInUp">
              encuentra las mejores recetas de bebidas
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full max-w-3xl bg-white/20 backdrop-blur-lg p-6 rounded-lg flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 opacity-0 animate-fadeInUp delay-500"
            >
              <input
                type="text"
                placeholder="Ingredientes"
                className="flex-1 px-4 py-2 rounded-md bg-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              />

              <select className="px-4 cursor-pointer py-2 rounded-md bg-white/30 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
                <option value="" disabled selected className="text-black/70">
                  Categoría
                </option>
                {categories.drinks.map( category => (
                  <option 
                    key={category.strCategory} 
                    value={category.strCategory} 
                    className="text-black/70">
                    {category.strCategory}
                </option>
                ) )}
              </select>

              <button
                type="submit"
                className="px-6 py-2 bg-fuchsia-500 hover:bg-fuchsia-600 rounded-md text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-fuchsia-400 cursor-pointer"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span className="md:sr-only ml-2 md:ml-0">Buscar</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
