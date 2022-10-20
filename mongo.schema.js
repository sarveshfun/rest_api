const mongoose = require("mongoose") ;


const movie_Scheam = new mongoose.Schema({
     name:{
         type:String,
         required: true
     } ,
     img:{
         type:String,
         require:true
     } ,
     summary:{
         type:String ,
         require:true
     }
})


module.exports =mongoose.model('movie',movie_Scheam)