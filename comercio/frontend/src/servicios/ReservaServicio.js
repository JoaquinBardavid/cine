const urlBase = 'https://localhost:44388/';// 44388 --- 5000

export async function getReservasPorPeliID(id) {
    const url = urlBase + "Reserva/GetReservaPorIdPelicula/" + id ; // Reserva/ --- reserva/
    const res = await fetch(url)
    return await res.json();
}

export async function nuevaReserva(cantEntradas, peliId) {
    const url = urlBase + "Reserva"; // Reserva --- reserva/
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cantAsientos: cantEntradas, peliId: peliId })
    };
    try {
      const res = await fetch(url, settings);
      
    } catch (e) {
      return console.error(e);
    }
  }
  
  export async function borrarReserva(id) {

    try {
      const url = urlBase + "Reserva/" + id // Reserva/ --- reserva/
      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': "application/json",
        },
      })
      const data = await res.json();
      return await data;
    } catch (e) {
      console.error(e);
    }
  
  }