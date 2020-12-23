const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
      title : {
          type : String,
          required : true,
          minlenght : 4,
          maxlenght : 150
      },
      body : {
        type : String,
        required : true,
        minlenght : 4,
        maxlenght : 2000
      }
},  {
           timestamps:true    
    });

    module.exports = mongoose.model('Note',noteSchema); 
