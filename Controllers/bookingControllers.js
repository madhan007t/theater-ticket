const Booking=require('../models/booking');



const bookingTicket=async (req,res)=>
{
     try
     {
       const {ticketid,name,mobileNo,numTickets}=req.body;

       const existingBooking= await Booking.findOne({ticketid});
       if(existingBooking)
       {
        return res.status(400).json({message:'Ticket ID is already exists'});
       }

       const newBooking= new Booking({
          ticketid,
          name,
          mobileNo,
          numTickets
       });

       await newBooking.save();
       res.status(202).json({message:'Ticket Booking Is Successfully',booking:newBooking});

     }catch(error){
          console.error(error);
          res.status(500).json({message:'Server Error'});
     }
};

const listBooking=async(req,res)=>{
     try{
          const booking=await Booking.find();
          res.status(200).json(booking);
     }catch (error){
          console.error(error);
          res.status(500).json({message:"Server Error"});
     }}



const cancelTicket = async (req, res) => {
  try {
    const { ticketid } = req.body; 

    const booking = await Booking.findOneAndDelete({ ticketid }); 
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Ticket canceled successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { cancelTicket };


module.exports={bookingTicket,listBooking,cancelTicket};