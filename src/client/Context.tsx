import { Google } from '@mui/icons-material';

import React from 'react';
import { useState, useEffect } from 'react';

// import * as jwtJsDecode from 'jwt-js-decode';
// import { jwtDecode } from 'jwt-js-decode';
// import jwt_decode from 'jwt_decode';
import * as JWT from 'jwt-decode';

import { ReactNode, ReactElement } from 'react';

const Context: any = React.createContext();

function ContextProvider({ children }: { children: ReactNode }): ReactElement {
	const [user, setUser] = useState<string | null>("signed in"); // set to defined for testing, default is null

	const [darkModeOn, setDarkModeOn] = useState<boolean>(true);

	// function handleCallbackResponse(response: any) {
	// 	console.log('Encoded JWT ID token: ' + response.credential);
	// 	setUser(response)
	// 	console.log('User:', user)
		// const userObject= JWT(response.credential);
		// console.log('UserObject:', userObject); 
		// setUser(userObject); // later set it to the userObject
	// }

	function toggleDarkMode() {
		setDarkModeOn((old) => !old);
		console.log('dark mode toggled');
	}
	/* global google object coming from html script*/
	// useEffect(() => {
	// 	/* global google */
	// 	google.accounts.id.initialize({
	// 		client_id:
	// 			'833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com',
	// 		callback: handleCallbackResponse,
	// 	});
	// }, [user]);

	return (
		<Context.Provider
			value={{
				user,
				setUser,
				darkModeOn,
				setDarkModeOn,
				toggleDarkMode,
				handleCallbackResponse,
			}}
		>
			{children} {/* {props.children} */}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
