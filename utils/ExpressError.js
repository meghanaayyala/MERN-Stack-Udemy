class ExpressError extends Error {

    constructor(message, statusCode) {
        super(message); // Call the parent constructor with the message
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; //
        //this.isOperational = true;

        //Error.captureStackTrace(this, this.constructor);
    }
}
module.exports = ExpressError;