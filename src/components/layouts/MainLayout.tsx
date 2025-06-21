import { useLocation } from "react-router-dom";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAppStore } from "../../stores/useAppStore";
import Notification from "../Notification";

export default function MainLayout() {
  const { pathname } = useLocation();
  const showMainWrapper = pathname !== "/"; 
  const loadFromStorage = useAppStore( (s) => s.loadFromStorage);
  const loadGeneratedFromStorage = useAppStore( (s) => s.loadGeneratedFromStorage);
  useEffect(()=>{
    loadFromStorage();
    loadGeneratedFromStorage();
  },[])
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
      <Notification/>
    </>
  );
}
