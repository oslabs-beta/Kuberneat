import * as React from 'react';
import { useContext } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Context } from './Context';
import './styles.css';

import Login from './Login';

import { Box, IconButton } from '@mui/material';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import HubIcon from '@mui/icons-material/Hub';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

import Dashboard from './Dashboard';
import Visualizer from './components/Visualizer';

const App: React.FC = () => {
	//destructuring functions from Context object
	const { darkModeOn, toggleDarkMode, user } = useContext(Context);

	//returns a method that routes any endpoint
	const navigate = useNavigate();

	function goToMain() {
		navigate('/dashboard');
	}

	return (
		<>
		<div>
			<nav id={darkModeOn ? 'navbar1' : 'navbar2'}>
				<div className={darkModeOn ? 'user1' : 'user2'}>
					<p>Admin</p>
				</div>

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
						sx={
							darkModeOn
								? { '&:hover': { color: 'green' } }
								: { '&:hover': { color: 'floralwhite' } }
						}
						size="large"
						onClick={toggleDarkMode}
					>
						{darkModeOn ? <DarkModeTwoToneIcon /> : <LightModeTwoToneIcon />}
					</IconButton>

					<Link to="/dashboard">
						<IconButton
							sx={
								darkModeOn
									? { '&:hover': { color: 'green' } }
									: { '&:hover': { color: 'floralwhite' } }
							}
							size="large"
						>
							{/* render dashboard */}
							<BarChartTwoToneIcon></BarChartTwoToneIcon>
						</IconButton>
					</Link>

					<Link to="/visualizer">
						<IconButton
							sx={
								darkModeOn
									? { '&:hover': { color: 'green' } }
									: { '&:hover': { color: 'floralwhite' } }
							}
							size="large"
						>
							{/* render visualizer */}
							<Visualizer></Visualizer>
							<HubIcon></HubIcon>
						</IconButton>
					</Link>

					<Link to="/">
						<IconButton
							sx={
								darkModeOn
									? { '&:hover': { color: 'green' } }
									: { '&:hover': { color: 'floralwhite' } }
							}
							size="large"
						>
							<LogoutTwoToneIcon></LogoutTwoToneIcon>
						</IconButton>
					</Link>
				</Box>
			</nav>
			</div>
		

			<Routes>
				<Route
					path="/"
					element={<Login onClick={goToMain} />}
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
		</>
	);
};

export default App;


