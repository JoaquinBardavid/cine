const urlBase = 'https://localhost:44388/';//44388 --- 5000

export async function getPeliculas() {

  const url = urlBase + "Pelicula"; //Pelicula --- pelicula
  const res = await fetch(url)
  return await res.json();
}

export async function getPeliculasPorId(id) {
  try {
    const url = urlBase + "Pelicula/GetPeliculaPorId/" + id; // Pelicula/GetPeliculaPorId --- pelicula/
    const res = await fetch(url)
    return await res.json();
  } catch (e) {
    console.error(e);
  }
}

export async function cambiarCartelera(id, salaId) {
  try {
    const url = urlBase + "Pelicula/CambioCartelera/" + id; // Pelicula/CambioCartelera --- cambioCartelera/
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify({
        salaId: salaId
      })
    })
    if(res.status != 200){
      throw res.statusText
    }
    //no hacer nada con la respuesta, viene vacia
  } catch (e) {
    console.error(e);
  }

}

export async function nuevaPelicula(titulo, salaId, imagen) {
  const url = urlBase + "Pelicula"; // Pelicula --- pelicula
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ titulo, salaId, img:imagen })
  };
  try {
    const res = await fetch(url, settings);
    const data = await res.json();
    return data;
  } catch (e) {
    return console.error(e);
  }
}

export async function borrarPelicula(id) {

  try {
    const url = urlBase + "Pelicula/BorrarPelicula/" + id // Pelicula/BorrarPelicula --- pelicula/
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': "application/json",
      },
    })
    if(res.status != 200){
      throw res.statusText
    }
  } catch (e) {
    console.error(e);
  }

}