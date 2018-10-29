import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Summary from "./components/Summary";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className='header' branding="Header" />
        <Summary className='summary' />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
