const express =  require("express");
let app = express();
app.set("view engine","ejs");

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/login", function(req,res){
    res.render("login");
});

app.listen(3000, function(req,res){
    console.log("Server is ready");
});
