import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense} from 'react'
import MainLayout from "./components/layouts/MainLayout";


const FavoritesPage = lazy( () => import('./pages/FavoritesPage'));

const IndexPage = lazy(() => import('./pages/IndexPage'));

const CreatePage = lazy(() => import('./pages/CreatePage'));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={
            <Suspense fallback={'cargando...'}>
              <IndexPage />
            </Suspense>
          } />
          <Route path="/favorites" element={
            <Suspense fallback={'cargando...'}>
              <FavoritesPage />
            </Suspense>
          } />
          <Route path="/create-with-ai" element={
            <Suspense fallback={'cargando...'}>
              <CreatePage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
