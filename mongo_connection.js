

const mongoose = require('mongoose');
 mongoose.connection.once("open",()=>{
   console.log("mongo")
 })


 mongoose.connection.on("error",()=>{
   console.log(err)
 })

 
async function mongoose_start(){
 await mongoose.connect('mongodb+srv://sarveshdb:123@bigdata.d1fhpiz.mongodb.net/harry?retryWrites=true&w=majority'

 )
  


}
module.exports = mongoose_start





















    






