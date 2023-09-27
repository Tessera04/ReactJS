import react from "react";

function Testimonio() {
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio"
        src={require("../img/testimonio-emma.png")}
        alt="foto de Emma"/>
      <div className="contenedor-texto">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">sexooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo anal</p>
      </div>
    </div>
  );
}

export default Testimonio;