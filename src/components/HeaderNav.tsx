import { NavLink } from "react-router-dom";
import { HeartIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function HeaderNav() {
  return (
    <nav className="flex space-x-8 text-md uppercase">
      <HeaderLink to="/favorites" icon={<HeartIcon className="h-5 w-5" />}>
        Favoritos
      </HeaderLink>
      <HeaderLink to="/create-with-ai" icon={<SparklesIcon className="h-5 w-5" />}>
        Crea con IA
      </HeaderLink>
    </nav>
  );
}

function HeaderLink({
  to,
  icon,
  children,
}: {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded ${
          isActive ? "text-fuchsia-400" : "text-zinc-100 hover:text-fuchsia-400"
        }`
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}
