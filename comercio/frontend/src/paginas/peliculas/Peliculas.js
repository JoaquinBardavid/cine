import { Button, Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { getPeliculas, cambiarCartelera, borrarPelicula } from "../../servicios/PeliculaServicio";
import Read from "../../componentes/peliculas/Read";
import BorrarPeli from "../../componentes/peliculas/BorrarPeli";

export default function Home() {

    const [APIData, setAPIData] = useState();
    const [ingreso, setIngreso] = useState(false);
    const [contraseña, setContraseña] = useState("");

    const verificar = () => {
        let aux = contraseña;
        aux = aux.toLowerCase();
        aux == "contraseña" ? setIngreso(true) : console.log("mal ahi");
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
        alert("La pelicula se agregó correctamente")
    }

    const borrar = async (id) => {
        await borrarPelicula(id)
        const data = await getPeliculas()
        setAPIData(data)
        alert("La pelicula se borró correctamente")
    }

    return (
        <div>
            {ingreso ?
                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <Button size="large" href="/peliculas/nueva">Crear Pelicula</Button>
                    {APIData.map(pelicula => {
                        return (
                            <div style={{ margin: 20, backgroundColor:"#343a40", width:"100%", borderRadius:10, padding:10}}  key={pelicula.id}  >
                                <Read id={pelicula.id} titulo={pelicula.titulo} salaId={pelicula.salaId} actualizar={actualizar} />
                                <BorrarPeli id={pelicula.id} borrar={borrar}>Borrar Pelicula</BorrarPeli>
                            </div>
                        )
                    })}
                </Grid> :
                <>
                    <TextField size="small" placeholder="Contraseña" onChange={contraAux} />
                    <Button size="large" onClick={verificar}>Verificar</Button>
                </>
            }
        </div>
    )
};