import PeliculaReservaBoton from "../../componentes/reservas/PeliculaReservaBoton";
import { getPeliculas } from "../../servicios/PeliculaServicio";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

export default function Reservas() {
  const [APIData, setAPIData] = useState()

  useEffect(() => {
    (async () => {
      const data = await getPeliculas()
      setAPIData(data)
    })()
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography>Reservas</Typography>
        <div className="render-boton">
          {APIData ?
              APIData.map((pelicula) => {
                return (
                  <PeliculaReservaBoton key={pelicula.id} id={pelicula.id} />
                )
              }) : 'Espere...'}
        </div>
      </div>
    </>
  );
};