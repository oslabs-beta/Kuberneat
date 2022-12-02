const child_process = require('child_process');
//created middleware called middleware
const middleware: Object = {};

//applying getClusterInfo method
(middleware as any).getClusterInfo = async (req: any, res: any, next: any) => {
	try {
		//declared a function
		function system(cmd: string, callback: any) {
			//Handle the terminal output
			child_process.exec(
				cmd,
				//function created to handle errors
				function (error: string, stdout: any, stderr: any) {
					//You should handle error or pass it to the callback
					callback(stdout);
				}
			);
		}

		//resource components that exist in each node
		system('kubectl describe nodes', function (output: string) {
			//splitting the output into an array
			let arr = output.split('\n');
			//declaring an array index variable to iterate through the array
			let firstIndex;
			let lastIndex;
			//declare a variable to store the wanted output lines (node info)
			const newArr: any = [];
			//declared an object to store the specific information of the node from
			//within the  cluster
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
			console.log('middleware: ', res.locals.clusterInfo);
			// console.log('Your cluster info: ', obj)
			return next();
		});
		//console.log('from middleware', res.locals.clusterInfo);
	} catch (err) {
		console.log(err);
		return next(err);
	}
};

//exporting middleware object to be used globally
module.exports = middleware;
