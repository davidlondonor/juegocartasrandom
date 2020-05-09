import React from "react";
import Inicio from "../inicio/Inicio";
import Instruciones from "../instrucciones/Instrucciones"
import './juegos.css'
// componenetes hijos

const Juego = () => {
    return (
        <div className="bigBox">
            <h1>Ya estamos en render Hola May</h1>
            <Inicio />
            <Instrucciones />
        </div>
    );
};

export default Juego;
