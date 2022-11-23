import './styles.scss'

import React, { Component } from 'react'

export default class NavMenu extends Component {
  render() {
    return (
      <div className='nav-menu-wrapper wrapper'>
        <div className="menu">
          <div className="left-menu">
            Ofertas → <t>Novo Série 1</t>
          </div>
          <div className="right-menu">
            Voltar para página anterior
          </div>

        </div>
        <div className="site-title">
          <h1>BMW Série 4 Cabrio</h1>
        </div>
      </div>
    )
  }
}
