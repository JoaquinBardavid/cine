import { useState } from "react";

export default function BorrarPeli(props) {
    
    const [boton, setBoton] = useState(false)

    return (
        <>
            {boton? <button type="borrar">Borrar</button> : <button onClick={() => setBoton(!boton)}>Borrar</button>}
            
        </>
    );
}