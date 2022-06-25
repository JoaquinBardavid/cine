const urlBase = 'http://localhost:5000/';

export async function getPeliculas() {

  const url = urlBase + "pelicula";
  const res = await fetch(url)
  return await res.json();
}

export async function getPeliculasPorId(id) {
  try {
    const url = urlBase + "pelicula/" + id;
    const res = await fetch(url)
    return await res.json();
  } catch (e) {
    console.error(e);
  }
}

export async function cambiarCartelera(id, salaId) {

  try {
    const url = urlBase + "cambioCartelera/" + id
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify({
        salaId: salaId
      })
    })
    const data = await res.json();
    return await data;
  } catch (e) {
    console.error(e);
  }

}

export async function nuevaPelicula(titulo, cartelera) {
  const url = urlBase + "pelicula";
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ titulo: titulo, enCartelera: cartelera })
  };
  try {
    const res = await fetch(url, settings);
    const data = await res.json();
    return data;
  } catch (e) {
    return console.error(e);
  }
}