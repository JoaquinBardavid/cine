import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Layout from "./paginas/Layout";
import Home from "./paginas/Home";
import Peliculas from "./paginas/Peliculas";
import Reservas from "./paginas/Reservas";

export default function App (){

    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="peliculas" element={<Peliculas />}></Route>
                <Route path="reservas" element={<Reservas />}></Route>
                <Route path="*" element={<h1>404</h1>}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      );
}