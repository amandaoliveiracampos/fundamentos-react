import "./App.css";
import React from "react";

import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatório from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParâmetro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragemento";
import ListaAlunos from "./components/repticao/ListaAlunos";

export default function App() {
  return (
    <div ClassName="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo=" #06 - Repetição" color="#FF4C65">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo=" #05 - Componentes com Filhos" color="#00C8F8">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro " />
            <FamiliaMembro nome="Ana " />
            <FamiliaMembro nome="Gustavo " />
          </Familia>
        </Card>

        <Card titulo=" #04 - Desafio Aleatório" color="#FA6900">
          <Aleatório min={10} max={60} />
        </Card>

        <Card titulo=" #03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo=" #02 - Com Parâmetro" color="#E8B71A">
          <ComParâmetro
            titulo="Situação do Aluno"
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
