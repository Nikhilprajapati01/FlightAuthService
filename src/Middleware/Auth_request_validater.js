const validateauth = (req , res , next) => {
    if(!req.body.email || !req.body.password){
        return res.status(404).json({
            succes: "false",
            massage: " something went wrong",
            data: {},
            err: "email and password is missing"
        })
    }
    next();
    }
const isAdminvadidation = (req , res , next) => {
    if(!req.body.userid){
        return res.status(404).json({
            succes: "false",
            massage: " something went wrong",
            data: {},
            err: "email and password is missing"
        })
    }
    next();
    }
    
    module.exports = {
        validateauth,
        isAdminvadidation
    }