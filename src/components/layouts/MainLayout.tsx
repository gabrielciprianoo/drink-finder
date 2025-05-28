import { useLocation } from "react-router-dom";
import Header from "../Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const { pathname } = useLocation();
  const showMainWrapper = pathname !== "/"; 

  return (
    <>
      <Header />
      {showMainWrapper ? (
        <main className="container mx-auto md:max-w-2xl lg:max-w-5xl px-2">
          <Outlet />
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}
