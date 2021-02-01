import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const render = () => {
  const rootEl = document.getElementById('root');

  ReactDOM.render(<App />, rootEl);
};

render();
