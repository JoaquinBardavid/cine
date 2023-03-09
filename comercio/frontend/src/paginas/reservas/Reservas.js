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
            if (pelicula.salaId != 0) {
              return (
                <Button
                  style={{ width: 250, height: 300 }}
                  href={"/reservas/" + pelicula.id}
                >
                  {pelicula.img != "" ?
                    <img height={300} width={250} src={pelicula.img} /> :
                    pelicula.titulo
                  }
                </Button>
              )
            }
          }) : 'Espere...'}
      </Grid>
    </>
  );
};