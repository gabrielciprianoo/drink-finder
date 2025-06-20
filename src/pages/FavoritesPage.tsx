import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DrinksList from "../components/DrinksList";
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";
import { HeartIcon } from "@heroicons/react/24/outline";
import Notification from "../components/Notification";

export default function FavoritesPage() {
  const favorites = useAppStore((s) => s.favorites);
  const navigate = useNavigate();

  const hasFavorites = useMemo(() => favorites.length > 0, [favorites]);

  return (
    <div className="min-h-screen px-4 py-10">
      {hasFavorites ? (
        <>
          <h1 className="text-xl md:text-2xl font-semibold mb-10 text-center animate-fadeIn text-gray-50">
            Tus Bebidas Favoritas
          </h1>
          <DrinksList drinks={favorites} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 mt-20 text-center animate-fadeIn text-white/80">
          <HeartIcon className="w-12 h-12 text-fuchsia-400" />
          <p className="text-lg md:text-xl font-medium">
            Aún no has agregado ninguna bebida a favoritos.
          </p>
          <p className="text-sm text-white/50 max-w-md">
            Explora las bebidas disponibles y presiona el corazón para
            guardarlas aquí.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-5 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 transition rounded-full text-sm font-medium"
          >
            Buscar bebidas
          </button>
        </div>
      )}

      <Modal />
      <Notification/>
    </div>
  );
}
