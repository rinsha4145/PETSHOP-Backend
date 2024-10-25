const tryCatch = (func) => async (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (error) {
        console.error(error); // Logging the error
        next(error);
    }
};

module.exports = tryCatch;
