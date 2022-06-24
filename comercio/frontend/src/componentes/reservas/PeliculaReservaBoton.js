import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPeliculasPorId } from "../../servicios/PeliculaServicio";
import BotonObtenerPelicula from "../peliculas/BotonObtenerPelicula";

export default function PeliculaReservaBoton(props) {
  
  const [APIData, setAPIData] = useState()

  useEffect(() => {
    (async () => {
      const data = await getPeliculasPorId(props.id);
      console.log(data);
      setAPIData(data)
    })()
  }, []);
  
  return (
    <>
      <div style={{ display: "flex"}}>
        <Link to={'/reservas/'+ props.id}>
          {APIData?<BotonObtenerPelicula titulo={APIData.titulo}/> : <span>Espere...</span> }
        </Link>
      </div>
    </>
  );
}