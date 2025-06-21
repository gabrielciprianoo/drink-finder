import { useState } from "react";
import type { Recipe } from "../types";

export function useCreateRecipeAI() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const onChange = (value: string) => setPrompt(value);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setRecipe(null);

    const result = {} as Recipe; 
    setTimeout(() => {
      setRecipe(result);
      setLoading(false);
    }, 1500);
  };

  return {
    prompt,
    loading,
    recipe,
    onChange,
    onSubmit,
  };
}
