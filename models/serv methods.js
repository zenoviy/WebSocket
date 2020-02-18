const getQuizData = require('./quiz services/get/get quiz');
const postQuizData = require('./quiz services/post/post quiz');

const homePage = require('./pages/home');
const infoPage = require('./pages/info');
const test = require('./pages/test');

module.exports.quizServices = {
    get: getQuizData.getQuiz,
    post: postQuizData.quizPost
}
module.exports.pages = {
    home: homePage.homePage,
    info: infoPage.info,
    test: test.test
}