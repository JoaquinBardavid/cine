import { useEffect, useState } from "react";
import { getReservasPorPeliID, nuevaReserva } from "../../servicios/ReservaServicio";
import { Button, MenuItem, Select } from "@mui/material";

export default function NuevaReserva(props) {

  const { peliId, titulo } = props;
  const [APIData, setAPIData] = useState();
  const [cantEntradas, setCantEntradas] = useState(0);
  const [asientos, setAsientos] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await getReservasPorPeliID(peliId)
      setAPIData(data)
    })()
    if (APIData != null) {
      APIData.forEach(reserva => {
        setAsientos(asientos + reserva.cantAsientos)
      });
    }
    setAsientos(40 - asientos);
  }, []);

  const validar = async () => {
    switch (cantEntradas) {
      case 0:
        alert("Ingrese una cantidad de entradas valida por favor!")
        break;
      default:
        if (cantEntradas <= asientos) {
          await nuevaReserva(cantEntradas, peliId);
          alert("Reserva Completada!")
        } else {
          alert(`quedan solo ${asientos}`)
        }
        break;
    }
  }

  return (
    <div>
      {APIData != null && APIData != [] ? <h3>QUEDAN {asientos} LIEBRES PARA: {titulo}</h3> : <span>QUEDAN 40 ASIENTOS DISPONIBLES PARA "{titulo}"</span>}
      <div>
        <Select displayEmpty onChange={(e) => setCantEntradas(e.target.value)}>
          <MenuItem disabled>
            <em>Elija una cantidad de entradas</em>
          </MenuItem>
          <MenuItem value={1} > 1 ENTRADA </MenuItem>
          <MenuItem value={2}> 2 ENTRADAS </MenuItem>
          <MenuItem value={3}> 3 ENTRADAS </MenuItem>
          <MenuItem value={4}> 4 ENTRADAS </MenuItem>
        </Select>
        <br />
        <div>Cantidad de entradas seleccionadas: {cantEntradas}</div>
        <Button onClick={()=>validar()}>Confirmar Reserva</Button>
        <Button href="/reservas">Volver</Button>
      </div>
    </div>
  );
}