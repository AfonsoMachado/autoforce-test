import React, { Component } from 'react'
import './styles.scss'

export default class Highlights extends Component {
  render() {
    return (
      <div className='highlight'>
        <img src={require(`../../assets/svgs/${this.props.icon}-icon.svg`)} alt="" />
        <div className="highlight-content">
          <strong>{this.props.name}</strong>
          <strong>{this.props.obs}</strong>
        </div>
      </div>
    )
  }
}

