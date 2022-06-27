import { Button, Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { getPeliculas, cambiarCartelera, borrarPelicula } from "../../servicios/PeliculaServicio";
import ModificarPeli from "../../componentes/peliculas/ModificarPeli";
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
        <div >
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
                            <div style={{ margin: 20, backgroundColor: "#343a40", width: "100%", borderRadius: 10, padding: 10 }} key={pelicula.id}  >
                                <ModificarPeli id={pelicula.id} titulo={pelicula.titulo} salaId={pelicula.salaId} actualizar={actualizar} img={pelicula.img}/>
                                <BorrarPeli id={pelicula.id} borrar={borrar}>Borrar Pelicula</BorrarPeli>
                            </div>
                        )
                    })}
                </Grid> :
                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    >
                    <TextField item xs={2} size="small" placeholder="Contraseña" onChange={contraAux} style={{marginTop:10}}/>
                    <Button item xs={1} size="large" onClick={verificar}>Verificar</Button>
                </Grid>
            }
        </div>
    )
};