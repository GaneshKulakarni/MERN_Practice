import { name } from 'ejs';
import express from 'express'
const app = express();
app.set('view engine',"ejs")
app.set("views","views")
app.listen(8080,()=>{console.log("server is running on the port 8080")})


const users =[
    {name:"ganesh",email:"ganesh123@gmail.com",password:"232434"},
    {name:"suresh",email:"suresh343@gmail.com",password:"736203"},
    {name:"sai reddy",email:"saireddy565@gmail.com",password:"847362"}
]

app.get('/login',(req,res)=>{
    res.render("login")
})
app.get('/register',(req,res)=>{
    res.render("Register")
})

app.get('/',(req,res)=>{
    res.render("Dashboard")
})