import CreateRecipeForm from "../components/CreateRecipeForm";

export default function CreatePage() {

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-fuchsia-400 mb-4">
        Crea tu bebida con IA
      </h1>
      <p className="text-center text-zinc-400 text-lg mb-10">
        Describe los sabores, ingredientes o el estilo que buscas. La IA se
        encargará del resto.
      </p>

      <CreateRecipeForm />

    </section>
  );
}
