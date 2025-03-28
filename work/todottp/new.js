const express=require("express")
const app=express();


// function checkAge(age){
//     if(age>=18)  return true;
//     else return false;
// }

function middlewareChheck(req,res,next){
    const age=req.query.age;
    if(age>=18) next();
    else{
        res.status(410).json({
            msg:"Not enough age!"
        })
    }
}

app.get('/ride1',middlewareChheck,function(req,res){
    res.json({
        msg: "Ride 1 successfull!!"
    })
})

app.get('/ride2',middlewareChheck,function(req,res){
    res.json({
        msg: "Ride 2 successfull!!"
    })
})

app.listen(3000);