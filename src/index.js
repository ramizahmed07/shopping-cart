import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContextProvider from './context/CardContext';

ReactDOM.render(
  <CardContextProvider>
    <App />
  </CardContextProvider>,
  document.getElementById('root')
);
