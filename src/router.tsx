import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavoritesPage from "./views/FavoritesPage"
import Layouts from "./layouts/Layouts"

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layouts />}>
                <Route path='/' element={<IndexPage />} index />
                <Route path='/favoritos' element={<FavoritesPage />} />
            </Route>       
        </Routes>
    </BrowserRouter>
  )
}
