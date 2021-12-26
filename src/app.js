const express =require("express");
const path = require("path")
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("hbs");


const public_path= path.join(__dirname,"../public")
app.use(express.static(public_path));

const dynamicpath = path.join(__dirname,"../templates/views")

app.set("view engine","hbs");
app.set("views",dynamicpath);


const partialspath = path.join(__dirname,"../templates/partial")
hbs.registerPartials(partialspath);


app.get("/",(req,res)=>{
    res.render("index");
})




app.get("/about",(req,res)=>{
    res.render("about");
})


app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("/*",(req,res)=>{
    res.render("404Eorrs");
})


app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})