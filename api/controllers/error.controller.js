exports.globalErrorHandled = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const code = err.code || "Unknow Error"
    res.status(statusCode).json({ success: false, code, statusCode, message })

}