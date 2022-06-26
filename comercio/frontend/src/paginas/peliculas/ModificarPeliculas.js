import { useNavigate } from "react-router-dom";
import NuevaPeli from "../../componentes/peliculas/NuevaPeli";
import { nuevaPelicula } from "../../servicios/PeliculaServicio";

export default function ModificarPeliculas() {
    const navigate = useNavigate();
    const validar = async (titulo, sala) => {
        if (titulo != "") {
            nuevaPelicula(titulo, sala)
            alert(`Se agregó la pelicula ${titulo} Correctamente!`) 
            navigate(-1)

        } else {
            alert("escriba algo valido por el amor a dios");
        }
    }

    return (
        <div>
            <NuevaPeli validar={validar}/>
        </div>
    )
};