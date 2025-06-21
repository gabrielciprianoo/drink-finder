export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function buildDrinkPrompt(userPrompt: string) {
  return [
    {
      role: "system",
      content: `Eres un mixólogo creativo y vanguardista. Tu tarea es generar una receta de bebida original y con sabores poco comunes. Devuelve únicamente un JSON con esta estructura:

{
  idDrink: string; /debe ser estrictamente unico como un uuid
  strDrink: string;
  strDrinkThumb: string; /puede estar vacio se llenara despues
  strInstructions: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
}`
    },
    {
      role: "user",
      content: `El usuario quiere una bebida con esta idea: ${userPrompt}. Sé original, no expliques nada, responde solo con el objeto JSON.`,
    },
  ];
}
