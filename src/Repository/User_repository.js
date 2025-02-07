const { where } = require("sequelize");
const { User } = require("../models/index");

class Userrepository {
    CreateUser = async (data) => {
        try {
            const user = await User.create(data)
            return user;
        } catch (error) {
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
}

module.exports = Userrepository

