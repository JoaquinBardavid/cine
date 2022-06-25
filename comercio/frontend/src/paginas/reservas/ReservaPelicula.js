import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPeliculasPorId} from "../../servicios/PeliculaServicio";
import { modificarPelicula } from "../../servicios/ReservaServicio";
import Select from "react-select";

const selectEntradas = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 }
]

export default function ReservaPeliculas() {
    const { id } = useParams();

    const [cantiEntradas, setCantiEntradas] = useState();
    const handleSelectChange = ({ value }) => {
        console.log(value);
        setCantiEntradas(value);
    }

    const [APIData, setAPIData] = useState()
    const [] = useState();
    useEffect(() => {
        (async () => {
            const data = await getPeliculasPorId(id)
            setAPIData(data)
        })()
    }, []);

    return (
        <>
            <header className="body-header">Mula-Cinema</header>
            <div className="main">
                <h3>{APIData ? APIData.titulo : 'Espere...'}</h3>
                {/* <p>La pelicula se encuentra en la sala: {salaData.id }</p> */}
                <Select
                    defaultValue={{ label: 'Seleccione la cantidad de entradas que desea', value: '' }}
                    options={selectEntradas}
                    onChange={handleSelectChange}
                />
                <br/>
                <div>Cantidad de entradas seleccionadas: {cantiEntradas}</div>
                <button onClick={()=> {modificarPelicula(cantiEntradas, 1/*salaData.id*/)}}>Cargar Reserva</button>
            </div>
        </>
    );
}