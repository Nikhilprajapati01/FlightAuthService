const  UserServices  = require("../Services/user_service.js");

const userservices = new UserServices();


Create = async (req, res) => {
    try {
        const response = await userservices.createuser({
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json({
            data: response,
            massage: "ok",
            success: true,
            err: {}
        })
    }
     catch (error) {
             console.log("something is wrong in control layer", error);
             res.status(500).jsom({
                 massage: "something went wrong",
                 success: false,
                 err: error
             })
}
}

module.exports = {
    Create
}