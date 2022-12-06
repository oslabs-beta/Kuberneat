import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import Header from './Header'

import { Box } from "@mui/material";

const Chart2 = () => {

	const { darkModeOn } = useContext(Context);

	return (
		<Box m="20px"> {/* removed className chart from div, replaced it below, not sure what it was for? */}
			<div className={darkModeOn ? 'dash-dark' : 'dash-light'}>

				<Header title="Charts 2" subtitle="Just one of the many ways to visualize your cluster" />

				<div>charts go here...</div>

			</div>
		</Box>
	);
};

export default Chart2;