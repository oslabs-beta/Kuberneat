import * as React from 'react';
import { useState, useEffect } from 'react';
import iframe from 'react-iframe';

export const Dashboard: React.FC = () => {
  // const [dashboard, setDash] = useState();
  // //on mount (useEffect), dashboard is created
  // useEffect(() => {
  //   fetch('/dashboard')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDash(data)

  //       console.log('from dashboard component', data)
  //     })
  // })
	return (
		<div>
			<h1>dashboard test</h1>
      <div>
      <iframe src="http://localhost/:3000/d-solo/Fe0ihuOVk/new-dashboard?orgId=1&from=1669422186192&to=1669423086192&theme=dark&panelId=2" width="450" height="200" frameBorder="0"></iframe>
      </div>
  
		</div>
	);
};