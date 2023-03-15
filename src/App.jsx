import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragemento";

export default (_) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Fragmento />
    <ComParametro
      titulo="Situacao do Aluno"
      aluno="Gabriel Oliveira"
      nota={9.3}
    ></ComParametro>
    <Primeiro />
  </div>
);
