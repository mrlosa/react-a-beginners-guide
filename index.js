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
    function CharacterCount({ text }) {
      return (
        <div>
          {`The prop name "${text} "has `}{" "}
          {text.length ? (
            <strong style={{ color: "green" }}>({text.length})</strong>
          ) : (
            <span style={{ color: "red" }}>'No' </span>
          )}
          characters
          <div>
            {" "}
            This prop name is{" "}
            {text.length ? (
              <strong style={{ color: "green" }}>({text})</strong>
            ) : (
              <span style={{ color: "red" }}>'No name' </span>
            )}
          </div>
        </div>
      );
    }

    //set time
    function Tick() {
      const time = new Date().toLocaleTimeString();

      const xtime = setInterval(() => {
        //autoPlay some for specific period of times or
        // Do some stuff you want
        time;
      }, 1000);

      const x = xtime;
      console.log(x);
      console.log(time);
      return <> {time} </>;
    }

    // useState hook
    function Greeting() {
      const [name, setName] = React.useState(
        window.localStorage.getItem("name") || ""
      );
      const [name2, setName2] = React.useState(
        window.localStorage.getItem("name2") || ""
      );
      const handleCahnge = event => setName(event.target.value);
      const handleCahnge2 = event => setName2(event.target.value);

      React.useEffect(() => {
        window.localStorage.setItem("name", name);
        window.localStorage.setItem("name2", name2);
      });

      return (
        <div>
          <h2>Form React Hook</h2>
          <form>
            <label htmlFor="name">Name: </label>
            <input value={name} onChange={handleCahnge} id="name" />
          </form>
          {name ? (
            <strong>Hello {name}</strong>
          ) : (
            <span style={{ color: "red" }}>Please type your name.</span>
          )}

          <div>
            <form>
              <label htmlFor="name2">Last Name: </label>
              <input value={name2} onChange={handleCahnge2} id="name2" />
            </form>
            {name2 ? (
              <strong>Hello {name2}</strong>
            ) : (
              <span style={{ color: "red" }}>Please type your last name.</span>
            )}
          </div>
        </div>
      );
    }

    return (
      <div>
        <Tick />
        {Tick()}

        <Hello
          name={this.state.name}
          last={this.state.last}
          eMpty={this.state.eMpty}
        />
        <br />
        <p>Start editing to see some magic happen :)</p>

        <CharacterCount text={this.state.name} />
        <br />
        <CharacterCount text={this.state.last} />
        <br />
        <CharacterCount text={this.state.eMpty} />
        <br />
        <Greeting />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
