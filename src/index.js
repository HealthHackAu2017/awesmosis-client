import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const props = {
  age: 45,
  update: () => true,
}

ReactDOM.render(<App {...props} />, document.getElementById('root'));
registerServiceWorker();
