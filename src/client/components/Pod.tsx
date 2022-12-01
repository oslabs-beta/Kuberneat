import { useState, useEffect } from 'react';
import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
const k8sPod = require('./Kubernetes_Pod.jpg');

const Pod = ({ info, nodeNum }: { info: any, nodeNum: any }): JSX.Element => {
	console.log('nodeNum', nodeNum)
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
		<div id={`pod#${nodeNum}`}>
			<img src={"https://banner2.cleanpng.com/20180329/qjq/kisspng-google-cloud-platform-google-compute-engine-kubern-container-5abc828e10c6a8.2707130315223036300687.jpg"} id={`pod#${nodeNum}_image`} width="35" height="35">

			</img>
			<Typography
				aria-owns={open ? 'mouse-over-popover' : undefined}
				aria-haspopup="true"
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
			>
				<div id={`pod#${nodeNum}_text`}>
				{info.Name}
				</div>
				
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
					<div>
						<ul>
							<li>CPU Requests: {info.CPU_Requests} </li>
							<li>CPU Limits: {info.CPU_Limits} </li>
							<li>Memory Requests: {info.Memory_Requests}</li>
							<li>Memory Limits: {info.Memory_Limits}</li>
							<li>Age: {info.Age}</li>
						</ul>
					</div>
					
				</Typography>
			</Popover>
		</div>
	);
};

export default Pod;
