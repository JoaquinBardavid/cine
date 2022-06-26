
import { useState } from "react";
import { Button, MenuItem, Select, TextField, Grid } from "@mui/material";

export default function NuevaPeli(props) {

    const { validar } = props

    const [titulo, setTitulo] = useState("")
    const [salaId, setSala] = useState(0)

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="left"
        >
            <label>Titulo</label>
            <TextField
                onChange={(e) => setTitulo(e.target.value)}
                type="text"
                placeholder="Titulo"
                size="small"
            />
            <label>Sala</label>
            <Select displayEmpty onChange={(e) => setSala(e.target.value)} style={{ marginBottom: 50 }}>
                <MenuItem disabled>
                    <em>Elija una sala</em>
                </MenuItem>
                <MenuItem value={1}>Sala 1</MenuItem>
                <MenuItem value={2}>Sala 2</MenuItem>
                <MenuItem value={3}>Sala 3</MenuItem>
            </Select>
            <br />
            <Button onClick={() => validar(titulo, salaId)}>Agregar Pelicula</Button>
            <Button href="/peliculas">Volver</Button>
        </Grid>
    );
}