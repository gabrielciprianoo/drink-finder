import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesPage, IndexPage } from "./pages";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
