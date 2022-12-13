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
					frameBorder="0"
					loading="eager"
					className={darkModeOn ? 'iframe-dark' : 'iframe-light'}
				></iframe>
			</div>
		</div>
	);
}

export default GrafanaDash;
