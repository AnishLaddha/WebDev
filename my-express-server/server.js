const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello!</h1>")
})

app.get("/contact", function(request, response){
    response.send("hmu at anishladdha03@gmail.com")
})

app.get("/about", function(request, response){
    response.send("im anish")
})


app.listen(3000, function(){
    console.log("Server started on port 3000.... ");
});