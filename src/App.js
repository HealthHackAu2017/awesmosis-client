import React from 'react';
import TextQuestion from './components/text-question';
// import YesNoQuestion from './components/yes-no-question';
import { updateField, fields } from './actions/form';

import './App.css';

const App = () => {
  const { age, hair } = fields;

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    updateField(name, value);
  };

  return (
    <div className="App">
      <form action="">
        <TextQuestion
          id="age"
          name="age"
          label="My age is"
          value={age}
          onChange={handleChange}
        />
        <TextQuestion
          id="hair"
          label="Am I a bit hairier than my friends?"
          inputWidth={200}
          value={hair}
          maxLength={3}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default App;
