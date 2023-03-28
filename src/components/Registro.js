// Autor: Rey Condado
// Renglón de datos con descripción

import Fecha from "./Fecha";
import "../styles/Registro.css";

const Registro = (props) => {
    return ( 
        <div className="registro">
            <Fecha fecha={new Date(2023,5,17)} />
            <div className="registro-descripcion">
                <h2>{props.registro.titulo}</h2>
            </div>
            <div className="registro-contagios">
                {props.registro.contagios}
            </div>
        </div>
    );
};

export default Registro;