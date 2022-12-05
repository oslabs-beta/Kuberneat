import * as React from 'react';
import { useContext } from 'react';
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
// import Pod from './components/Pod';


const App: React.FC = () => {
	//destructuring functions from Context object
	const { darkModeOn, toggleDarkMode, setUser, user } = useContext(Context);

	//returns a method that routes any endpoint
	const navigate = useNavigate();

	function logout() { // for now, this mocks logout from logout icon on far right of top navbar
		// navigate('/');
		setUser(null)
	}

	return (
		<>
			{/* <CssBaseline /> */}

			{/* Admin & User Profile Info -> with JWT decoding can dynamically render user info*/}
			<div
				className="loginPage"
				id={darkModeOn ? 'navbar1' : 'navbar2'}
			>
				{/* profile render conditional on user state */}
				{!user && <div className={darkModeOn ? 'user1' : 'user2'}>
					<div className="user-pic">?</div>
					<p>Please Login</p>
				</div>}

				{user && <div className={darkModeOn ? 'user1' : 'user2'}>
					<div className="user-pic">E</div> {/* can add photo later */}
					<p>Ed</p> {/* can dynamically render user info later with JWT */}
					<p>Admin</p>
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

			{user && <div className="app"> {/* will render depending on routes when user is defined aka logged in */}

				<Sidebar />
				
				<main className="content">
					<Routes>
						<Route
							path="/faq"
							element={<Faq />} // set this to main for now
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
			</div>}

		</>
	);
};

export default App;
