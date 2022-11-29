var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const child_process = require('child_process');
const middleware = {};
// // import dashboard from '../../grafana/provisioning/dashboards/dashboard.json';
middleware.getClusterInfo = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        function system(cmd, callback) {
            child_process.exec(cmd, function (error, stdout, stderr) {
                //You should handle error or pass it to the callback
                callback(stdout);
            });
        }
        system('kubectl describe nodes', function (output) {
            console.log(output);
            res.locals.clusterInfo = output;
        });
        //console.log('from middleware', res.locals.clusterInfo);
        next();
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
// (middleware as any).postDashboard = async (req: any, res: any, next: any) => {};
module.exports = middleware;
