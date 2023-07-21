require('dotenv').config();
require("./db/conn") //require mongoose db

const express=require('express');
const path= require("path");
const app=express();
const fs= require("fs");
const hbs= require("hbs");
const port =process.env.PORT || 3000;
const user_routes = require("./routes/user_routes.js")


//setting path
const templatepath=path.join(__dirname,"/templates/views")
const partialpath=path.join(__dirname,'/templates/partials')

console.log(templatepath)
//EXPRESS specific stuff

app.use('/static',express.static('static'))//serving static files
app.use(express.urlencoded());  

//Setting view engine
app.set('view engine','hbs');
app.set('views',templatepath);//set the views directory
hbs.registerPartials(partialpath);




// set routes
app.use("/",user_routes);

//Start the server
app.listen(port,()=>{
    console.log(`This application started succesfully on port ${port}`)
}) 