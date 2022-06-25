import { Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { getPeliculas, cambiarCartelera, borrarPelicula } from "../../servicios/PeliculaServicio";
import Read from "../../componentes/peliculas/Read";
import NuevaPeli from "../../componentes/peliculas/NuevaPeli";
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
  }

  const borrar = async (id) => {
    await borrarPelicula(id)
    const data = await getPeliculas()
    setAPIData(data)
}

    return (
        <div>
            {ingreso ?
                <div>
                    {APIData.map(pelicula => {
                        return (
                            <div style={ {marginBottom: 20} }  key={pelicula.id}  >
                                <Read id={pelicula.id} titulo={pelicula.titulo} sala={pelicula.sala} actualizar={actualizar}/>
                                <Button id={pelicula.id} borrar={borrar}>Borrar</Button>
                            </div>
                        )
                    })}
                </div> :
                <>
                    <TextField size="small" placeholder="Contraseña" onChange={contraAux} />
                    <Button size="large" onClick={verificar}>Verificar</Button>
                </>
            }
        </div>
    )
};