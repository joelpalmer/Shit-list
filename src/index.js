import React from "react";
import ReactDOM from "react-dom";
import ShitList from "./components/shit/ShitList";

import "./styles.css";
const shitList = [
  {
    name: "That Person",
    rating: 4
  },
  {
    name: "Other Person",
    rating: 3
  }
];
function App() {
  return (
    <div className="App">
      <ShitList list={shitList} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
