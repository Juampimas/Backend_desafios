const express = require("express");
const app = express();
const Contenedor = require("./contenedor/Contenedor");
const contenedor = new Contenedor("./productos.txt")
const PORT = 8080;

app.get("/",(req,res) => {
    contenedor.getAll()
    .then(data=>res.send(data))
    .catch((err) => {res.send([])})
    
})

app.get("/productoRandom",(req,res) => {
    contenedor.getRandom()
    .then(data=>res.send(data))
    .catch((err) => {res.send([])})
})

const server = app.listen(PORT, () => {
    console.log(`Se está escuchando por el puerto ${PORT}`);
})

server.on("error", err => console.log(`Error en el servidor ${err}`));