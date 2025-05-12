import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-zinc-900 text-white w-full shadow-sm">
      <div className="container mx-auto md:max-w-2xl lg:max-w-5xl px-2 py-8">
        <div className="flex flex-col md:flex-row  gap-10 md:gap-0 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/drinky.png" alt="Drinky Logo" className="h-35 w-auto" />
          </Link>

          <nav className="flex space-x-8 text-lg uppercase font-bold">
            <Link
              to="/favorites"
              className="text-zinc-100 hover:text-fuchsia-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded"
            >
              Favoritos
            </Link>
            <a
              href="#"
              className="text-zinc-100 hover:text-fuchsia-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded"
            >
              Crea con ia
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
