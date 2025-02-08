const {Userrepository} = require("../Repository/index");
const jwt = require('jsonwebtoken')
const {jwt_key} = require("../config/Server_config");
// const { request } = require("express");
const bcrypt = require('bcrypt');
// const { use } = require("../Routes");


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
     
    async signin(email , planepassword){
              try {
                // first fetch our email
                const user = await this.userrepository.getemail(email);

                // second is check password
                const password = this.comaprepassword(planepassword, user.password)

                if(!password){
                    console.log("password does not  match");
                    throw  { error : " incorrect password"}
                }
                // asign jwt tokem

                const jwt =  this.createToken({email: user.email , id: user.id})
                return jwt;
              } catch (error) {
                console.log("something is wrong in signin  layer", error);
                throw error
                }
    }

    async isAuthenticated(token) {
        try {
            const response = this.Verifytoken(token);
            if(!response) {
                throw {error: 'Invalid token'}
            }
            const user = await this.userrepository.getbyid(response.id);
            if(!user) {
                throw {error: 'No user with the corresponding token exists'};
            }
            return user.id;
        } catch (error) {
            console.log("Something went wrong in the auth process");
            throw error;
        }
    }

    async isAdmin(userid){
        try {
            const response = await this.userrepository.isAdmin(userid)
            return response
        } catch (error) {
            console.log("Something went wrong in the find admin process");
            throw error;
        }

    }
     
    createToken(user) {
        try {
            const result = jwt.sign(user, jwt_key, {expiresIn: '1d'});
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }



     Verifytoken(token){
        try {
            const result = jwt.verify(token, jwt_key);
            return result;
        } catch (error) {
            console.log("something is wrong in verify token", error);
            throw error
        }
     }



     //  we compare a password when user login password in write or not
     comaprepassword(userplanepassword, encryptedpassword){
        try {
            return bcrypt.compareSync(userplanepassword ,encryptedpassword )
        } catch (error) {
            console.log("something is wrong in compare password", error);
            throw error
        }
     }
}

module.exports = UserServices;