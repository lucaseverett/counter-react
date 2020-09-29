import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#app")
);

if (module.hot) {
  module.hot.accept();
}
