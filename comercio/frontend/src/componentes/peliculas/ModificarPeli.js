import { useState } from "react";
import { MenuItem, Select, TextField, Button, Grid } from "@mui/material";

export default function Read(props) {

  const { id, titulo, salaId, actualizar, img } = props;

  const [nuevaSala, setNuevaSala] = useState(0);

  return (

    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <TextField size="small" value={titulo} disabled />
      {salaId == 0 ?
        <Select
          displayEmpty
          onChange={(e) => setNuevaSala(e.target.value)}
        >
          <MenuItem disabled>
            <em>Elija una sala</em>
          </MenuItem>
          <MenuItem value={1} >Sala 1</MenuItem>
          <MenuItem value={2}>Sala 2</MenuItem>
          <MenuItem value={3}>Sala 3</MenuItem>
        </Select> :
        `Disponible en la sala ${salaId}`}
      <Button size="large" onClick={() => {
        actualizar(id, nuevaSala);
        setNuevaSala(0)
      }}>
        {salaId == 0 ? "Seleccionar Sala " : "Cambiar a 'fuera de cartelera' "}
      </Button>
      {img? <img width={200} src={img}/> : <>SIN FOTO :C</>}
    </Grid>
  )
}


