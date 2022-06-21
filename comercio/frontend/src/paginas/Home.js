import { useState, useEffect } from "react";
import { obtenerMoviesEffect } from "../servicios/reservasServicio";
export default function Home (){
    
    const [APIData, setAPIData] = useState()

    useEffect( () => {
        (async () => {
            const data = await obtenerMoviesEffect()
            setAPIData(data)
          })()
    }, []);
    

    return(
        <div>
            {<div>{APIData.id}</div>}
        </div>
    )
  };