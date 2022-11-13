import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import AuthContextProvider from "./Components/GlobalContext/AuthContext";
import ProvideAuth from "./Components/AuthContextProvider.jsx/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <ProvideAuth>
          <App />
        </ProvideAuth>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
