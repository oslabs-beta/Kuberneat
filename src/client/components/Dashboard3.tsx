import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import Header from './Header'

import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';

import { AppProps } from '../interfaces';
import { ReactNode, ReactElement } from 'react';

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";


function Dashboard3(): ReactElement {

	const { darkModeOn } = useContext <AppProps> (Context);

    const bgColor: string = 'blue !important'
    const grnColor: string = 'green !important'
    const gryColor: string = 'grey !important'

	return (
		<Box m="20px" height="100vh">
            <Header title="Custom Dashboard" subtitle="Welcome to your custom dashboard" />
		</Box>
	);
};

export default Dashboard3;