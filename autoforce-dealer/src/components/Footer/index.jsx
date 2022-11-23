/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./styles.scss";
import logoWhite from "../../assets/svgs/dealer-white-logo.svg";
import youtubeLogo from "../../assets/svgs/youtube-icon.svg";
import linkedinLogo from "../../assets/svgs/linkedin-icon.svg";
import instagramLogo from "../../assets/svgs/instagram-icon.svg";
import afLogo from "../../assets/svgs/af-logo.svg";
import mapIcon from "../../assets/svgs/map-icon.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper wrapper">
        <div className="footer-header">
          <img src={logoWhite} alt="" />
          <div className="social">
            <span>SIGA-NOS:</span>
            <img src={youtubeLogo} alt="" />
            <img src={linkedinLogo} alt="" />
            <img src={instagramLogo} alt="" />
          </div>
        </div>
        <div className="info">
          <ul>
            <li>
              <strong>Razão social: </strong>AUTO FORCE PLATAFORMA DE MARKETING
              DIGITAL LTDA
            </li>
            <li>
              <strong>CNPJ: </strong>22.588.947/0001-06
            </li>
            <li>
              <strong>Endereço Matriz: </strong>Av. Prudente de Morais, 3966,
              Lagoa Nova. Natal/RN – CEP 59056-200 &nbsp;&nbsp;
              <a href="">Ver mapa</a> <img src={mapIcon} alt="" />
            </li>
          </ul>
        </div>
        <div className="footer">
          <img src={afLogo} alt="" />
          <div className="copy">
            <span>
              © Copyright 2021 - AutoForce - Todos os direitos reservados
            </span>
            <span>
              Confira a nossa <a href="#">Politica de privacidade.</a>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
