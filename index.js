const express = require("express");
const app = express();
app.use(express.json())

//importante

app.get('/', function(req, res) {
    res.send("<h1>Autora: Daniela Karina Ruiz Hernández</h1>");
});

app.post('/', function(req, res) {
    res.send(req.body);
});

const server = app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000");
});
