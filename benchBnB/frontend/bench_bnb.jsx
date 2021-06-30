import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import {signup, login, logout} from "./util/session_api_util.js"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});