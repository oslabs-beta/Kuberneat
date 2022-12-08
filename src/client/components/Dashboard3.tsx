import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import Header from './Header'

import { styled } from '@mui/material/styles';
import { Box, Paper, Button, IconButton, Typography, Container, CardHeader, CardContent, Card } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { AppProps } from '../interfaces';
import { ReactNode, ReactElement } from 'react';

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";



function Dashboard3(): ReactElement {

	const { darkModeOn } = useContext <AppProps> (Context);

    // const bgColor: string = 'blue !important'
    // const grnColor: string = 'green !important'
    // const gryColor: string = 'grey !important'

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: darkModeOn ? 'black' : '#344966',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: darkModeOn ? '#fab700' : 'white',
		height: '350px',
	  }));

	return (
			<div className="custom-chart">
				<Header title="Custom Dashboard" subtitle="Welcome to your custom dashboard" />

				<Box 
				display="grid" // style
				gridTemplateColumns="repeat(6, 1fr)" // configs # of columns
				gridTemplateRows="repeat(8, 1fr)"
				// gridAutoRows="100px" // configs row gaps
				gap={3}
				
				>

					{/* display="flex" alignItems="center" justifyContent="center" */}

					<Box gridColumn="span 2" gridRow="span 2" sx={{}}>
						<Item>Chart</Item>
					</Box>
					<Box gridColumn="span 2" gridRow="span 2" >
						<Item>Chart</Item>
					</Box>
					<Box gridColumn="span 2" gridRow="span 2" >
						<Item>Chart</Item>
					</Box>

					{/* ROW 1 */}
					<Box gridColumn="span 2" gridRow="span 2" borderRadius={10}> {/* takes up 2 of 6 columns */}
						<Item>Chart</Item>
					</Box>
					<Box gridColumn="span 4" gridRow="span 2" >
						<Item>Chart</Item>
					</Box>

					{/* ROW 2 */}
					<Box gridColumn="span 3" gridRow="span 2">
						<Item>Chart</Item>
					</Box>
					<Box gridColumn="span 3" gridRow="span 2">
						<Item>Chart</Item>
					</Box>

					<Box gridColumn="span 2" gridRow="span 2" sx={{}}>
						<Item>Chart</Item>
					</Box>
					<Box gridColumn="span 2" gridRow="span 2" >
						<Item>Chart</Item>
					</Box>
					<Box gridColumn="span 2" gridRow="span 2" >
						<Item>Chart</Item>
					</Box>
					

				</Box>

			</div> 
	);
};

export default Dashboard3;

				