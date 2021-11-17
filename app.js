//IMPORTACIONES
const express = require("express")
const app =express()
require("dotenv").config()

//MIDDLEWARES
app.use(express.static("public"))
app.set("views", __dirname + "/views")

//RUTAS-- creacion de rutas

app.get("/index.html", (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})
app.get("/about.html", (req, res)=>{
    res.sendFile(__dirname+"/views/about.html")
})
app.get("/works.html", (req, res)=>{
    res.sendFile(__dirname+"/views/works.html")
})

app.get("/gallery.html", (req, res)=>{
    res.sendFile(__dirname+"/views/gallery.html")
})

//ACTIVAR SERVIDOR
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor activado. Puerto:${process.env.PORT} `)
})