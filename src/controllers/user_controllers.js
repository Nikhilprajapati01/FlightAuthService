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
                 massage: "something went wrong in signin user",
                 success: false,
                 err: error
             })
}
}


isAuthanticated = async (req, res)=>{
    try {
       const response = await userservices.isAuthenticated(req.headers['x-access-token'])
        res.status(201).json({
            success: true,
            data: response,
            massage: "user authentication is valid",
            err: {}
        })
    }
     catch (error) {
             console.log("something is wrong in authanticates layer", error);
             res.status(500).json({
                massage: "user authentication is not  valid",
                 success: false,
                 err: error
             })
}
}

isAdmin = async (req , res)=>{
    try {
        const response = await userservices.isAdmin(req.body.userid)
         res.status(201).json({
             success: true,
             data: response,
             massage: "Admin is valid",
             err: {}
         })
     }
      catch (error) {
              console.log("something is wrong in admin layer", error);
              res.status(500).json({
                 massage: "admin  is not valid",
                  success: false,
                  err: error
              })
}
}

module.exports = {
    Create,
    SignIn,
    isAuthanticated,
    isAdmin
}