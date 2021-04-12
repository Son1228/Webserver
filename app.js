var express = require("express");
var app = express();

var server = require("http").createServer(app);
server.listen(3000);

app.get("/", function(req, res){
    res.send("<font color=blue>03November</font>");
    //res.sendFile(__dirname + "/index.html");
});

app.get("/gioithieu.aspx", function(req, res){
    //res.send("<font color=blue>HELLO WORLD</font>");
    //res.sendFile(__dirname + "/index.html");
    res.send("Son Nguyen");
});

app.get("/tinhtong/:so1/:so2", function(req, res){
    //res.send("<font color=blue>HELLO WORLD</font>");
    //res.sendFile(__dirname + "/index.html");
    var n = req.params.so1;
    n = parseInt(n);
    var m = req.params.so2;
    m = parseInt(m);
    var tong = n + m;
    res.send("<h1>" + tong + "</h1>");
});