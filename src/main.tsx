import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import App from "./App";
import ToggleColorMode from "./context/ColorModeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleColorMode>
        <App />
      </ToggleColorMode>
    </BrowserRouter>
  </React.StrictMode>
);
