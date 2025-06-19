import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useHeaderLogic() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  return { isHome };
}
