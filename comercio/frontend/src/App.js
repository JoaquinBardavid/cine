import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./paginas/Layout";
import Home from "./paginas/Home";
import Peliculas from "./paginas/peliculas/Peliculas";
import ReservaPelicula from "./paginas/reservas/ReservaPelicula";
import Reservas from "./paginas/reservas/Reservas";
import ModificarPeliculas from "./paginas/peliculas/ModificarPeliculas";
import "./App.css"
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins'
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          margin: 10
        }
      }
    },
    MuiList:{
      styleOverrides:{
        root:{
           color:"#ced4da",
           backgroundColor:"gray"
        }
      }
    },
    MuiButton:{
      styleOverrides:{
        root:{
          color:"#ced4da",
          backgroundColor:"gray",
          margin:5
        }
      }
    },
    MuiInputBase:{
      styleOverrides:{
        input:{
          color:"#ced4da",
          backgroundColor:"gray",
          alignSelf:"center",
          borderRadius:10
        },
        root:{
          display:"flex",
          alignContent:"center"
        }
      }
    }
  },
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ced4da"
    },
    primary:{
      main: "#660708"
    }
  }
})

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/><Box></Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="peliculas" element={<Peliculas />}></Route>
            <Route path="peliculas/nueva" element={<ModificarPeliculas />}></Route>
            <Route path="reservas" element={<Reservas />}></Route>
            <Route path='/reservas/:id' element={<ReservaPelicula />} ></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}