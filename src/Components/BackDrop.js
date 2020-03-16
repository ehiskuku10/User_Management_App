import React from "react";
import Radium from "radium";
import { connect } from "react-redux"

const BackDrop = props => {
  const styles = {
    background: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100%",
    zIndex: 1000,
    position: "fixed",
    top: 0,
    display: props.showNav ? "block" : "none",
    left: 0
  };

  return (
    <div style={styles}>
    </div>
  )
};


const mapStateToProps = state => ({
  showNav: state.Effects.showNav
});


export default connect(mapStateToProps, null)(Radium(BackDrop))
