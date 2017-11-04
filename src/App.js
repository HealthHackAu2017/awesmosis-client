import React from 'react';
import Scroll from 'react-scroll';

import TextQuestion from './components/text-question';
import Visualisation from './components/visualisation';
// import YesNoQuestion from './components/yes-no-question';
import { updateField, fields } from './actions/form';

import './App.css';

const App = () => {
  const { age, hair, periods_irregular, smoker_status, partners } = fields;

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    updateField(name, value);
  };

  let Link = Scroll.Link;
  let Element = Scroll.Element;

  return (
    <div className="App">
      <section className="splash-page">
        <div className="splash-page__content">
          <h1>
            Make an informed decision<br />about your reproductive...
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            commodi, ipsa in officia! Est natus culpa nisi inventore sit veniam
            ab libero harum beatae dicta nulla quis deserunt, dignissimos a!
          </p>
        </div>
        <footer className="splash-page__footer">
          <Link
            activeClass="active"
            to="question-age"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Begin
          </Link>
        </footer>
      </section>
      <section className="question-and-answers">
        <aside className="visualisation">
          <Visualisation data={0.3} />
        </aside>
        <main className="questions">
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
            <Element name="question-hair" className="element">
              <TextQuestion
                id="hair"
                label="Am I a bit hairier than my friends?"
                inputWidth={130}
                value={hair}
                onChange={handleChange}
              />
            </Element>
            <Element name="question-period" className="element">
              <TextQuestion
                id="periods_irregular"
                label="Are your periods regular?"
                inputWidth={130}
                value={periods_irregular}
                onChange={handleChange}
              />
            </Element>
            <Element name="question-smoker" className="element">
              <TextQuestion
                id="smoker_status"
                label="Are you a smoker?"
                inputWidth={130}
                value={smoker_status}
                onChange={handleChange}
              />
            </Element>
            <Element name="question-partners" className="element">
              <TextQuestion
                id="partners"
                label="Sexual history"
                inputWidth={130}
                value={partners}
                onChange={handleChange}
              />
            </Element>
          </form>
        </main>
      </section>
    </div>
  );
};

export default App;
