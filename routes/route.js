 const express = require('express');
 const router = express.Router();
 const Personnel = require('../models/personnels');

// retrieving details
 router.get('/personnels',(req,res,next)=>{
    Personnel.find(function(err,personnels){
         res.json(personnels);
     });
 });

// add details
router.post('/personnels',(req,res,next)=>{
    //code  add details
    let newPersonnel = new Personnel({
     first_name: req.body.first_name,
     last_name: req.body.last_name,
     bio: req.body.bio,
     primary_skill: req.body.primary_skill
    });
    newPersonnel.save((err,personnel)=>{
        if(err)
        {
            res.json({msg: 'Failed to add Personnel'});
        }
        else
        {
            res.json({msg: 'Personnel added successfully'});
        }
    })
});

// update details
router.put('/personnels/:id',(req,res,next)=>{
    //code  update details
    
});

// delete details
router.delete('/personnels/:id',(req,res,next)=>{
    //code  delete details
    Personnel.remove({_id: req.params.id}, function(err,result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })
});
 module.exports = router;