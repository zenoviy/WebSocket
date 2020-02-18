module.exports.info = (req, res, next) => {
    res.render('info', {
        title: "information",
        article: {
            title: "about quiz",
            body: "lorem ipsum QUIZ Express template"
        }
    })
}