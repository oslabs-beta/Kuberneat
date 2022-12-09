import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';

import { AppProps, Pod2Props } from '../interfaces';
import { ReactNode, ReactElement } from 'react';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { CenterFocusStrong } from '@mui/icons-material';

function Pod2({ id, info, nodeNum, key }: Pod2Props): ReactElement {
	console.log('nodeNum', nodeNum);

	/* Accordian functionality logic */
	const Accordion = styled((props: AccordionProps) => (
		<MuiAccordion disableGutters elevation={0} square {...props} />
	))(({ theme }) => ({
		border: `1px solid ${theme.palette.divider}`,
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			display: 'none',
		},
	}));

	const AccordionSummary = styled((props: AccordionSummaryProps) => (
		<MuiAccordionSummary
			expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
			{...props}
		/>
	))(({ theme }) => ({
		backgroundColor:
			theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
		flexDirection: 'row-reverse',
		'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
			transform: 'rotate(90deg)',
		},
		'& .MuiAccordionSummary-content': {
			marginLeft: theme.spacing(1),
		},
	}));

	const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
		padding: theme.spacing(2),
		borderTop: '1px solid rgba(0, 0, 0, .125)',
	}));

	/* Design Controls */
	// sets the color of the FAQ containers, chnages here get reflected to all
	const { darkModeOn } = useContext<AppProps>(Context);

	const PodColor: string = darkModeOn ? '#2c3639 !important' : '#344966 !important';
	const subTextColor: string = darkModeOn ? '#fab700 !important' : '#fab700 !important';
	const textColor: string = darkModeOn ? '#22A39F !important' : 'white !important';
	const expBgColor: string = darkModeOn ? '#1E2022 !important' : '#5F6F94 !important';

	const podDisplayWidth: number = 1;
	const podWidth: string = '25%';

	const accordianColor: string = darkModeOn ? '#2c3639 !important' : '#344966 !important';

	const [expanded, setExpanded] = React.useState<string | false>('panel1');

	const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<Accordion
			expanded={expanded === `panel${id}`}
			onChange={handleChange(`panel${id}`)}
			sx={{
				bgcolor: PodColor,
				marginBottom: 2,
				borderRadius: '10px !important',
				width: podDisplayWidth,
			}}
		>
			<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
				<Typography
					sx={{
						width: podWidth,
						flexShrink: 0,
						color: textColor,
						fontSize: 24,
						fontWeight: 'bold',
					}}
				>
					{`Pod ${id}`}
				</Typography>
				<Typography
					sx={{
						color: subTextColor,
						fontSize: 18,
						fontWeight: 'bold',
					}}
				>
					{info.Name}
				</Typography>
			</AccordionSummary>

			<AccordionDetails sx={{ bgcolor: expBgColor }}>
				<Typography>Namespace: {info.Namespace}</Typography>

				<Typography>Name: {info.Name}</Typography>

				<Typography>CPU Requests: {info.CPU_Requests}</Typography>

				<Typography>CPU Limits: {info.CPU_Limits}</Typography>

				<Typography>Memory Requests: {info.Memory_Requests}</Typography>

				<Typography>Memory Limits: {info.Memory_Limits}</Typography>

				<Typography>Age: {info.Age}</Typography>
			</AccordionDetails>
		</Accordion>
	);
}

export default Pod2;
