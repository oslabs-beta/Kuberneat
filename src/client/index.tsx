import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { ContextProvider } from './Context';
import './styles.css';

//react 18
const root = document.getElementById('root');
createRoot(root).render(
	<BrowserRouter>
		<ContextProvider>
			<App />
		</ContextProvider>
	</BrowserRouter>
);
