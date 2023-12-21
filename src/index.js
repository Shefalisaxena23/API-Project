// import required libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//get a reference to the div element with root id
const el = document.getElementById('root');

//Tell react to take control on that element
const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
);

