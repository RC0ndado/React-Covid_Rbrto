// Autor: Rey Condado
// Una fecha para la app de Covid-19
import "../styles/Fecha.css";


/*
const Fecha = (props) => {
    const {fecha} = props;
    return (
        <div className="fecha">
            <p>{fecha}</p>
        </div>
    );
}
*/

const Fecha = (props) => {
    const year = props.fecha.getFullYear();
    const month = props.fecha.toLocaleString("en-US", {month: "long"});
    const day = props.fecha.toLocaleString("en-US", {day: "2-digit"});
    //const date = `${day} ${month} ${year}`;
    return (
        <div className="fecha">
            <div className="fecha_año">{year}</div>
            <div className="fecha_mes">{month}</div>
            <div className="fecha_dia">{day}</div>
        </div>
    );
};

export default Fecha;