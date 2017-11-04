import React from 'react';
import Scroll from 'react-scroll';

import TextQuestion from './components/text-question';
import YesNoQuestion from './components/yes-no-question';
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

  let Link = Scroll.Link;
  let Element = Scroll.Element;

  return (
    <div className="App">
      <section className="splash-page">
        <div className="splash-page__content">
          <h1>Make an informed decision<br />about your reproductive...</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio commodi, ipsa in officia! Est natus culpa nisi inventore sit veniam ab libero harum beatae dicta nulla quis deserunt, dignissimos a!</p>
        </div>
        <footer className="splash-page__footer">
          <Link activeClass="active" to="question-age" spy={true} smooth={true} offset={50} duration={500}>
            Begin
          </Link>
        </footer>
      </section>
      <form action="">
        <Element name="question-age" className="element">
          <TextQuestion
            id="age"
            name="age"
            label="My age is"
            inputWidth={130}
            value={age}
            onChange={handleChange}
          />
        </Element>
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
