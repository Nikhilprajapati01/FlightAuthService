const { StatusCodes } = require("http-status-codes");

class Apperror extends error {
    constructor(
        name = "AppError",
        StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR,
        massage = 'something went wrong',
        explanation = "something went wrong"
    ){
         super()
        this.name = name
        this.StatusCodes = StatusCodes
        this.massage = massage
        this.explanation = explanation

    }
}

module.exports = Apperror;