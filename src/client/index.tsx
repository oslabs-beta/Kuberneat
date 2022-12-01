import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

import {ContextProvider} from './Context';
import './styles.css'


const container = document.getElementById('root') as HTMLElement;
let root = createRoot(container);

root.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);

