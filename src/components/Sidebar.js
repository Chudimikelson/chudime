import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <button id="menuBar" className="" onClick={() => this.openSidebarClickHandler} >
        <span id='menubaricon' ><i className="fas fa-bars"></i></span>
      </button>
    )
  }
}
