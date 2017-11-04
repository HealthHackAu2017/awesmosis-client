import React from 'react';
import Question from './components/question';
import { updateField, fields } from './actions/form';

import './App.css';

const App = () => {
  const { age, hair } = fields;

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    updateField(name, value);
  };

  return (
    <div className="App">
      <form action="">
        <Question
          id="age"
          name="age"
          label="My age is"
          inputWidth={130}
          value={age}
          onChange={handleChange}
        />
        <Question
          id="hair"
          label="Am I a bit hairier than my friends?"
          inputWidth={130}
          value={hair}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default App;
