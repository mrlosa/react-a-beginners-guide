import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  
  constructor() {
    
    super();
    this.state = {
      name: "React",
      last: "Js"
      
    };

    // validate
    Hello.propTypes = {
      name: PropTypes.string,
      last: PropTypes.string.isRequired
    };
  }

  render() {
    // Use Interpolation in JSX
    // https://egghead.io/lessons/react-understand-and-use-interpolation-in-jsx
    function CharacterCount({ text }) {
      return (
        <div>
          {`The prop name "${text}" has `} <strong>({text.length})</strong>{" "}
          characters
        </div>
      );
    }

    function Tick() {
      const x = new Date().toLocaleTimeString();
      
      

      return (<> {x} </>);
    }

    return (
      <div>
        <Tick />
        
        
        <Hello name={this.state.name} last={this.state.last} />
        <p>Start editing to see some magic happen :)</p>

        <CharacterCount text={this.state.name} />
        <CharacterCount text={this.state.last} />

        <br />
        
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
