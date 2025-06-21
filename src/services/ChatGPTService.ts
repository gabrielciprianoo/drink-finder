import axios from "axios";
import type { Recipe } from "../types";
import { safeParse } from "valibot";
import { RecipeAPIResponseSchema } from "../schemas";
import { buildDrinkPrompt } from "../utils";

const OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const OPENAI_IMAGE_ENDPOINT = "https://api.openai.com/v1/images/generations";
const API_KEY = import.meta.env.VITE_API_KEY_OPENAI;
const DEFAULT_IMAGE = "/drinkyai.jpg";

export async function generateRecipeWithAI(prompt: string): Promise<Recipe | undefined> {
  try {
    const response = await axios.post(
      OPENAI_ENDPOINT,
      {
        model: "gpt-4",
        temperature: 0.85,
        messages: buildDrinkPrompt(prompt),
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const raw = response.data.choices[0]?.message?.content;
    if (!raw) throw new Error("Respuesta vacía");

    const parsed = safeParse(RecipeAPIResponseSchema, JSON.parse(raw));

    if (!parsed.success) {
      console.error("Validación fallida:", parsed.issues);
      return undefined;
    }

    return parsed.output;
  } catch (error) {
    console.error("Error al generar receta con IA:", error);
    return undefined;
  }
}

export async function generateImageFromPrompt(prompt: string): Promise<string> {
  try {
    const response = await axios.post(
      OPENAI_IMAGE_ENDPOINT,
      {
        prompt: `Fotografía profesional de una bebida: ${prompt}. Fondo neutro, iluminación suave.`,
        n: 1,
        size: "512x512",
        response_format: "url",
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const url = response.data?.data?.[0]?.url;
    return url || DEFAULT_IMAGE;
  } catch (error) {
    console.error("Error al generar imagen:", error);
    return DEFAULT_IMAGE;
  }
}
