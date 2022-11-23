import React, { Component } from 'react'
import Header from '../../components/Header'
import NavMenu from '../../components/NavMenu'

export default class Autoforce extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Header/>
        <NavMenu/>
      </div>
    )
  }
}
