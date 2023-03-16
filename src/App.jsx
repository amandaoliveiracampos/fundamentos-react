import React from "react";
import Card from "./components/layout/Card";

import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragemento";

export default function App() {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Card titulo=" #04 - Desafio Aleatorio">
        <Aleatorio min={10} max={60} />
      </Card>

      <Card titulo=" #03 - Fragmento">
        <Fragmento />
      </Card>

      <Card titulo=" #02 - Com Parametro">
        <ComParametro
          titulo="Situacao do Aluno"
          aluno="Gabriel Oliveira"
          nota={9.3}
        />
      </Card>

      <Card titulo=" #01 - Primeiro Componente">
        <Primeiro />
      </Card>
    </div>
  );
}
