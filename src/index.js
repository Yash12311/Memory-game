import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import TableMaker from "./TableMaker";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TableMaker />
  </StrictMode>,
  rootElement
);
