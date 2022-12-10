import { useState, useEffect } from 'react';
import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const Pod = ({ info, nodeNum }) => {
	// Pod component for creating hovering popovers for the node names in the svg (D3 visualizer)

	// popover
	const [anchorEl, setAnchorEl] = React.useState(null);
	// popover open at event's location
	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};
	// popover close
	const handlePopoverClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const nodeName = document.querySelector(`.${info.Name}`);
	// listen for mouseover svg text
	nodeName.addEventListener('mouseover', function (event) {
		handlePopoverOpen(event);
	});
	// listen for mouse out of svg text
	nodeName.addEventListener('mouseout', function (event) {
		handlePopoverClose();
	});

	return (
		<div id={`pod${nodeNum}`} class='mouse-over-popover'>
			<Popover
				id='mouse-over-popover'
				sx={{
					pointerEvents: 'none',
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus
			>
				<Typography sx={{ p: 1 }}>
					<div className='pod-popOver'>
						<ul>
							<li id='popOver'>Name: {info.Name} </li>
							<li id='popOver'>CPU Requests: {info.CPU_Requests} </li>
							<li id='popOver'>CPU Limits: {info.CPU_Limits} </li>
							<li id='popOver'>Memory Requests: {info.Memory_Requests}</li>
							<li id='popOver'>Memory Limits: {info.Memory_Limits}</li>
							<li id='popOver'>Age: {info.Age}</li>
						</ul>
					</div>
				</Typography>
			</Popover>
		</div>
	);
};

export default Pod;
