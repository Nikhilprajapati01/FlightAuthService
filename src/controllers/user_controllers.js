// const { sign } = require("jsonwebtoken");
const  UserServices  = require("../Services/user_service.js");

const userservices = new UserServices();


Create = async (req, res) => {
    try {
        const response = await userservices.createuser({
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json({
            success: true,
            data: response,
            massage: "ok", 
            err: {}
        })
    }
     catch (error) {
             console.log("something is wrong in control layer", error);
             res.status(500).json({
                 massage: "something went wrong",
                 success: false,
                 err: error
             })
}
}


 SignIn = async (req, res) => {
    try {
        const response = await userservices.signin(
            req.body.email,
             req.body.password
        );
        res.status(201).json({
            success: true,
            data: response,
            massage: "ok",
            err: {}
        })
    }
     catch (error) {
             console.log("something is wrong in control layer", error);
             res.status(500).json({
                 massage: "something went wrong",
                 success: false,
                 err: error
             })
}
}

module.exports = {
    Create,
    SignIn
}