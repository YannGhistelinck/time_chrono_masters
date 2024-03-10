import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './assets/sass/main.sass'

import Routing from './components/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>
);

reportWebVitals();
