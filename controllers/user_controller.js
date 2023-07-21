const visitor = require("../db/user"); 

const homepage=async(req,res)=>{
    res.status(200).render('index.hbs');
}
const about=async(req,res)=>{
    res.status(200).render('about.hbs');
}
const gallery=async(req,res)=>{
    res.status(200).render('gallery.hbs');
}
const contact=async(req,res)=>{
    res.status(200).render('contact.hbs');
}
const usermessage=async(req,res)=>{
    var myData=new visitor(req.body)
        await myData.save().then(()=>{
           res.render('index.hbs'); 
        }).catch((e)=>{
            console.log(e);
        res.status(400).send("Item was not saved to the database");
         });
    }

module.exports={homepage,contact,gallery,about,usermessage};