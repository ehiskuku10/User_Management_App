import React, { Component } from "react"
import Navigation from "./Navigation"
import { connect } from "react-redux"
import Radium from "radium"

class SideBar extends Component {
  render() {

    const styles = {
      "@media (max-width: 640px)": {
        left: this.props.showNav ? "0px" : "-230px"
      }
    };

    return (
      <div style={styles} className="side-bar">
        <div className="heading">{this.props.title}</div>
        <Navigation/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showNav: state.Effects.showNav
});

export default connect(mapStateToProps, null)(Radium(SideBar));