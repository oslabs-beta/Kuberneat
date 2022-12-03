const User = require('../database/db');

//User object middleware 
const userController = {
  //create User 
  createUser(req: Request, res: Response, next: any){ 
    //check if the if the user does not exist 
    
      //use mongo method to create user 
      //invoke next 
    //error handing
  },
  getUser(req: Request, res: Response, next: any){
    //if user does not exist 
      //throw error 

  },
  updateUser(req: Request, res: Response, next: any){

  },

  deleteUser(req: Request, res: Response, next: any) {

  }, 
}

module.exports = userController;