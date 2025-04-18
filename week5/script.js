const express=require("express")
const app=express();

app.use(express.json());
const cors = require("cors");
app.use(cors());


app.post("/add",function(req,res){
    let a=parseInt(req.body.a);
    let b=parseInt(req.body.b);
    res.json({
        ans: a+b
    })
})

app.post("/sub",function(req,res){
    let a=parseInt(req.body.a);
    let b=parseInt(req.body.b);
    res.json({
        ans: a-b
    })
})

app.post("/mul",function(req,res){
    let a=parseInt(req.body.a);
    let b=parseInt(req.body.b);
    res.json({
        ans: a*b
    })
})

app.post("/div",function(req,res){
    let a=parseInt(req.body.a);
    let b=parseInt(req.body.b);
    res.json({
        ans: a/b
    })
})

app.listen(3000);