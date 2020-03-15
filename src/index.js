import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./assets/styles/styles.css";
import configureStore from "./Config/ConfigureStore.jsx";
import { Provider } from "react-redux";
import { StyleRoot } from "radium";

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <StyleRoot>
        <App />
      </StyleRoot>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
