const urlBase = 'http://localhost:5000/';

export async function getPeliculas() {
    
    const url = urlBase + "pelicula";
    const res = await fetch(url)
    return await res.json();
}

export async function getPeliculasPorId(id) {
    try{
        const url = urlBase + "pelicula/" + id;
        const res = await fetch(url)
        return await res.json();
    }catch (e)
    {
        console.error(e);
    }
}

function cambiarCartelera(id) {

    const url = urlBase + "cambioCartelera/?id=" + id
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }