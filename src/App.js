import React, { Component } from 'react';
import Scroll from 'react-scroll';

import TextQuestion from './components/text-question';
import Visualisation from './components/visualisation';
import YesNoQuestion from './components/yes-no-question';
import TripleOptionQuestion from './components/triple-option-question';
import { updateField, fields } from './actions/form';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 0.3,
    }

  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // updateField(name, value);
    this.setState({ data: Math.random() * (100 - 50) + 50})
  };

  render() {
    const { age, hair, periods_irregular, smoker_status, partners } = fields;

    let Link = Scroll.Link;
    let Element = Scroll.Element;

    return (
      <div className="App">
        <section className="splash-page">
          <div className="splash-page__content">
            <g id="Page-1-Copy-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Branding" transform="translate(-3196.000000, -346.000000)" stroke="#FFFFFF" stroke-width="8" fill="#FFFFFF" fill-rule="nonzero">
                    <g id="Orange-logo" transform="translate(3455.816847, 665.816847) rotate(45.000000) translate(-3455.816847, -665.816847) translate(3193.816847, 404.816847)">
                        <path d="M358.822581,0 C312.322484,0 268.794419,19.2971613 237.701742,53.3281935 C213.58029,19.7265484 174.69129,0 131.5,0 C95.5072581,0 61.9813871,14.3381613 37.1106129,40.3792258 C12.2566774,66.411871 -0.523903226,100.594452 1.14312903,136.654548 C4.28354839,204.994452 62.5623226,260.772677 131.062194,261 C131.213742,261 131.348452,261 131.508419,261 C188.179097,261 238.013258,224.880968 255.592871,171.005516 L239.579258,165.777097 C224.28129,212.706581 180.871097,244.16129 131.5,244.16129 C131.37371,244.16129 131.247419,244.16129 131.11271,244.16129 C71.4615806,243.967645 20.7012903,195.387968 17.965,135.879968 C16.516871,104.458935 27.6388387,74.6796774 49.285,52.0147742 C70.9564194,29.3246129 100.146323,16.8387097 131.5,16.8387097 C172.695903,16.8387097 209.345355,37.323 229.551806,71.631871 L235.76529,82.1897419 L243.393226,72.5916774 C271.547548,37.1630323 313.619065,16.8387097 358.822581,16.8387097 C441.44171,16.8387097 506.16129,79.7144516 506.16129,159.967742 C506.16129,230.294613 474.235097,404.642613 178.530516,504.454065 C177.158161,504.917129 175.676355,505.16129 173.782,505.16129 C166.718161,505.16129 160.967742,499.410871 160.967742,492.347032 C160.967742,487.93529 163.224129,483.826645 166.836032,481.637613 C220.559935,449.113645 257.142032,381.960871 275.572,282.073645 C289.127161,208.606355 287.342258,145.51171 287.258065,142.868032 L270.419355,143.390032 C270.503548,145.899 276.902258,395.297129 158.122,467.223677 C149.492161,472.443677 144.129032,482.067 144.129032,492.347032 C144.129032,508.697419 157.431613,522 174.253484,522 C177.528613,522 180.761645,521.469581 183.902065,520.417161 C489.954032,417.103258 523,233.923355 523,159.967742 C523,70.2679355 450.888226,0 358.822581,0 Z" id="Shape"></path>
                        <path d="M218.423086,353.612903 C218.423086,311.827645 184.43415,277.83871 142.648892,277.83871 C100.863634,277.83871 66.8746986,311.827645 66.8746986,353.612903 C66.8746986,395.398161 100.863634,429.387097 142.648892,429.387097 C184.43415,429.387097 218.423086,395.398161 218.423086,353.612903 Z M83.7134083,353.612903 C83.7134083,321.122613 110.158602,294.677419 142.648892,294.677419 C175.139182,294.677419 201.584376,321.122613 201.584376,353.612903 C201.584376,386.103194 175.139182,412.548387 142.648892,412.548387 C110.158602,412.548387 83.7134083,386.103194 83.7134083,353.612903 Z" id="Shape"></path>
                    </g>
                </g>
            </g>
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
          <aside className="visualisation-aside">
            <h2>Relative fertility</h2>
            <Visualisation data={this.state.data} />
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
                  onChange={this.handleChange}
                />
              </Element>
              <Element name="question-hair" className="element">
                <YesNoQuestion
                  id="hair"
                  label="Do you have noticable hair on your upper lip?"
                  inputWidth={130}
                  value={hair}
                  onChange={this.handleChange}
                />
              </Element>
              <Element name="question-partners" className="element">
                <TripleOptionQuestion
                  id="partners"
                  label="What have you been up to?"
                  inputWidth={130}
                  value={partners}
                  onChange={this.handleChange}
                />
              </Element>
            </form>
          </main>
        </section>
      </div>
    );
  }
};

export default App;
