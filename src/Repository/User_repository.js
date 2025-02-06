const { where } = require("sequelize");
const { User } = require("../models/index");

class Userrepository {
    CreateUser = async (data) => {
        try {
            const user = await User.create(data)
            return user;
        } catch (error) {
            console.log("something is wrong in repository layer");
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
            console.log("something is wrong in repository layer");
            throw error

        }
    }
}

module.exports = Userrepository

