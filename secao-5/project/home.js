const express = require("express");
const app = express();
// const bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json())


// app.use(express.urlencoded({ extended: true}))
app.use(express.urlencoded());


app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.get("/home", (req, res) => {
  res.render("home");
   
});

// app.post("/perguntar", (req, res) => {
//   var titulo = req.body.titulo;
//   var descricao = req.body.descricao;
  
// 	res.send("Formulário recebido titulo " + titulo + " " + "descricao " + descricao);
// });



app.listen(3000, () => {
        console.log("App rodando!");
});