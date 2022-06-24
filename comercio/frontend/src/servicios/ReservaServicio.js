const urlBase = 'http://localhost:5000/';

export async function obtenerSalaEffectUnico(id) {
    const url = urlBase + "sala/"+ id ;
    const res = await fetch(url)
    return await res.json();
}


export  function modificarPelicula(selectValor,salaId) {
    const url = urlBase + "reserva";
    const res =  fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cantAsientos: selectValor ,
            salaId: salaId,
         })
    }
    )
}