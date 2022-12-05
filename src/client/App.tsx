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
			<CssBaseline />

			{/* Admin & User Profile Info -> with JWT decoding can dynamically render user info*/}
			<div
				className="loginPage"
				id={darkModeOn ? 'navbar1' : 'navbar2'}
			>
				<div className={darkModeOn ? 'user1' : 'user2'}>
					{/* <img src={} alt="" /> */}
					<p>Admin</p>
				</div>

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
						sx={
							darkModeOn
								? { color: { color: '#DAA520' } }
								: // ? { '&hover': { color: '#DAA520' }  }
								  { '&:hover': { color: '#22A39F' } }
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
									? { color: { color: '#DAA520' } }
									: // ? { '&hover': { color: '#DAA520' }  } // #22A39F
									  { '&:hover': { color: '#22A39F' } }
							}
							size="large"
						>
							<BarChartTwoToneIcon></BarChartTwoToneIcon>
						</IconButton>
					</Link>

					<Link to="/visualizer">
						<IconButton
							sx={
								darkModeOn
									? { color: { color: '#DAA520' } }
									: // ? { '&hover': { color: '#DAA520' }  }
									  { '&:hover': { color: '#22A39F' } }
							}
							size="large"
						>
							<HubIcon></HubIcon>
						</IconButton>
					</Link>

					<Link to="/">
						<IconButton
						onClick={() => setUser(null)}
							sx={
								darkModeOn
									? { color: { color: '#DAA520' } }
									: // ? { '&hover': { color: '#DAA520' }  }
									  { '&:hover': { color: 'floralwhite' } }
							}
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
							path="/"
							element={<Dashboard />} // set this to main for now
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
