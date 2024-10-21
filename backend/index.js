const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.get('/todos', (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You have sent the wrong input"
        })
        return;
    }

    //mongodb logic
})

app.post('/todos', function(req, res){

})

app.put('/completed', function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You have sent the wrong input"
        })
        return;
    }
})

app.delete('/todos', function(req, res){

})

app.listen(3000);