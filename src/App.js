import React, { Component } from "react";
import SideBar from "./SideBar";
import SidePanel from "./SidePanel";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import MobileNavButton from "./Components/MobileNavButton";
import { hideMobileNav } from "./Reducers/Effects";
import { connect } from "react-redux";
import BackDrop from "./Components/BackDrop";
import BackDropLG from "./Components/BackDrop_LG";
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/core";

/**
 * Components Import
 */
import AllUsers from "./SidePanel/AllUsers";
import SingleUser from "./SidePanel/SingleUser";
import CreateUser from "./SidePanel/CreateUser";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  top: 45%;
`;

class App extends Component {
  render() {
    let { hideNavVisibility, loading } = this.props;
    return (
      <div
        className="container"
        onClick={() => {
          hideNavVisibility(false);
        }}
      >
        <SideBar title="User Management App" />
        <SidePanel>
          <Switch>
            <Route path="/user/add" component={CreateUser} />
            <Route path="/user/all" component={AllUsers} />
            <Route
              path="/user/:userId"
              exact
              component={withRouter(SingleUser)}
            />
            <Redirect from="/" to="/user/add" />
          </Switch>
        </SidePanel>
        <MobileNavButton />
        <BackDrop />
        <BackDropLG>
          <FadeLoader
            css={override}
            sizeUnit={"px"}
            size={100}
            color={"white"}
            loading={loading}
          />
        </BackDropLG>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.Effects.isloading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideNavVisibility: option => dispatch(hideMobileNav(option))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
