import { nuevaPelicula } from "../../servicios/PeliculaServicio";
import { useState } from "react";

export default function NuevaPeli() {

const [inputTitulo, setTitulo ] = useState("")
const [cartelera, setCartelera ] = useState(true)

const validar = () => {
    if(inputTitulo != "")
    {
        nuevaPelicula(inputTitulo, cartelera)
    }else
    {
        alert("escriba algo valido por el amor a dios");
    }
}

    return (
        <>
            <label>Title</label>
            <input
                onChange={(e) => setTitulo(e.target.value)}
                type="text"
                placeholder="Title"
            />
            <br />
            <label>En Cartelera?</label>
            <input onChange={(e) => setCartelera(!cartelera)} type="checkbox" /> <br />
            <button onClick={()=>validar()} >Agregar</button>
        </>
    );
}