import React from "react";
import Radium from "radium";
import { connect } from "react-redux";

const BackDropLG = props => {
  const styles = {
    background: "rgba(0, 0, 0, 0.7)",
    width: "100vw",
    height: "100vh",
    zIndex: 3000,
    position: "fixed",
    top: 0,
    display: (props.loading ? "block" : "none"),
    left: 0
  };

  return <div style={styles}>{props.children}</div>;
};

const mapStateToProps = state => ({
  loading: state.Effects.isLoading
});

export default connect(mapStateToProps, null)(Radium(BackDropLG));
