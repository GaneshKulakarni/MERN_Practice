import express from 'express'
const app = express();
app.set('view engine',"ejs")
app.set("views","views")
app.listen(8080,()=>{console.log("server is running on the port 8080")})

app.get('/login',(req,res)=>{
    res.render("login")
})
app.get('/register',(req,res)=>{
    res.render("Register")
})