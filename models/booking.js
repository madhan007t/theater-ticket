const mongoose=require('mongoose');

const bookingTemplets= new mongoose.Schema(
{

     ticketid:
     {
          type:Number,
          required:true,
     },
     name:
     {
          type:String,
          required:true,
     },
     mobileNo:
     {
          type:Number,
          required:true,
     },
     numTickets:
     {
          type:Number,
          required:true
     },
});

module.exports=mongoose.model('Booking',bookingTemplets);