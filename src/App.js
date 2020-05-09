import React from "react";
import "./App.css";
import Juego from "./components/Juego";
import Instrucciones from "./components/instrucciones/Instruccioness"
import Inicio from "./components/inicio/inicio"
import SaladeJuego from "./components/salaDeJuego/SalaDeJuego"

function App() {
    return (

        <
        div className="bigBox" >
            <
                Inicio />
            <
                Instrucciones />
            <
                SalaDeJuego />
            <
        /div>


    );
}

export default App;