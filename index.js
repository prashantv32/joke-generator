
const express = require("express");
const axios = require("axios")

const app = express();
const port = 3000;



app.use(express.static("public"))

app.set("view engine","ejs")
   

app.get("/",(req,res)=>{
    res.render("index.ejs",{ joke : null})
})

app.get("/joke",async (req,res)=>{
    try{
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
        const data = response.data
        res.render("index.ejs",{joke: data})

    }catch(error){
        res.render("error.ejs",{error : error.message})

    }
})

app.listen(port,()=>{console.log(`Server is listening on ${port}`)});