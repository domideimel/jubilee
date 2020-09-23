import 'argon-design-system-react/src/assets/scss/argon-design-system-react.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './sw';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
