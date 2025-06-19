type DrinkCardProps = {
  name: string;
  image: string;
};

export default function DrinkCard({ name, image }: DrinkCardProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-fuchsia-500/20 hover:border-fuchsia-500/60 transition-all duration-300 overflow-hidden cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full aspect-[3/4] object-cover"
      />
      <div className="p-4">
        <h3 className="text-base font-semibold text-white/90 leading-tight truncate">
          {name}
        </h3>
      </div>
    </div>
  );
}
