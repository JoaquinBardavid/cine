import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPeliculasPorId } from "../../servicios/PeliculaServicio";
import NuevaReserva from "../../componentes/reservas/NuevaReserva";

export default function ReservaPeliculas() {
    const { id } = useParams();

    const [APIData, setAPIData] = useState()

    useEffect(() => {
        (async () => {
            const data = await getPeliculasPorId(id)
            setAPIData(data)
        })()
    }, []);

    return (
        <>
            {APIData? <NuevaReserva peliId={APIData.id} titulo={APIData.titulo} /> : <span>Espere...</span>}
        </>
    );
}