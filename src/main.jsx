import React from "react"
import ReactDOM from "react-dom/client"

import GlobalStyle from "./styles/GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes/routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
)
