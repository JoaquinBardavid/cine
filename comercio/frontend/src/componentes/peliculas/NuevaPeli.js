import { nuevaPelicula } from "../../servicios/PeliculaServicio";
import { useState } from "react";
import { Button, MenuItem, Select } from "@mui/material";

export default function NuevaPeli() {

    const [inputTitulo, setTitulo] = useState("")
    const [sala, setSala] = useState(0)

    const validar = () => {
        if (inputTitulo != "") {
            alert(`Se agregó la pelicula ${inputTitulo} Correctamente!`)
            nuevaPelicula(inputTitulo, sala)
        } else {
            alert("escriba algo valido por el amor a dios");
        }
    }

    return (
        <>
            <label>Titulo</label>
            <input
                onChange={(e) => setTitulo(e.target.value)}
                type="text"
                placeholder="Titulo"
            />
            <br />
            <label>Sala</label>
            <Select displayEmpty onChange={(e) => setSala(e.target.value)}>
                <MenuItem disabled>
                    <em>Elija una sala</em>
                </MenuItem>
                <MenuItem value={1} >Sala 1</MenuItem>
                <MenuItem value={2}>Sala 2</MenuItem>
                <MenuItem value={3}>Sala 3</MenuItem>
            </Select>
            <Button href="/peliculas" onClick={() => validar()}>Agregar</Button>
            <Button href="/peliculas">Volver</Button>
        </>
    );
}