import React, { Component } from "react";
import "./intrucciones.css"

class Instrucciones extends Component {
    render() {
        return (
            <div className="instrucciones">
                <h1>Instrucciones</h1>
                <p>1. Selecciona la baraja, tienes la oportunidad
                de que te salga un tesoro que te preoporcione alguna propiedad para seguir
                compitiendo en el siguiente nivel o un villano con el que vas a competir.
                <br />
                2. En la sala de juego te aparecera al azar el villano en el que debes competir.
                <br />
                3. Luego debes seleccionar el campeon que quieres que vaya a competir con el villano
                que te aparece en pantalla, puedes mirar sus caracteristicas para que elija el campeón que
                derrotará al villano.
                <br />
                4. Puedes seguir avanzando hasta que acomules la mayor cantidad de logros.

                </p>
            </div>
        );
    }
}

export default Instrucciones;
