import { useNavigate } from "react-router-dom";
import NuevaPeli from "../../componentes/peliculas/NuevaPeli";
import { nuevaPelicula } from "../../servicios/PeliculaServicio";

export default function ModificarPeliculas() {
    const navigate = useNavigate();
    
    const validar = async (titulo, sala, imagen) => {
        if (titulo != "") {
            nuevaPelicula(titulo, sala, imagen)
            alert(`Se agregó la pelicula ${titulo} Correctamente!`) 
            navigate(-1)

        } else {
            alert("Debe ingresar un titulo");
        }
    }

    return (
        <div>
            <NuevaPeli validar={validar}/>
        </div>
    )
};