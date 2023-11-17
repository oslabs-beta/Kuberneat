"use client"
/*
* D3pod.tsx is a component that creates a popover for the node names in the svg
* (D3 visualizer)
*/
import React, { ReactEventHandler } from 'react';
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

interface Info {
	Name: string;
	CPU_Requests: string;
	CPU_Limits: string;
	Memory_Requests: string;
	Memory_Limits: string;
	Age: string;
}

interface Props {
	info: Info;
	nodeNum: number;
}

interface nodeName { 
	addEventListener: (event: string, handler: ReactEventHandler) => void | null;
}

const Pod = ({ info, nodeNum }: Props) => {
	// Pod component for creating hovering popovers for the node names in the svg (D3 visualizer)

	// popover
	const [anchorEl, setAnchorEl] = React.useState(null);
	// popover open at event's location
	const handlePopoverOpen = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	// popover close
	const handlePopoverClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const nodeName = document.querySelector(`.${info.Name}`);
	// listen for mouseover svg text
	(nodeName as nodeName).addEventListener('mouseover', function (event) {
		handlePopoverOpen(event);
	});
	// listen for mouse out of svg text
	(nodeName as nodeName).addEventListener('mouseout', function (event) {
		handlePopoverClose();
	});

	return (
		<div id={`pod${nodeNum}`} className='mouse-over-popover'>
			<Popover
				placement='right'
			>
				<PopoverTrigger>
					<Button>Pod info</Button>
				</PopoverTrigger>
				<PopoverContent>
				<div className='px-1 py-2'>
						<ul>
							<li id='popOver'>Name: {info.Name} </li>
							<li id='popOver'>CPU Requests: {info.CPU_Requests} </li>
							<li id='popOver'>CPU Limits: {info.CPU_Limits} </li>
							<li id='popOver'>Memory Requests: {info.Memory_Requests}</li>
							<li id='popOver'>Memory Limits: {info.Memory_Limits}</li>
							<li id='popOver'>Age: {info.Age}</li>
						</ul>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default Pod;
