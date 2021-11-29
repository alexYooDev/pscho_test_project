import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./components/store/user-ctx";
import { TestContextProvider } from "./components/store/test-ctx";
import { ModalContextProvider } from "./components/store/modal-ctx";

ReactDOM.render(
  <BrowserRouter>
    <TestContextProvider>
      <UserContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </UserContextProvider>
    </TestContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
