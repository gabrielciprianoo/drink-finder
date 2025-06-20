import { useEffect, useRef } from "react";
import { useAppStore } from "../stores/useAppStore";
import SearchLoaderCard from "../components/SearchLoaderCard";
import { capitalize } from "../utils";
import Modal from "../components/Modal";
import DrinksList from "../components/DrinksList";
import Notification from "../components/Notification";

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
    <main className="container mx-auto md:max-w-2xl lg:max-w-5xl px-2">
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

            <DrinksList drinks={drinks.drinks}/>
          </>
        )}
      </section>

      <Modal/>
      <Notification/>
    </main>
  );
}
