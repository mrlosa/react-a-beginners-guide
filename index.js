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
      last: "Js",
      eMpty: ""
      
    };

    // validate
    Hello.propTypes = {
      name: PropTypes.string,
      last: PropTypes.string.isRequired,
      eMpty: PropTypes.string
    };
  }

  render() {
    // Use Interpolation in JSX
    // https://egghead.io/lessons/react-understand-and-use-interpolation-in-jsx
    function CharacterCount({ text }) {
      return (
        <div>
          {`The prop name "${text} "has `} {text.length ? <strong style={{color:'green'}}>({text.length})</strong> : <span style={{color:'red'}}>'No' </span>}
          characters
          <div> This prop name is {text.length ? <strong style={{color:'green'}}>({text})</strong> : <span style={{color:'red'}}>'No name' </span>}</div>
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
        
        
        <Hello name={this.state.name} last={this.state.last} 
        eMpty={this.state.eMpty} />
        <br />
        <p>Start editing to see some magic happen :)</p>

        <CharacterCount text={this.state.name} />
        <br />
        <CharacterCount text={this.state.last} />
        <br />
        <CharacterCount text={this.state.eMpty} />
        <br />
        
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
