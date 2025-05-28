import { useEffect, useRef } from "react";
import { useAppStore } from "../stores/useAppStore";
import SearchLoaderCard from "../components/SearchLoaderCard";
import { capitalize } from "../utils";

export default function IndexPage() {
  const loading = useAppStore((s) => s.loading);
  const drinks = useAppStore((s) => s.drinks);
  const { category, ingredient } = useAppStore((s) => s.filters);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (loading && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [loading]);

  const hasResults = drinks.drinks.length > 0;

  if (!loading && !hasResults) return null;

  return (
    <main className="container mx-auto md:max-w-2xl lg:max-w-5xl  px-2">
      <section
        className="bg-zinc-950 min-h-screen text-white transition-colors duration-500 px-4 md:py-16"
        ref={scrollRef}
      >
        {loading ? (
          <SearchLoaderCard />
        ) : (
          <>
            <h2 className="text-xl md:text-2xl font-semibold mb-10 text-center animate-fadeIn">
              Bebidas en la categoría{" "}
              <span className="text-fuchsia-400 font-bold">
                {capitalize(category)}
              </span>{" "}
              con el ingrediente{" "}
              <span className="text-fuchsia-400 font-bold">
                {capitalize(ingredient)}
              </span>
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
              {drinks.drinks.map((drink) => (
                <div
                  key={drink.idDrink}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-fuchsia-500/20 shadow-lg text-white transform transition-transform duration-300 hover:scale-[1.03] hover:border-fuchsia-500/60 hover:shadow-fuchsia-500/10"
                >
                  <h3 className="font-bold text-lg mb-2">{drink.strDrink}</h3>
                  <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}


