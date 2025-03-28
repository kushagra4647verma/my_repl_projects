const express=require("express")
const app=express();

users=[
    {
        name:'andy',
        kidneys: [
            {healthy: false},
            {healthy: true}
        ]
    }
]
app.use(express.json())
app.get('/',function(req,res){
    let patient=users[0].kidneys;
    let count=0;
    for(let i=0;i<patient.length;i++){
        if(patient[i].healthy==true){
            count+=1;
        }
    } 
    let n=users[0].kidneys.length;
    res.send(`${users[0].name}, You have ${n} kidneys and ${count} of them are healthy`);
})

app.delete('/',function(req,res){
    let patient=users[0].kidneys;
    for (let i = patient.length - 1; i >= 0; i--) {  
        if (!patient[i].healthy) {  
            patient.splice(i, 1); 
        }
    }
    res.send("Deleted bad kidneys!");
})

app.put('/',function(req,res){
    let pkidney=users[0].kidneys;
    for(let i=0;i<pkidney.length;i++){
        if(pkidney[i].healthy==false){
            pkidney[i].healthy=true;
        }
    }
    res.send("Maqsad complete!")
})

app.post('/',function(req,res){
    let status=req.body.status;
    let patient=users[0].kidneys;
    patient.push({healthy:status});
    res.send(`${users[0].name}, You have ${users[0].kidneys.length} kidneys now!`);
})

app.listen(3000);