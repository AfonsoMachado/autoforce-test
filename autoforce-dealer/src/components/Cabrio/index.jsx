import React, { Component } from 'react'
import './styles.scss'
import bmwImg from '../../assets/imgs/bmw.png'
import Highlights from '../Highlights'

export default class Cabrio extends Component {
  render() {
    return (
      <div className='cabrio-wrapper wrapper'>
        <div className="cabrio-header">
          <h2>Descubra o BMW Série 4 Cabrio</h2>
          <h2>Cliente On-line tem Condições Especiais e aqui na Dealer BMW!</h2>
        </div>
        <div className="cabrio-content">
          <div className="left">
            <div className="content-title">
              <h1>A partir de <strong>R$ 179.950</strong></h1>
            </div>
            <img src={bmwImg} alt="" />
          </div>
          <div className="right">
            <h2>Destaques</h2>
            <div className="highlights">  
              <div className='highlight-wrapper'>
                <Highlights name="Consumo" obs="14,7 km/l" icon="gas"/>
                <Highlights name="Potência" obs="75 cv" icon="power"/>
              </div>
              <div className='highlight-wrapper'>
                <Highlights name="Cilindrada" obs="999 cm³" icon="engine"/>
                <Highlights name="Velocidade Máx." obs="154 km/h" icon="speed"/>
              </div>
            </div>
            <button className="cabrio-button">
              tenho interesse
            </button>
          </div>
        </div>
        <div className="cabrio-end"></div>

        
      </div>
    )
  }
}
