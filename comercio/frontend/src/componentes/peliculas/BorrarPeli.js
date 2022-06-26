import { Button, Avatar } from "@mui/material";

export default function BorrarPeli(props) {

    const { id, borrar } = props;

    return (
        <div>
            <Button 
            onClick={()=>borrar(id)}>
                Borrar
                </Button>
        </div>
    );
}