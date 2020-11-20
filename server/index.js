const config = require("./config.js");
const express = require("express");
const WebSocket = require('ws');
const path = require("path");

const clientWorker = require('./controllers/routes/clientWorker');


const app = express();
const wss = new WebSocket.Server({
    port: "8000"
})


//   Websocket
wss.brodcast = function(data, clientValidator = () => true ){
    this.clients.forEach(client => {
        if(clientValidator(client)){
            client.send(data);
        }
    })
}
wss.on("connection", ws => {
    ws.on('message', message => {
        wss.brodcast(message, client => client !== ws);
    })
})


// REST API Routing
app.use(express.static(path.join(__dirname + '/public')));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.post("/api/regiter-new-user", clientWorker.registerNewUser)


// Serve
app.listen(config.__PORT, (err) => {
    console.log(`app runing at port ${config.__PORT}`)
    if(err) console.log(err)
})

module.exports = app;