const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
   
});

app.listen(3000, () => {
        console.log("App rodando!");
});