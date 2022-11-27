import * as React from 'react';
import { useState, useEffect } from 'react';
import iframe from 'react-iframe';

export const Dashboard: React.FC = () => {
	return (
		<div>
      <div>
      <iframe src="http://localhost:3001/d/bSUQyqO4z/zeus-monitoring-dashboard?orgId=1&from=1669532063263&to=1669533863263&viewPanel=2" width="1000" height="500" frameBorder="0"></iframe>
      </div>
		</div>
	);
};