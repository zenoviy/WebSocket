const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();

const app = express();

const hbs = exphbs.create({extname: ".handlebars",
        layoutsDir: "./views/layouts",
        defaultLayout: "main.handlebars",
        partialsDir: "./views/partials"
    });
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');
    app.use(express.static("public"))

console.log(process.env.MY_VALUE)

module.exports.appConfig = {
    mode: 'development',
    appSettings: {
        port: 3000,
        host: this.mode === 'development'? "localhost" : "prodserver",
    },
    app: app,
    router: router
}