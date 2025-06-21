import { useState } from "react";
import { useAppStore } from "../stores/useAppStore";

export function useCreateRecipeAI() {
  const [prompt, setPrompt] = useState("");
  const loading = useAppStore( (s) => s.generatedLoading);
  const generateRecipe = useAppStore( (s) => s.generateRecipe);
  const showNotification = useAppStore( (s)=> s.showNotification);


  const onChange = (value: string) => setPrompt(value);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()){
      showNotification({
        text: 'Escribe en el campo de texto la bebida que quieres crear',
        error: true
      })
      return;
    } 
    await generateRecipe(prompt);
    setPrompt('');

  };

  return {
    prompt,
    loading,
    onChange,
    onSubmit,
  };
}
