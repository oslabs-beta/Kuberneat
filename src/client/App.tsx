import * as React from 'react';
import { useContext } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Context } from './Context';
import './styles.css';

import Login from './Login';
import Main from './components/Main';

import { Box, IconButton } from '@mui/material';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import HubIcon from '@mui/icons-material/Hub';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

//  import Yaku from './Yaku.png'
// const Yaku =  require("./Yaku.png")
import Yaku from './assets/Yaku.png';

const App: React.FC = () => {
	//destructuring state variables from Context object
	const { darkModeOn, toggleDarkMode, user } = useContext(Context);
	//returns a method that routes any endpoint
	const navigate = useNavigate()

	function goToMain() {
	  navigate('./main')
	}

	return (
		<>
			<nav id={darkModeOn ? 'navbar1' : 'navbar2'} >

				<div className={ darkModeOn ? 'user1' : 'user2' }>
					<img
					alt="user"
					width="50px"
					height="50px"
					/* src={user.picture} */
					 src={Yaku}
					 style={{ cursor: "pointer", borderRadius: "50%" }}
					/>
					<p>Yaku</p>
					<p>Admin</p>
					{/* dynamically rendering user information */}
				</div>

				<div id="logo" className={darkModeOn ? "darkMode" : "lightMode" }>Zeus</div>


				<Box display='flex' justifyContent='space-between' marginRight={5}>

					<IconButton 
						sx={darkModeOn ? { "&:hover": { color: "green" } } : { "&:hover": { color: "floralwhite" } }} 
						size="large" 
						onClick={toggleDarkMode}>
						{darkModeOn ? (<DarkModeTwoToneIcon />) : (<LightModeTwoToneIcon />)}
					</IconButton>

					<Link 
						to="/charts"><IconButton 
						sx={darkModeOn ? { "&:hover": { color: "green" } } : { "&:hover": { color: "floralwhite" } }} 
						size="large"><BarChartTwoToneIcon></BarChartTwoToneIcon></IconButton>
					</Link>

					<Link 
						to="/nodes"><IconButton 
						sx={darkModeOn ? { "&:hover": { color: "green" } } : { "&:hover": { color: "floralwhite" } }} 
						size="large"><HubIcon></HubIcon></IconButton>
					</Link>

					<Link 
						to="/"><IconButton 
						sx={darkModeOn ? { "&:hover": { color: "green" } } : { "&:hover": { color: "floralwhite" } }} 
						size="large"><LogoutTwoToneIcon></LogoutTwoToneIcon></IconButton>
					</Link>

				</Box>

			</nav>

			<Routes>
				<Route path='/' element={ <Login onClick={goToMain} />} />
				<Route path='/about' element={<Main />} />
				<Route path='/main' element={<Main />} />
			</Routes>

		</>
	);
};

export default App;
