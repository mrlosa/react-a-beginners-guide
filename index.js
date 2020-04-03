import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      last:  + 9
    };
    Hello.propTypes = {
    name: PropTypes.string,
    last: PropTypes.string.isRequired
      }
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} last={this.state.last}/>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
