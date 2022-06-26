const urlBase = 'http://localhost:5000/';

export async function getReservasPorPeliID(id) {
    const url = urlBase + "reserva/" + id ;
    const res = await fetch(url)
    return await res.json();
}

export async function nuevaReserva(cantEntradas, peliId) {
    const url = urlBase + "reserva";
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cantAsientos: cantEntradas, peliId: peliId })
    };
    try {
      const res = await fetch(url, settings);
      const data = await res.json();
      return data;
    } catch (e) {
      return console.error(e);
    }
  }