// https://egghead.io/courses/the-beginner-s-guide-to-react
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
      const time = new Date().toLocaleTimeString();

      const xtime = setInterval(() => {
      //autoPlay some for specific period of times or
      // Do some stuff you want
      time
    }, 1000);
      
      const x = xtime
      console.log(x)
      console.log(time)
      return (<> {time} </>);
    }

    // useState hook
    function Greeting() {
      const [name, setName] = React.useState('')

      return (
        <div>
        <form>
        <label htmlFor="name">Name:  </label>
        <input onChange={handleCahnge} id="name" />
        </form>
        {name ?<strong>Hello {name}</strong> : 'Please type your name'}
        </div>
      );
    }

    

    return (
      <div>
        <Tick />
        {Tick()}
        
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
