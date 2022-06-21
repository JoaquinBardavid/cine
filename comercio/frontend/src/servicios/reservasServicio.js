const urlBase = 'http://localhost:5000/';

export async function obtenerMoviesEffect() {
    const url = urlBase + "pelicula/1" ;
    const res = await fetch(url)
    return await res.json();
}
