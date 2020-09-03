const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.sendFile(__dirname+"/index.html");
    
})

app.post("/", function(req, res){
    //console.log(req);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("The result is "+result);
})

app.get("/bmicalculator", function(request, response){
    response.sendFile(__dirname+"/bmiCalc.html");
    
})


app.post("/bmicalculator", function(req, res){
    //console.log(req);
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = ((weight)/(height*height));
    res.send("The result is "+result);
})


app.listen(3000, function(){
    console.log("Server started on port 3000.... ");
});