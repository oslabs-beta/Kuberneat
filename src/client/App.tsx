import * as React from 'react';
import { useContext, useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Context } from './Context';
import './styles.css';

import { Box, IconButton, CssBaseline } from '@mui/material';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import HubIcon from '@mui/icons-material/Hub';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import ElectricBoltTwoToneIcon from '@mui/icons-material/ElectricBoltTwoTone';

import Tooltip from '@mui/material/Tooltip';

/* For avatar if we decide to render dynamically */
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import Sidebar from './Sidebar';
import Login from './Login';
import Faq from './components/Faq'
import Dashboard from './components/Dashboard';
import Dashboard2 from './components/Dashboard2';
import Dashboard3 from './components/Dashboard3';
import Dashboard4 from './components/Dashboard4';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';
import Visualizer from './components/Visualizer';
import Visualizer2 from './components/Visualizer2';

import { flexbox } from '@mui/system';
// import Pod from './components/Pod';

import { AppProps } from './interfaces';
import { ReactElement, ReactNode } from 'react';

function App(): ReactElement {
	//destructuring functions from Context object
	const { darkModeOn, toggleDarkMode, setUser, user } = useContext< AppProps >(Context);

	function logout(): void { // for now, this mocks logout from logout icon on far right of top navbar
		// navigate('/');
		setUser(null)
	}

	return (
		<>
			{/* <CssBaseline /> */} 
			{/* from MUI let's us reset our CSS to default automatically */}

			{/* Admin & User Profile Info -> with JWT decoding can dynamically render user info*/}
			<div
				className="loginPage"
				id={darkModeOn ? 'navbar1' : 'navbar2'}
			>
				
			{/* on login page when no user is signed in */}	
			{!user && <div style={{width: '200px', marginLeft: '25px' }}></div>}

			{/* once user is logged in display profile data */}
			{user && <div className={darkModeOn ? 'user-dark' : 'user-light'}> {/* profile renders user data from JWT */}

				{/* 3 diff ways to show Avatar */}

				<div id="avatar-id" className={darkModeOn ? "user-pic-dark" : "user-pic-light"}>Y</div> {/* can add photo later */}

				{/* <img src={user.picture} alt="profile" style={{ borderRadius: '50px', height: '70px', width: '70px'}}></img> */}

				{/* MUI Avatar solution - don't need stack for single avatar*/}
				{/* <Stack direction="row" spacing={2}>
      				<Avatar alt="Yaku" src="source.png" sx={{ width: 56, height: 56 }}/>
    			</Stack> */}


				<div className="user-info">
					{/* <p>{user.given_name}</p> */} {/* can dynamically render user info later with JWT */}
					<p>Yaku</p> {/* can dynamically render user info later with JWT */}
					<p>Admin</p>
				</div>

			</div>}

				{/* OSP Name */}
				<div
					id="logo"
					className={darkModeOn ? 'darkMode' : 'lightMode'}
				>
					Zeus
				</div>

				<Box
					id="icons-header"
					display="flex"
					justifyContent="space-between"
					marginRight={5}
				>
					<Tooltip title={darkModeOn ? "Light Mode" : "Dark Mode"} arrow>
					<IconButton
						sx={{ // refactored ICON hover effect, applied to all
							color: '#DAA520', 
							"&:hover": { backgroundColor: '#22A39F' },
						}}
						size="large"
						onClick={toggleDarkMode}
					>
						{darkModeOn ? <LightModeTwoToneIcon /> : <DarkModeTwoToneIcon />}
					</IconButton>
					</Tooltip>

					<Link to="/">
						<Tooltip title="Zeus" arrow>
						<IconButton
							sx={{ 
								color: '#DAA520', 
								"&:hover": { backgroundColor: '#FFE15D' } 
							}}
							size="large"
						>
							<ElectricBoltTwoToneIcon></ElectricBoltTwoToneIcon>
						</IconButton>
						</Tooltip>
					</Link>

					<Link to="/faq">
						<Tooltip title="FAQ" arrow>
						<IconButton
							sx={{ 
								color: '#DAA520', 
								"&:hover": { backgroundColor: '#22A39F' } 
							}}
							size="large"
						>
							<LiveHelpTwoToneIcon></LiveHelpTwoToneIcon>
						</IconButton>
						</Tooltip>
					</Link>

					<Link to="/">{/* may remove path later if ok */}
					<Tooltip title="Logout" arrow>
						<IconButton
						onClick={() => setUser(null)}
						sx={{ 
							color: '#DAA520', 
							"&:hover": { backgroundColor: '#fc8181' } 
						}}
							size="large"
						>
							<LogoutTwoToneIcon></LogoutTwoToneIcon>
						</IconButton>
						</Tooltip>
					</Link>
				</Box>
			</div>

			{!user &&
				<Login onClick={logout} />} {/* renders login page when user is undefined */}

			{user && 

			<div className={darkModeOn ? "app-dark" : "app-light"}> 
			{/* will render depending on routes when user is defined aka logged in */}

				<div><Sidebar/></div>

				<main className="content">
					<Routes>
		
						<Route
							path="/"
							element={<Dashboard3 />} // Dashboard 2, 3, 4 ,5 vacant...
						/>
					
						<Route
							path="/dashboard"
							element={<Dashboard />}
						/>
						<Route
							path="/visualizer"
							element={<Dashboard2 />}
						/>
						<Route
							path="/dashboard2"
							element={<Dashboard3 />}
						/>
						<Route
							path="/pods"
							element={<Dashboard4 />}
						/>
						<Route
							path="/chart" 
							element={<Chart />} 
						/>
						<Route
							path="/chart2"
							element={<Chart2 />}
						/>
						<Route
							path="/faq"
							element={<Faq />} // set this to FAQ for now
						/>

					</Routes>
				</main>

			</div>
			
			}

		</>
	);
};

export default App;
