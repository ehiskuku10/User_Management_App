import React, { Component } from "react"
import Navigation from "./Navigation"

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="heading">{this.props.title}</div>
        <Navigation/>
      </div>
    )
  }
}

export default SideBar