import type { Drink } from "../types";
import DrinkCard from "./DrinkCard";

type DrinksListProps = {
  drinks: Drink[];
};

export default function DrinksList({ drinks }: DrinksListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
      {drinks.map((drink) => (
        <DrinkCard key={drink.idDrink} drink={drink} />
      ))}
    </div>
  );
}
