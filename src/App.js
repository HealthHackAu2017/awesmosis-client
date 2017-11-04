import React from 'react';
import TextQuestion from './components/text-question';
import YesNoQuestion from './components/yes-no-question';
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
        <TextQuestion
          id="age"
          name="age"
          label="My age is"
          inputWidth={130}
          value={age}
          onChange={handleChange}
        />
        <YesNoQuestion
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
