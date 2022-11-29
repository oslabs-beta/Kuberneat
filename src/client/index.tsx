import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';


const container = document.getElementById('root') as HTMLElement;
let root = createRoot(container);

root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);


