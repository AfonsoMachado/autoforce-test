import React, { Component } from "react";
import "./styles.scss";

export default class CabrioDescription extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="cabrio-text-wrapper">
          <div className="title">
            <h1>A vida é melhor</h1>
            <h1>quando compartilhada.</h1>
            <h1>BMW Série 4 Cabrio</h1>
          </div>
          <p className="description">
            A performance irradia de cada ângulo do design inovador do BMW Série
            4 Cabrio. Começando pela dianteira, que conta com para-choque
            clássico dos modelos BMW. Ao correr os olhos pelo design, nota-se
            imediatamente o teto inclinado e a linha do ombro marcante, que
            equilibra o centro de gravidade do carro. Voltando-se para as
            laterais, são os robustos arcos de 10 mm e as incomuns rodas de 21
            polegadas que chamam a atenção. Ao chegar na traseira do BMW Série 4
            Cabrio, a força do design continua surpreendendo. O para-choque com
            difusão clássica dos modelos BMW, as lâminas horizontais e teto com
            spoiler ganham um toque a mais de amplitude devido ao vidro traseiro
            levemente rebaixado.
          </p>
        </div>

        <div className="end"></div>
      </div>
    );
  }
}
