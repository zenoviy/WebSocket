module.exports.homePage = (req, res, next) => {
    res.render('home',{title: "Test",
        article: "Lorem ipsum dolor",
        customScripts: ["/js/quiz.js"],
    });
    res.status(200);
}