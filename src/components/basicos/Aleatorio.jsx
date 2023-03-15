import React from "react";

export default (props) => {
  const { min, max } = props;
  const aleatorio =
    parseInt(Math.random() * (props.max - props.min)) + props.min;
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor Minimo: </strong> {min}
      </p>
      <p>
        <strong>Valor Maximo</strong> {max}
      </p>
      <p>
        <strong>Valor Escolhido: </strong> {max}
      </p>
    </div>
  );
};
