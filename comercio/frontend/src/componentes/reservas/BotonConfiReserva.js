import { useEffect, useState } from "react";
import { getPeliculas } from "../../servicios/PeliculaServicio";


export default function BotonConfiReserva()
{
     const [APIData, setAPIData] = useState()
    const [] = useState();
    useEffect(() => {
        (async () => {
            const data = await getPeliculas(1)
            setAPIData(data)
            console.log('Si aparece despues de clieckear boton, sos crack')
          })()
    }, []);

    return (
        <div>Esta vivo!!!</div>
    );
}