import { NavLink } from "react-router-dom";
import { useHeaderLogic } from "../hooks/useHeaderLogic";
import HeaderNav from "./HeaderNav";
import SearchForm from "./SearchForm";

export default function Header() {
  const { isHome } = useHeaderLogic();

  return (
    <header
      className={`transition-opacity duration-1000 ease-out ${
        isHome
          ? "relative bg-[url('/background.jpg')] min-h-screen md:min-h-[90%] lg:min-h-screen bg-center bg-cover opacity-0 animate-fadeIn"
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

          <HeaderNav />
        </div>

        {isHome && (
          <div className="flex flex-col items-center justify-center animate-fadeIn delay-300 py-15">
            <h2 className="capitalize text-3xl text-center font-bold text-white mt-10 mb-15 opacity-0 animate-fadeInUp">
              encuentra las mejores recetas de bebidas
            </h2>
            <SearchForm />
          </div>
        )}
      </div>
    </header>
  );
}
