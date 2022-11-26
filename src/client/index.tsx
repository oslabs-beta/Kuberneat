/* import * as React from 'react'; */
// import {createRoot} from 'react-dom/client';

import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css"; 

// const container = document.getElementById('root') as HTMLElement;
// let root = createRoot(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App aProp="Hello from the App component!" /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


