import React from "react";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragemento";
import Card from "./components/layout/Card";

export default function App() {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Card titulo="Exemplo de Card"></Card>
      <Aleatorio min={10} max={60} />
      <Fragmento />
      <ComParametro
        titulo="Situacao do Aluno"
        aluno="Gabriel Oliveira"
        nota={9.3}
      ></ComParametro>
      <Primeiro />
    </div>
  );
}
