const mongoose=require('mongoose');

const userTemplets=new mongoose.Schema(
{
  username:
  {
     type:String,
     required:true,
  },
  password:
  {
     type:String,
     required:true,
  },

})

module.exports=mongoose.model('User',userTemplets);