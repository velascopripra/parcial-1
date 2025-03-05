import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa el componente App
import "./index.css"; // Opcional, si usas estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
