import React from "react";
import { toggleMobileNav } from "../Reducers/Effects";
import { connect } from "react-redux";

const MobileNavButton = props => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        props.toggleNavVisibility()
      }}
      className="mobile-nav"
    >
      Toggle Side Bar
    </button>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleNavVisibility: () => dispatch(toggleMobileNav())
});

export default connect(null, mapDispatchToProps)(MobileNavButton);
