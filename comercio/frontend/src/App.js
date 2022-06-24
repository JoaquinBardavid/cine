import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Layout from "./paginas/Layout";
import Home from "./paginas/Home";
import Peliculas from "./paginas/peliculas/Peliculas";
import ReservaPelicula from "./paginas/reservas/ReservaPelicula";
import Reservas from "./paginas/reservas/Reservas";
import Salas from "./paginas/salas/Salas"; 
import "./App.css"
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme ({ 
  typography:{
    fontFamily: 'Poppins'
  },
  components:{
    MuiLink:{
      styleOverrides: {
        root: {
          margin: 5
        }
      }
    }
  }
})


export default function App (){

    return (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="peliculas" element={<Peliculas />}></Route>
                <Route path="reservas" element={<Reservas />}></Route>
                <Route path='/reservas/:id' element={<ReservaPelicula />} ></Route>
                <Route path="salas" element={<Salas />}></Route>
                <Route path="*" element={<h1>404</h1>}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      );
}