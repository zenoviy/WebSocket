const express = require("express");
const WebSocket = require('ws');
const __PORT = 3100;

const app = express();
const wss = new WebSocket.Server({
    port: "8000"
})



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

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
})
app.get("/blog", (req, res) => {
    res.send("<h1>Blog</h1>")
})


app.listen(__PORT, () => {
    console.log(`app runing at port ${__PORT}`)
})