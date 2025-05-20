module.exports = func => {
    return (req, res, next) => {
        // Call the function and pass in the request, response, and next middleware function
        // If the function returns a promise, catch any errors that occur during the execution
        // and pass them to the next middleware function
        // This is useful for handling errors in asynchronous code, such as when using async/await
        // or when working with promises.
        func(req, res, next).catch(next);
    };
}