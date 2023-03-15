import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragemento";

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro
      titulo="Situacao do Aluno"
      aluno="Gabriel Oliveira"
      nota={9.3}
    ></ComParametro>
    <Fragmento></Fragmento>
  </div>,
  document.getElementById("root")
);
