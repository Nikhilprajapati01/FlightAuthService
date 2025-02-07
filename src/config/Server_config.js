const dotenv = require("dotenv");
const bcrypt = require('bcrypt');

dotenv.config();
module.exports = {
    Port: process.env.PORT,
    SALT:bcrypt.genSaltSync(9)
}