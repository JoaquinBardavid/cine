import { useEffect, useState } from "react";
import { Button, MenuItem, Select } from "@mui/material";
import { nuevaReserva } from "../../servicios/ReservaServicio";
import { useNavigate } from "react-router-dom";

export default function NuevaReserva(props) {

  const { peliId, titulo, reservas } = props;
  const [cantEntradas, setCantEntradas] = useState(0);
  const [asientos, setAsientos] = useState(40);
  const navigate = useNavigate();

  useEffect(() => {
    let aux = 0;
    reservas.forEach(r => {
      aux = aux + r.cantAsientos;
    });
    setAsientos(40 - aux)
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
          navigate(-1);
        } else {
          alert(`quedan solo ${asientos}`)
        }
        break;
    }
  }

  return (
    <div>
      <h3>QUEDAN {asientos} ENTRADAS PARA: {titulo}</h3>
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
      <Button onClick={() => validar()}>Confirmar Reserva</Button>
      <Button href="/reservas">Volver</Button>
    </div>
  );
}