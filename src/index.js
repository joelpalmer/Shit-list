import React from "react";
import ReactDOM from "react-dom";
import ShitList from "./components/shit/ShitList";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <div className="container">
      <ShitList list={shitList} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
