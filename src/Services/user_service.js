const {Userrepository} = require("../Repository/index");

class UserServices {
    constructor(){
           this.userrepository = new Userrepository();
    }

    createuser = async (data)=>{
        try {
            const User = await this.userrepository.CreateUser(data);
            return User;
        } catch (error) {
            console.log("something is wrong in services layer");
                throw error
        }
    }


}

module.exports = UserServices;