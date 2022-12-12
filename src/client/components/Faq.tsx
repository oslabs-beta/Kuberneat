import { Box } from '@mui/material';
import Header from './Header';
// can refer to MUI docs for Accordian
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React, { useContext } from 'react';
import { Context } from '../Context';

import { AppProps } from '../interfaces';
import { ReactNode, ReactElement } from 'react';

function FAQ(): ReactElement {
	
	const { darkModeOn } = useContext<AppProps>(Context);

	const accordianColor: string = darkModeOn ? '#2c3639 !important' : '#344966 !important';
	const textColor: string = darkModeOn ? '#22A39F !important' : 'white !important';
	// sets the color of the FAQ containers, chnages here get reflected to all

	return (
		<div role='faq' className={darkModeOn ? 'faq-dark' : 'faq-light'}>
			<Box m='20px'>
				{/* Header passing down props for title and subtitle */}
				<Header 
					path='/faq'
					title='FAQ' 
					subtitle='Frequently Asked Questions Page' 
				/>

				{/* Can replace placeholder questions with real ones later */}
				<Accordion
					defaultExpanded={false}
					sx={{ bgcolor: accordianColor, borderRadius: '10px !important', marginBottom: '10px' }}
				>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h5' color={textColor}>
							What is Zeus?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Zeus is an intuitive and interactive visualiztion tool for monitoring a Kubernetes
							cluster.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion
					defaultExpanded={false}
					sx={{ bgcolor: accordianColor, borderRadius: '10px !important', marginBottom: '10px' }}
				>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h5' color={textColor}>
							What is Kubernetes used for?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Kubernetes make it easier to manage applciations. They automate operational tasks of
							container management and include built-in commands for deploying applications, rolling
							out changes to your applications, scaling your applications up and down to fit
							evolving needs, monitoring your applications, and more.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion
					defaultExpanded={false}
					sx={{ bgcolor: accordianColor, borderRadius: '10px !important', marginBottom: '10px' }}
				>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h5' color={textColor}>
							How many users can Zeus have?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>There is no limit.</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion
					defaultExpanded={false}
					sx={{ bgcolor: accordianColor, borderRadius: '10px !important', marginBottom: '10px' }}
				>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h5' color={textColor}>
							Can there be more than 1 administrator?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Yes, there is no limit unless the administrator chooses to set a limit manually.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion
					defaultExpanded={false}
					sx={{ bgcolor: accordianColor, borderRadius: '10px !important', marginBottom: '10px' }}
				>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h5' color={textColor}>
							What's next for Zeus?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Zeus is an open source platform and welcomes collaboraton from the developer
							community.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Box>
		</div>
	);
}

export default FAQ;
