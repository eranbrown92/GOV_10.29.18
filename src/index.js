import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Summary from "./components/Summary";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="row">
        <Header branding="Header" />
        <Summary className="col s9" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
