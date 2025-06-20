import { useEffect, useState, useCallback } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useAppStore } from "../stores/useAppStore";

export function useSearchFormLogic() {
  const fetchCategories = useAppStore((s) => s.fetchCategories);
  const categories = useAppStore((s) => s.categories);
  const searchRecipers = useAppStore((s) => s.searchRecipers);
  const showNotification = useAppStore ((s) => s.showNotification);

  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setSearchFilters((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (Object.values(searchFilters).includes("")) {
        showNotification({
          error: true,
          text: 'Llena todos los campos para buscar bebidas'
        })
        return;
      }
      searchRecipers(searchFilters);
    },
    [searchFilters, searchRecipers]
  );

  return {
    categories,
    searchFilters,
    handleChange,
    handleSubmit,
  };
}
