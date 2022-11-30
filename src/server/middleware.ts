// import { arrayBuffer } from "stream/consumers";

const child_process = require('child_process');
const middleware: Object = {};
// // import dashboard from '../../grafana/provisioning/dashboards/dashboard.json';

(middleware as any).getClusterInfo = async (req: any, res: any, next: any) => {
	try {
		function system(cmd: string, callback: any) {
			child_process.exec(
				cmd,
				function (error: string, stdout: any, stderr: any) {
					//You should handle error or pass it to the callback
					callback(stdout);
				}
			);
		}

		system('kubectl describe nodes', function (output: string) {
			let arr = output.split('\n');
			let firstIndex;
			let lastIndex;
			const newArr: any = [];
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
			// populate our object

			for (let i = 2; i < newArr.length; i++) {
				obj.Namespace.push(newArr[i][1]);
				obj.Name.push(newArr[i][2]);
				obj.CPU_Requests.push(newArr[i][3].concat(newArr[i][4]));
				obj.CPU_Limits.push(newArr[i][5].concat(newArr[i][6]));
				obj.Memory_Requests.push(newArr[i][7].concat(newArr[i][8]));
				obj.Memory_Limits.push(newArr[i][9].concat(newArr[i][10]));
				obj.Age.push(newArr[i][11]);
			}
			res.locals.clusterInfo = obj;
			// console.log('middleware: ', res.locals.clusterInfo)
			// console.log('Your cluster info: ', obj)
			return next();
		});
		//console.log('from middleware', res.locals.clusterInfo);
	} catch (err) {
		console.log(err);
		return next(err);
	}
};

// (middleware as any).postDashboard = async (req: any, res: any, next: any) => {};

module.exports = middleware;
