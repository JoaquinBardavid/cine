import { useState } from "react";
import { Button, MenuItem, Select, TextField, Grid, Box } from "@mui/material";
import { nuevaPelicula } from "../../servicios/PeliculaServicio";

export default function NuevaPeli(props) {

    const { validar } = props

    const [titulo, setTitulo] = useState("")
    const [salaId, setSala] = useState(0)
    const [imagen, setImagen] = useState("")

    const convertirABase64 = (archivo) => {

        var reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.onload = function () {
            var base64 = reader.result;
            setImagen(base64)
        }
    }

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
            <Button
                variant="contained"
                component="label"

            >
                Subir Foto
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => { convertirABase64(e.target.files[0]) }}
                    hidden
                />
            </Button>
            {imagen != "" ? <img width={200} style={{alignSelf:"center"}} src={imagen} /> : <>Esperando Foto...</>}
            <Button onClick={() => validar(titulo, salaId, imagen)}>Agregar Pelicula</Button>
            <Button href="/peliculas">Volver</Button>
        </Grid>
    );
}