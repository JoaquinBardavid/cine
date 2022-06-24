import { Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { getPeliculasPorId, getPeliculas } from "../../servicios/PeliculaServicio";

export default function Home() {

    const [APIData, setAPIData] = useState();
    const [ingreso, setIngreso] = useState(false);
    const [contraseña, setContraseña] = useState("");

    const verificar = () => {
        let aux = contraseña;
        aux = aux.toLowerCase();
        aux == "contraseña" ? setIngreso(true) : console.log("mal ahi");
    }

    const contraAux = (e) => setContraseña(e.target.value);

    useEffect(() => {
        (async () => {
            const data = await getPeliculas()
            setAPIData(data)
        })()
    }, []);

    return (
        <div>
            {ingreso ?
                <Typography>
                    Bienvenido :D
                </Typography> :
                <>
                    <TextField size="small" placeholder="Contraseña" onChange={contraAux} />
                    <Button size="large" onClick={verificar}>Verificar</Button>
                </>
            }
        </div>
    )
};