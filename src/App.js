import React, { Component } from 'react';
import { compose, withHandlers, withStateHandlers } from 'recompose';
import AutosizeInput from 'react-input-autosize';
import Question from './components/question';
import './App.css';

const App = ({...props}) => (
  <div className="App">
    <form action="">
      <Question label="My age is" inputWidth={50} value={props.age} onChange={props.onChange} />
    </form>
  </div>
)

const enhance = compose(
  withStateHandlers(
    ({ initialAge = 25 }) => ({
      age: initialAge,
    }),
    {
      setAge: () => (inAge) => ({
        age: inAge
      })
    }
  ),
  withHandlers({
    onChange: (props) => (event) => {
      props.setAge(event.target.value)
    }
  })
)

export default enhance(App);
