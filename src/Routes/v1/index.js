const express = require('express');

const router = express.Router();

const Usercontroller = require("../../controllers/user_controllers");
const {AuthRequestValidater} = require("../../Middleware/index")

router.post('/Signup',
    AuthRequestValidater.validateauth,
    Usercontroller.Create);


router.post('/Signin',
    AuthRequestValidater.validateauth,
    Usercontroller.SignIn);


router.get('/isAuthenticated',
    AuthRequestValidater.isAdminvadidation,
    Usercontroller.isAuthanticated);

router.get('/isAdmin',
    Usercontroller.isAdmin);


module.exports = router;

