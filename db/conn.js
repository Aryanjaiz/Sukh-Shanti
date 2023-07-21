const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

URL=process.env.databaseurl;
mongoose.connect(URL).then(()=>{
    console.log('Connected to MongooseDB'); 
    
}).catch((e)=>{
    console.log(e);
});