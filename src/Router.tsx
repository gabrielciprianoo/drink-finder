import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesPage, IndexPage } from "./pages";
import MainLayout from "./components/layouts/MainLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
