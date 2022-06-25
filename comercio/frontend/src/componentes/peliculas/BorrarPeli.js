import { Button } from "@mui/material";

export default function BorrarPeli(props) {

    const { id, borrar } = props;

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Button onClick={()=>borrar(id)}>Borrar</Button>
        </div>
    );
}