const express = require('express');
const Model = require('../models/blogModel') //using database connected

const router = express.Router();

router.post("/add", (req, res) => {

      console.log(req.body);
      
      new Model(req.body).save()    
      .then((result) => {
            res.status(200).json(result)
      }).catch((err) => {
            console.log(err);
            if(err?.code === 11000){
            res.status(500).json({message: 'Email already registered'});
            }else{
                  res.status(500).json({message: 'Internal server error'});
            }
      });    
});

router.get("/getall", (req, res) => {  // Get method is used to retrieve data or read data
      //res.send('response from user getall'); 
      Model.find()
      .then((result) => {
            res.status(200).json(result)
      }).catch((err) => {
            res.status(500).json(err); 
      });
});
 //  ':' denotes url parameter
 router.get('/getbycity/:city', (req,res) => {
      Model.find({city:req.params.city})
      .then((result) => {
            res.status(200).json(result)
      }).catch((err) => {
            res.status(500).json(err); 
      });
 })

router.get('/getbyid/:id', (req, res) => {
      //res.send('response from user getbyid');
      Model.findById(req.params.id)
      .then((result) => {
            res.status(200).json(result)
      }).catch((err) => {
            res.status(500).json(err); 
      });
      
});

router.delete("/delete/:id", (req, res) => {
      // res.send('response from user delete');
      Model.findByIdAndDelete(req.params.id)
      .then((result) => {
            res.status(200).json(result)
      }).catch((err) => {
            res.status(500).json(err); 
      });
});

router.put("/update/:id", (req, res) => {
      // res.send('response from user update');
      Model.findByIdAndUpdate(req.params.id, req.body,{new : true})
      .then((result) => {
            res.status(200).json(result)
      }).catch((err) => {
            res.status(500).json(err); 
      });
});


module.exports = router;
