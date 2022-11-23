import "./styles.scss";

import React, { Component } from "react";
import dealerLogo from '../../assets/svgs/dealer-logo.svg'
import bmwLogo from '../../assets/svgs/bmw-logo.svg'
import phoneLogo from '../../assets/svgs/phone-logo.svg'
import whatsLogo from '../../assets/svgs/whats-logo.svg'

export default class Header extends Component {
  render() {
    return (

      <header className="header-wrapper wrapper">
        <div className="header-logo">
          <div className="first-logo">
            <img src={dealerLogo} alt="dealer-logo"/>
          </div>
          <div className="separator"></div>
          <div className="second-logo">
            <img src={bmwLogo} alt='bmw-logo'/> 
          </div>
        </div>
        <div className="header-menu">
          <button >
            <img className="button-logo" src={phoneLogo} alt="" />
            <div >ligue agora</div>
          </button>
          <button >
            <img className="button-logo" src={whatsLogo} alt="" />
            <div >whatsapp</div>
          </button>
        </div>
      </header>
    );
  }
}

