import { useState, useEffect } from "react";
import { cambiarCartelera } from "../../servicios/PeliculaServicio";
import {} from "";
export default function Read() {

  const RenderTitlesB = () => {
    return (
      <div>
        {APIData.map(({ id, title, enCartelera }) => (
          <div>
            <a key={id}>{id}: {title} </a>
            <button onClick={() => cambiarCartelera(id, enCartelera)}>{enCartelera ? " en cartelera" : " fuera de cartelera"}</button>
          </div>
        ))}
      </div>
    );
  }

    return (
      <div>
        <br />
        <>peliculas:</>
        <br />
        {APIData ? <div>{console.log(APIData)}</div> : <span>Espere</span>}
        <RenderTitlesB />
      </div>
    )
}