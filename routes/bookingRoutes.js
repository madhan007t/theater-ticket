const express=require('express')
const router=express.Router();
const bookinController=require('../Controllers/bookingControllers');


router.post('/book',bookinController.bookingTicket);
router.post('/list',bookinController.listBooking);
router.post('/cancel',bookinController.cancelTicket);

module.exports=router;