import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      age: 45,
    }
  }

  render() {
    return (
      <div className="App">
        <form action="">
          <fieldset className="question">
            <label className="question__title" htmlFor="age">My age is</label>
            <input className="question__input" id="age" type="text" value={this.props.age} onChange={this.props.update} />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
