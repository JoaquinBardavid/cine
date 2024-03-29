import { Button, Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { getPeliculas, cambiarCartelera, borrarPelicula } from "../../servicios/PeliculaServicio";
import ModificarPeli from "../../componentes/peliculas/ModificarPeli";
import BorrarPeli from "../../componentes/peliculas/BorrarPeli";
import { borrarReserva } from "../../servicios/ReservaServicio";

export default function Home() {

    const [APIData, setAPIData] = useState();
    const [ingreso, setIngreso] = useState(false);
    const [contraseña, setContraseña] = useState("");

    const verificar = () => {
        let aux = contraseña;
        aux = aux.toLowerCase();
        aux == "contraseña" ? setIngreso(true) : alert("Contraseña incorrecta");
    }

    const contraAux = (e) => setContraseña(e.target.value);

    useEffect(() => {
        (async () => {
            const data = await getPeliculas()
            setAPIData(data)
        })()
    }, []);

    const actualizar = async (id, nuevaSala) => {
        await cambiarCartelera(id, nuevaSala)
        const data = await getPeliculas()
        setAPIData(data)    
    }

    const borrar = async (id) => {
        await borrarPelicula(id)
        await borrarReserva(id)
        const data = await getPeliculas()
        setAPIData(data)
        alert("La pelicula se borró correctamente")
    }

    return (
        <div >
            {APIData ?
                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <Button size="large" href="/peliculas/nueva">Crear Pelicula</Button>
                    {APIData.map(pelicula => {
                        return (
                                <div style={{ margin: 20, backgroundColor: "#343a40", width: "100%", borderRadius: 10, padding: 10 }} key={pelicula.id}  >
                                    <ModificarPeli id={pelicula.id} titulo={pelicula.titulo} salaId={pelicula.salaId} actualizar={actualizar} img={pelicula.img} />
                                    <BorrarPeli id={pelicula.id} borrar={borrar}>Borrar Pelicula</BorrarPeli>
                                </div>
                        )
                    })}
                </Grid> :
                <div>
                    espere...
                </div>
            }
        </div>
    )
};