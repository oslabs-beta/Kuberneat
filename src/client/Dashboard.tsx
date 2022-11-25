import * as React from 'react';
import { useState, useEffect } from 'react';
import iframe from 'react-iframe';

export const Dashboard: React.FC = () => {
  const [dashboard, setDash] = useState();
  //on mount (useEffect), dashboard is created
  useEffect(() => {
    fetch('/dashboard')
      .then((res) => res.json())
      .then((data) => {
        setDash(data)

        console.log('from dashboard component', data)
      })
  })
	return (
		<div>
			<h1>dashboard test</h1>
      <div>
      <iframe src="http://localhost:3000/d-solo/QUjLkudVz/zeus?orgId=1&from=1669417480490&to=1669418380490&panelId=2" width="450" height="200" frameBorder="0"></iframe>
      </div>
  
		</div>
	);
};