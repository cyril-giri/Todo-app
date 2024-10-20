const express = require("express");
const app = express();

app.use(express.json());

app.get('/todos', (req, res)=>{
    res.send("hello world!")
})

app.post('/todos', function(req, res){

})

app.put('/completed', function(req, res){

})

app.delete('/todos', function(req, res){

})

app.listen(3000);