import { useState, useEffect } from "react";
const urlBase = 'http://localhost:5000/';

export default function App (){

    const [APIData, setAPIData] = useState()

    async function obtenerMoviesEffect() {
        const url = urlBase + "movie?id=1";
        fetch(url)
            .then((response) => response.json())
            .then(response => {setAPIData(response)});
    }

    useEffect( () => {
        obtenerMoviesEffect()
    }, []);
    
    return(
        <div>
            {APIData? <div>{console.log(APIData)}</div> : <span>Espere</span>}
        </div>
    )
}