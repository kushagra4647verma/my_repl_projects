const express=require("express")
const app=express();
const jwt=require("jsonwebtoken")
const cors=require("cors")



app.use(express.json());
app.use(cors())
const key="THEKEY"
users=[]

function auth(req,res,next){
    const token=req.headers.token;
    try{
        const user=jwt.verify(token,key);
        req.user=user;
        next();
    }catch(err){
        res.json({
            message:"Not logged in!"
        })
    }
}
app.post("/signup",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    users.push({
        username: username,
        password: password
    })
    res.json({
        msg:"Signed Up!"
    })
})

app.post("/signin",(req,res)=>{
    let name=req.body.username;
    let passwd=req.body.password;

    let user=users.find(u=>u.username==name);
    if(user){
        if(user.password==passwd){
            const token=jwt.sign(user,key);
            res.send({
                token: token
            })
        }else{
            res.send("Invalid password!!!")
        }
    }else{
        res.status(402).json({
            message: "User not found!"
        })
    }
})

app.get("/me",auth,(req,res)=>{
    const user=req.user;
    res.send({
        message: `Hello!${user.username}`
    }) 
})

app.listen(3000);