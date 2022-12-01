import { useState, useEffect } from 'react';
import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const Pod = ({ info }: { info: any }): JSX.Element => {
	// popover
	const [anchorEl, setAnchorEl] = React.useState(null);
	// popover open
	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	// popover close
	const handlePopoverClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);

	//React.ChangeEvent<HTMLInputElement>
	// const openModal = (e: any) => {
	// 	// determining where to place modal
	// 	const top = e.pageY;
	// 	const left = e.pageX;
	// 	modalDetail = (
	// 		<ul className="modalList">
	// 			<li className="modalDetail">CPU Requests: {info.CPU_Requests}</li>
	// 			<li className="modalDetail">CPU Limits: {info.CPU_Limits}</li>
	// 			<li className="modalDetail">Memory Requests: {info.Memory_Requests}</li>
	// 			<li className="modalDetail">Memory Limits: {info.Memory_Limits}</li>
	// 			<li className="modalDetail">Age: {info.Age}</li>
	// 		</ul>
	// 	);
	// };
	return (
		<div>
			<Typography
				aria-owns={open ? 'mouse-over-popover' : undefined}
				aria-haspopup="true"
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
			>
				{info.Name}
			</Typography>
			<Popover
				id="mouse-over-popover"
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
					CPU Requests: {info.CPU_Requests}
					CPU Limits: {info.CPU_Limits}
					Memory Requests: {info.Memory_Requests}
					Memory Limits: {info.Memory_Limits}
					Age: {info.Age}
				</Typography>
			</Popover>
		</div>
	);
};

export default Pod;
