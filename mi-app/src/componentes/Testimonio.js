import react from "react";
import '../stylesheets/Testimonio.css';

function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio"
        src={require("../img/testimonio-emma.png")}
        alt="foto de Emma"/>
      <div className="contenedor-texto">
        <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;