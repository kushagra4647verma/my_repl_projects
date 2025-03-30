const express=require("express");
const app=express();
const cors=require("cors")

app.use(cors());
app.use(express.json());


function middleman(req,res,next){
    const timestamp = new Date().toISOString()
    console.log({
        "Method: ":req.method,
        "time: ":timestamp,
        "url": req.url
    })
    next();
}

app.post("/add",middleman,function(req,res){
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);
    res.json({
        ans:a+b
    })
})

app.listen(3000);