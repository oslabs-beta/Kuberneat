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

import Faq from './components/Faq'
import Sidebar from './Sidebar';
import Login from './Login';
import Dashboard from './Dashboard';
import { Visualizer } from './components/Visualizer';
import { flexbox } from '@mui/system';
// import Pod from './components/Pod';


const App: React.FC = () => {
	//destructuring functions from Context object
	const { darkModeOn, toggleDarkMode, setUser, user } = useContext(Context);

	// const [ isSidebarOpen, setIsSidebarOpen ] = useState<boolean>(true);

	//returns a method that routes any endpoint
	const navigate = useNavigate();

	function logout() { // for now, this mocks logout from logout icon on far right of top navbar
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
				<div className={darkModeOn ? "user-pic-dark" : "user-pic-light"}>Y</div> {/* can add photo later */}
				<div className="user-info">
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
					display="flex"
					justifyContent="space-between"
					marginRight={5}
				>
					<IconButton
						sx={{ // refactored ICON hover effect, applied to all
							color: '#DAA520', 
							"&:hover": { backgroundColor: '#22A39F' } 
						}}
						size="large"
						onClick={toggleDarkMode}
					>
						{darkModeOn ? <DarkModeTwoToneIcon /> : <LightModeTwoToneIcon />}
					</IconButton>

					<Link to="/dashboard">
						<IconButton
							sx={{ 
								color: '#DAA520', 
								"&:hover": { backgroundColor: '#22A39F' } 
							}}
							size="large"
						>
							<BarChartTwoToneIcon></BarChartTwoToneIcon>
						</IconButton>
					</Link>

					<Link to="/visualizer">
						<IconButton
							sx={{ 
								color: '#DAA520', 
								"&:hover": { backgroundColor: '#22A39F' } 
							}}
							size="large"
						>
							<HubIcon></HubIcon>
						</IconButton>
					</Link>

					<Link to="/faq">
						<IconButton
							sx={{ 
								color: '#DAA520', 
								"&:hover": { backgroundColor: '#22A39F' } 
							}}
							size="large"
						>
							<LiveHelpTwoToneIcon></LiveHelpTwoToneIcon>
						</IconButton>
					</Link>

					<Link to="/">
						<IconButton
						onClick={() => setUser(null)}
						sx={{ 
							color: '#DAA520', 
							"&:hover": { backgroundColor: '#22A39F' } 
						}}
							size="large"
						>
							<LogoutTwoToneIcon></LogoutTwoToneIcon>
						</IconButton>
					</Link>
				</Box>
			</div>

			{!user && <Login onClick={logout} />} {/* renders login page when user is undefined */}

			{user && 

			<div className={darkModeOn ? "app-dark" : "app-light"}> 
			{/* will render depending on routes when user is defined aka logged in */}

				<div><Sidebar/></div>

				<main className="content">
					<Routes>
						<Route
							path="/faq"
							element={<Faq />} // set this to FAQ for now
						/>
						<Route
							path="/dashboard"
							element={<Dashboard />}
						/>
						<Route
							path="/visualizer"
							element={<Visualizer />}
						/>
					</Routes>
				</main>

			</div>
			
			}

		</>
	);
};

export default App;
