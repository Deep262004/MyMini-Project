const mongoose = require('mongoose');   

const url = "mongodb+srv://Deep262004:Aditya@cluster0.ixejx.mongodb.net/developerblogs?retryWrites=true&w=majority&appName=Cluster0";

//asynchronous function - returns Promise
mongoose.connect(url)
      .then((result) => { 
            console.log('database connected');
      })
      .catch((err) => {
            console.log(err);
      });

      module.exports=mongoose