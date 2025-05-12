import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto md:max-w-2xl lg:max-w-5xl py-16 px-2">
        <Outlet />
      </main>
    </>
  );
}
