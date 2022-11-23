import React, { Component } from "react";
import Cabrio from "../../components/Cabrio";
import CabrioDescription from "../../components/CabrioDescription";
import CabrioVideo from "../../components/CabrioVideo";
import Header from "../../components/Header";
import LegalTerms from "../../components/LegalTerms";
import NavMenu from "../../components/NavMenu";
import "./index.scss";

export default class Autoforce extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <NavMenu />
        <Cabrio />
        <CabrioDescription />
        <CabrioVideo />
        <LegalTerms />
      </div>
    );
  }
}
