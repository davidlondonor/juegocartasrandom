import React from "react";
import "./App.css";
import Juego from "./components/Juego";
import Instrucciones from "./components/instrucciones/Instruccioness"

function App() {
    return (

        <div className="App" >
            <div className="App-header" >
                <Juego />
                <Instrucciones />
            </div>
        </div>


    );
}

export default App;