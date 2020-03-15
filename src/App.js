import React, { Component } from "react"
import SideBar from './SideBar'
import SidePanel from './SidePanel'
import { Route, withRouter, Switch, Redirect } from "react-router-dom"

/**
 * Components Import
 */
import AllUsers from "./SidePanel/AllUsers";
import SingleUser from "./SidePanel/SingleUser";
import CreateUser from "./SidePanel/CreateUser";


class App extends Component {
  render() {
    return (
      <div className="container">
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
            <Redirect
              from="/"
              to="/user/add"
            />
          </Switch>
        </SidePanel>
      </div>
    );
  }
}

export default App