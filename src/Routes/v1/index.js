const express = require('express');

const router = express.Router();

const Usercontroller = require("../../controllers/user_controllers");

router.post('/Signup',Usercontroller.Create);


module.exports = router;

