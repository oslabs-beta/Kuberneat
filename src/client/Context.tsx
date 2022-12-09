import { Google } from '@mui/icons-material';

import React from 'react';
import { useState, useEffect } from 'react';

import jwt_decode, { JwtPayload } from 'jwt-decode';

import { ReactNode, ReactElement } from 'react';

const Context: any = React.createContext<null>(null);

// const google: any;

function ContextProvider({ children }: { children: ReactNode }): ReactElement {

	const [user, setUser] = useState<string | null>(null); // set to defined for testing, default is null

	const [darkModeOn, setDarkModeOn] = useState<boolean>(true);

	function toggleDarkMode(): void {
		setDarkModeOn((old) => !old);
		console.log('dark mode toggled');
	};

	function handleCallbackResponse(response: any) {

	console.log('Encoded JWT ID token: ' + response.credential);
	
	 	console.log('User:', user)

		const userObject: any | null = jwt_decode<JwtPayload>(response.credential);

		console.log('UserObject:', userObject); 

		setUser(userObject); // set user to userObject */
	}
	/* global google object coming from html script*/
	useEffect(() => {
	 	/* global google */
		(window as any).google.accounts.id.initialize({
			client_id: '833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com',
			callback: handleCallbackResponse,
 			});
	}, [user]);

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
