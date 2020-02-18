
process.env.MY_VALUE = "tested";
const cors = require("cors");
const bodyParser = require('body-parser');

const appMethods = require('./business/app methods');
const appRenderEngine = require('./business/render engine')
const {quizServices, pages} = require('./models/serv methods');

const app = appRenderEngine.appConfig.app;
const router = appRenderEngine.appConfig.router;

const jsonParser = bodyParser.json();


app.get("/", cors(), pages.home)
app.get("/info", cors(), pages.info)
app.get("/test", pages.test)

app.route("/api/quiz")
    .get(quizServices.get)
    .post(cors(), jsonParser, quizServices.post)

app.get("/error", (request, response) => {
     response.status(404).send("NotFound");
});


module.exports.app = app;
app.listen(appRenderEngine.appConfig.appSettings.port, () => {
    console.log(`app is litnening port ${appRenderEngine.appConfig.appSettings.port}`)
})