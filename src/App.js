import React from 'react';
import { compose, withHandlers, withStateHandlers } from 'recompose';
import Question from './components/question';
import './App.css';

const App = ({...props}) => (
  <div className="App">
    <form action="">
      <Question id="age" label="My age is"
        inputWidth={130}
        value={props.age}
        onChange={props.onChange}
      />
      <Question id="hair" label="Am I a bit hairier than my friends?"
        inputWidth={130}
        value={props.hair}
        onChange={props.onChange}
      />
    </form>
  </div>
);

const enhance = compose(
  withStateHandlers(
    {
      age: 25,
      hair: 0,
    },
    {
      setAge: () => (inAge) => ({
        age: inAge
      }),
      setHair: () => (inHair) => ({
        hair: inHair
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
