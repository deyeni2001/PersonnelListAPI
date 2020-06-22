 const mongoose = require('mongoose');


 const PersonnelSchema = mongoose.Schema({
     first_name:{
         type: String,
         required: true
     },
     last_name:{
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: true
    },
    primary_skill:{
        type: String,
        required: true
    }


 });

 const Personnel = module.exports = mongoose.model('Personnel',PersonnelSchema);