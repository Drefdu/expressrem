const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json())

//importante
app.use(
    cors({
      origin: "http://localhost:8100",
    })
);

app.get('/', function(req, res) {
    res.send({Autora:"Autora: Daniela Karina Ruiz Hernández"});
});

app.post('/', function(req, res) {
    res.send(req.body);
});

const server = app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000");
});

