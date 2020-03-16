import React from "react";
import { toggleMobileNav } from "../Reducers/Effects";
import { connect } from "react-redux";
import Radium from "radium"

const MobileNavButton = props => {

  const styles = {
    position: "fixed",
    height: "7rem",
    backgroundColor: "#000",
    width: "100%",
    left: 0,
    top: 0
  }

  return (
    <div style={styles}>
      <button
        onClick={e => {
          e.stopPropagation();
          props.toggleNavVisibility();
        }}
        className="mobile-nav"
      >
        Toggle Side Bar
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleNavVisibility: () => dispatch(toggleMobileNav())
});

export default connect(null, mapDispatchToProps)(Radium(MobileNavButton));
