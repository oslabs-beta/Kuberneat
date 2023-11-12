import { PodcastsSharp } from '@mui/icons-material';
import express, { Request, Response, NextFunction } from 'express';
const child_process = require('child_process');
//created middleware called middleware
const middleware: Object = {};

// applying getClusterInfo method
(middleware as any).getClusterInfo = async (req: any, res: any, next: NextFunction) => {
	try {
		// declared a function
		function system(cmd: string, callback: any) {
			// Handle the terminal output
			child_process.exec(
				cmd,
				// function created to handle errors
				function (error: string, stdout: any, stderr: any) {
					// You should handle error or pass it to the callback
					callback(stdout);
				}
			);
		}

		system('kubectl describe nodes', function (output: string) {
			// splitting the output into an array
			let arr = output.split('\n');
			// declaring an array index variable to iterate through the array
			let firstIndex = 0;
			let lastIndex = 0;
			// declare a variable to store the wanted output lines (node info)
			const newArr: any = [];
			// declared an object to store the specific information of the node from
			// within the  cluster
			const obj: any = {
				Namespace: [],
				Name: [],
				CPU_Requests: [],
				CPU_Limits: [],
				Memory_Requests: [],
				Memory_Limits: [],
				Age: [],
			};
			// filter through command line string by searching for the range of lines that we need, starting at namespace, and ending at allocated resources
			for (let i = 0; i < arr.length; i++) {
				if (arr[i].includes('Namespace')) firstIndex = i;
				if (arr[i].includes('Allocated resources')) lastIndex = i;
			}
			// pushes the lines that we need
			for (let i = firstIndex; i < lastIndex; i++) {
				newArr.push(arr[i]);
			}
			// separate array elements by spaces, gets rid of all spaces
			for (let i = 0; i < newArr.length; i++) {
				newArr[i] = newArr[i].split(/[ ,]+/);
			}
			// populate our object to send to fetch req in frontend
			for (let i = 2; i < newArr.length; i++) {
				obj.Namespace.push(newArr[i][1].replace(/\./g, ''));
				obj.Name.push(newArr[i][2].replace(/\./g, ''));
				obj.CPU_Requests.push(newArr[i][3].concat(' ' + newArr[i][4]));
				obj.CPU_Limits.push(newArr[i][5].concat(' ' + newArr[i][6]));
				obj.Memory_Requests.push(newArr[i][7].concat(' ' + newArr[i][8]));
				obj.Memory_Limits.push(newArr[i][9].concat(' ' + newArr[i][10]));
				obj.Age.push(newArr[i][11]);
			}
			// store our cluster info in res.locals object
			res.locals.clusterInfo = obj;
			console.log('Successful ClusterInfo from middleware');
			return next();
		});
	} catch (err) {
		console.log(err);
		return next(err);
	}
};

//fetching health metrics from terminal
(middleware as any).getHealth = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const health = (cmd: string, callback: any) => {
			child_process.exec(cmd, (err: ErrorCallback, stdout: any, stderr: any) => {
				callback(stdout);
			});
		};
		//health of each node can be found by this command line
		health('kubectl get componentstatuses', (output: string) => {

			//splitting the output into an array and filtering out the empty spaces
			let terminal = output.split(' ').filter(element => element !== '');

			//declaring an object to store the health metrics
			const healthObject: any = {}

			//filtering out the components from CLI (NAME, STATUS, MESSAGE, ERROR)
			healthObject['outputKind'] = terminal.slice(0,3);

	   //obtaining the rest of the string from terminal 
			terminal = terminal.slice(3,terminal.length);

			//getting pods
			const getPods = terminal.filter(element => (element !== 'ok' && element !== 'Healthy' && element !== 'Unhealthy')).filter(element => !element.includes('{'));
			healthObject['PODS'] = getPods;

			//get health status get 'Healthy' or 'Unhealthy'
			const getHealth = terminal.filter(element => (element === 'Healthy' || element === 'Unhealthy'));
			healthObject['STATUS'] = getHealth;

			//getting message get 'ok' or 'down'
			let getMessage = terminal.filter(element => element === 'ok' || element === 'down');
			healthObject['MESSAGE'] = getMessage;

			if (healthObject['MESSAGE'] === undefined) {
				healthObject['MESSAGE'] = 'N/A';
			}

			//getting error
			if (healthObject['ERROR'] === undefined) {
				healthObject['ERROR'] = 'N/A';
			}

			//putting all info into an array
			const arrayOfInfo: Array<string> = Object.values(healthObject);

			//declaring an array to store the working pods
			const workingPods: Array<any> = [];

			//iterating through the array of info and pushing the working pods into the workingPods array
			for (let i = 0; i < arrayOfInfo.length; i++) {
				if (arrayOfInfo[0][i] === undefined) continue;
				const Pod = arrayOfInfo[1][i];
				const Status = arrayOfInfo[2][i];
				const Message = (arrayOfInfo[3][i]) ? arrayOfInfo[3][i] : 'N/A';
				const error = arrayOfInfo[4];
				workingPods.push({Pod, Status, Message, error});
				}
				res.locals.health = workingPods;
				return next();

				});
	} catch (err) {
		next({
			log: 'error',
			message: `Error getting health middleware ${err}`,
		});
	}
};

//exporting middleware object to be used globally
module.exports = middleware;
