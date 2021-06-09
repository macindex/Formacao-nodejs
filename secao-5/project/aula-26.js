const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.send("bem vindo ao meu site")
  //res.render("index")
  var nome = "claudio holanda";
  var lang = "javascript";
  var exibirMsg = true;

  var produtos =    [
	{
		nome: "roda", preco: 200
	},
	{
		nome: "rolamentos", preco: 180
	},
	{
		nome: "shape", preco: 400
	}
]

  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Guia do programador",
    salario: 8000,
    msg: exibirMsg,
    produtos: produtos 
  });
});

  app.listen(3000, () => {
    console.log("App rodando!");
  });

