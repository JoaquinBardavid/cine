import { cambiarCartelera } from "../../servicios/PeliculaServicio";
import { useState } from "react";

export default function Read(props) {

  const { id, titulo, enCartelera } = props;

  const [cartelera, setCartelera] = useState(enCartelera);

  const actualizar = () => {
    setCartelera(!cartelera);
    cambiarCartelera(id);
  }

  
  return (
    <>
      <div>
        <input type="text" value={titulo} disabled/>
        <button onClick={() => actualizar()}>{cartelera? "en Cartelera " : "no esta en Cartelera "}</button>
      </div>
    </>
  )
}