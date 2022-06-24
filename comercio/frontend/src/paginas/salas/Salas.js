import { useState } from "react";

export default function Salas() {
    const [imagen, setImagen] = useState()

    const convertirABase64 = (archivos) => {
        Array.from(archivos).forEach(archivo => {
            var reader = new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload = function () {
                var arrayAuxiliar = [];
                var base64 = reader.result;
                arrayAuxiliar = base64.split(",");
                console.log(arrayAuxiliar[1]);
                setImagen(base64)
            }
        })
    }

    return (
        <>
            <div>
                <input type="file" accept="image/*" multiple onChange={(e) => convertirABase64(e.target.files)} />
                {imagen ? <img width={200} height={200} src={imagen} /> : "esperando..."}
            </div>
        </>
    );
};
