const { where, HasOne } = require("sequelize");
const { User , Role } = require("../models/index");

class Userrepository {
    CreateUser = async (data) => {
        try {
            const user = await User.create(data)
            return user;
        } catch (error) {
            // console.log(error.errors);
            // if(error.name == SequelizeValidationError){

            // }
            
            console.log("something is wrong in repository layer",error);
            throw error

        }
    }

    async destroy(userid) {
        try {
            await User.destroy({
                where: {
                    id: userid
                }
            });
            return true;
        } catch (error) {
            console.log("something is wrong in repository layer for destroy", error);
            throw error

        }
    }

    async getbyid (userid){

        try {
            const user = await User.findByPk(userid, {
                attributes:['email' ,'id'] 
            }
        )
        return user;
        } catch (error) {
            console.log("something is wrong in repository layer for destroy", error);
            throw error
        }

    }
    async getemail (useremail){

        try {
            const user = await User.findOne({
                 where:{
                    email: useremail
                 }
            }
        )
        return user;
        } catch (error) {
            console.log("something is wrong in repository layer for getemail", error);
            throw error
        }

    }

     async isAdmin(userid){
        try {
            const user = await User.findByPk(userid);
            const role = await Role.findOne({
                where : {
                    name: "Admin"
                }
            });
            
            return user.hasRole(role);
            console.log(user);
        } catch (error) {
            console.log("something is wrong in repository layer for admin", error);
            throw error
        }

    }
}

module.exports = Userrepository

