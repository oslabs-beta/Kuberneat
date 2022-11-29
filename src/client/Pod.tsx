import { useState, useEffect } from 'react';
import React from 'react';

const Pod = ({ info }: { info: any }): JSX.Element => {
	// modal on click for the pod
	// render circle figure to show visually as the pod

	return (
		<div>
			{info.Namespace}
			{info.Name}
			{info.Memory_Limits}
			{info.Memory_Requests}
			{info.CPI_Limits}
			{info.CPI_Requests}
			{info.Age}
		</div>
	);
};

export default Pod;
