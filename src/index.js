// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './theme';

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, 
  document.getElementById("root")
);
