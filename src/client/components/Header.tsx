/**
 * The purpose of this component is render out the the paths of the app
 */
import React, { useContext } from 'react';
import { Typography, Box, IconButton } from '@mui/material';

import { Link} from 'react-router-dom'; // for refresh button, took out useNavigate 

import { Context } from '../Context';

import { AppProps, HeaderProps } from '../interfaces';
import { ReactElement } from 'react'; // took out  ReactNode

import SyncIcon from '@mui/icons-material/Sync'; // refresh icon
import Tooltip from '@mui/material/Tooltip';

// this component is reuseable for all containers, and can pass in desired props
// for title and subtitle
function Header({ title, subtitle, path }: HeaderProps): ReactElement {
	const { darkModeOn } = useContext<AppProps>(Context);
	const fontColor: string = darkModeOn ? '#fab700 !important' : '#293462 !important';

	return (
		// Styling of the header 
		<Box mb='30px' role='header'>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', margin: 2 }}>
				<Typography
					variant='h4'
					fontWeight='bold'
					sx={{ m: '0 0 5px 0', textAlign: 'left', color: fontColor }}
				>
					{title}
				</Typography>

				<Link to={path}>
					{/* This is the refresh button */}
				<Tooltip title='Refresh' arrow>
					<IconButton
						className='icon'
						size='large'
						sx={{ '&:hover': { backgroundColor: 'green' } }}
					>
						<SyncIcon></SyncIcon>
					</IconButton>
				</Tooltip>

				</Link>
			</Box>

			<Typography variant='h6' sx={{ textAlign: 'left', color: fontColor, margin: 2 }}>
				{subtitle}
			</Typography>
		</Box>
	);
}

export default Header;
