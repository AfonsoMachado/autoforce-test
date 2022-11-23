import React, { Component } from "react";
import Cabrio from "../../components/Cabrio";
import CabrioDescription from "../../components/CabrioDescription";
import Header from "../../components/Header";
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
      </div>
    );
  }
}
