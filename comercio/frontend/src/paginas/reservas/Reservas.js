import { getPeliculas } from "../../servicios/PeliculaServicio";
import { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";

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
      <Grid style={{ textAlign: "left", marginTop: 10 }}>
        {APIData ?
          APIData.map((pelicula) => {
            return (
              <>
                <Button href={"/reservas/" + pelicula.id}>{pelicula.titulo}</Button>
              </>
            )
          }) : 'Espere...'}
      </Grid>
    </>
  );
};