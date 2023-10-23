const appErr = (meesage, statusCode) => {
    const error = new Error(meesage)
    error.statusCode
    error.status
    error.stack
    return error
}

module.exports = appErr