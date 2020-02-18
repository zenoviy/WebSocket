module.exports.test = (request, response, next) => {
    response.status(200).send("Test page");
}