import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchFormLogic } from "../hooks/useSearchFormLogic";

export default function SearchForm() {
  const { categories, searchFilters, handleChange, handleSubmit } = useSearchFormLogic();

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl bg-white/20 backdrop-blur-lg p-6 rounded-lg flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 opacity-0 animate-fadeInUp delay-500"
    >
      <input
        type="text"
        name="ingredient"
        placeholder="Ingredientes"
        value={searchFilters.ingredient}
        onChange={handleChange}
        className="flex-1 px-4 py-2 rounded-md bg-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
      />

      <select
        name="category"
        value={searchFilters.category}
        onChange={handleChange}
        className="px-4 py-2 cursor-pointer rounded-md bg-white/30 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
      >
        <option value="" className="text-black/70">Categoría</option>
        {categories.drinks.map((cat) => (
          <option key={cat.strCategory} value={cat.strCategory} className="text-black/70">
            {cat.strCategory}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="px-6 py-2 bg-fuchsia-500 hover:bg-fuchsia-600 rounded-md text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-fuchsia-400 cursor-pointer"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
        <span className="md:sr-only ml-2 md:ml-0">Buscar</span>
      </button>
    </form>
  );
}
