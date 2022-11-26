import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider, PaletteMode } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Geography from './scenes/geography';
import Calendar from './scenes/calendar';

// import * as React from 'react';
// import { React.FC } from "react";
// const App: React.FC = () => {

interface AppProps {
	aProp?: string;
}

interface SidebarIF {
	isSideBar: boolean;
	setIsSidebar:any;
};

function App({ aProp }: AppProps) {

	const [theme, colorMode]: any[] = useMode();
	/* const [isSidebar, setIsSidebar] = useState(true); */
 
	return (

 		<ColorModeContext.Provider value={colorMode} >
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>

					<Sidebar /* isSidebar={isSidebar} */ />

					<main className='content'>
						<Topbar /* setIsSidebar={setIsSidebar} *//>
						<Routes>
							<Route path='/' element={<Dashboard/>} />
							<Route path='/team' element={<Team/>} />
							<Route path='/contacts' element={<Contacts />} />
							<Route path='/invoices' element={<Invoices />} />
							<Route path='/form' element={<Form />} />
							<Route path='/bar' element={<Bar />} />
							<Route path='/pie' element={<Pie />} />
							<Route path='/line' element={<Line />} />
							<Route path='/faq' element={<FAQ />} />
							<Route path='/geography' element={<Geography />} />
							<Route path='/calendar' element={<Calendar />} />
						</Routes>
					</main>

				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>

	);
};

export default App;
