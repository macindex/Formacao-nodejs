const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.send("bem vindo ao meu site")
  //res.render("index")
  var nome = "claudio holanda";
  var lang = "javascript";
  var exibirMsg = true;

  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Guia do programador",
    salario: 8000,
    msg: exibirMsg,
  });
});

  app.listen(3000, () => {
    console.log("App rodando!");
  });

