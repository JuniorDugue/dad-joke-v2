import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const onTellJoke = () => {
    console.log("click");
  };

  return <button onClick={onTellJoke}>Tell me a joke</button>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
