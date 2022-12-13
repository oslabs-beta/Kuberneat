import * as React from 'react';
import { useContext } from 'react';
import { Context } from '../Context';

// import { Box } from '@mui/material';

import { AppProps } from '../interfaces';
import {ReactElement } from 'react';

function GrafanaDash(): ReactElement {
	const { darkModeOn } = useContext<AppProps>(Context);

	return (
		<div>
			<div className={darkModeOn ? 'dash-dark' : 'dash-light'}>
				<iframe
					src="http://localhost:3001/d/I1MUxS54k/final-dashboard?orgId=1&from=1670948876446&to=1670949776446"
					frameBorder="0"
					loading="eager"
					className={darkModeOn ? 'iframe-dark' : 'iframe-light'}
				></iframe>
			</div>
		</div>
	);
}

export default GrafanaDash;
