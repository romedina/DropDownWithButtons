import React from "react";
import ReactDOM from "react-dom";
import { DropdownWithButtons } from "./demo";
import "./styles.css";

function App() {
  const habitational_es = [
    "Casa Sola",
    "Casa en Condominio",
    "Departamento",
    "Edificio",
    "Terreno"
  ];
  const comercial_es = [
    "Edificio",
    "Casa Uso de Suelo",
    "Local",
    "Oficina",
    "Terreno",
    "Bodega"
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <DropdownWithButtons
        buttons={["Comercial", "Habitacional"]}
        dataA={habitational_es}
        dataB={comercial_es}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
