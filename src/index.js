import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Summary from "./components/Summary";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Summary />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
