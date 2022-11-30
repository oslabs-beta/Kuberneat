import * as React from 'react';
import { useContext } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Context } from './Context';
import './styles.css';

import Login from './Login';
import Main from './components/Main';

// import css from './styles.css'

const App: React.FC = () => {
	//destructuring functions from Context object
	const { darkModeOn, toggleDarkMode, user } = useContext(Context);

	const navigate = useNavigate()

	function goToMain() {
	  navigate('./main')
	}

	return (
		<>
			<nav id={darkModeOn ? 'navbar1' : 'navbar2'} >

				<div className={ darkModeOn ? 'user1' : 'user2' }>
					<img /* src={user.picture}  */alt="user-profile pic" />
					<p>user.name</p>
					<p>user.email</p>
				</div>

				<div id="logo" className={darkModeOn ? "darkMode" : "lightMode" }>Zeus</div>


				<div className="nav-links">
					<button className={ darkModeOn ? 'navlink-butt1' : 'navlink-butt2'} onClick={toggleDarkMode} >{darkModeOn ? 'Dark Mode' : 'Light Mode'}</button> 
					<Link to="/charts"><button className={ darkModeOn ? 'navlink-butt1' : 'navlink-butt2'}>Charts</button></Link>
				</div>

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

//
