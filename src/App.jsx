import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragemento";

export default function App() {
  return (
    <div ClassName="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        {" "}
        <Card titulo=" #04 - Desafio Aleatorio" color="#FA6900">
          <Aleatorio min={10} max={60} />
        </Card>
        <Card titulo=" #03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>
        <Card titulo=" #02 - Com Parametro" color="#E8B71A">
          <ComParametro
            titulo="Situacao do Aluno"
            aluno="Gabriel Oliveira"
            nota={9.3}
          />
        </Card>
        <Card titulo=" #01 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
