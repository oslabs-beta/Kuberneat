/* import * as React from 'react'; */
// import {createRoot} from 'react-dom/client';

import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css"; 

import {ContextProvider} from "./Context" // import the ContextProvider so we can wrap it around

// const container = document.getElementById('root') as HTMLElement;
// let root = createRoot(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    <ContextProvider>{/* wrap everything in the ContextProvider */}
    <BrowserRouter>
      {/* <App aProp="Hello from the App component!" /> */}
      <App />
    </BrowserRouter>
    </ContextProvider>
  // </React.StrictMode>
);


