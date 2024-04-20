const express=require('express');
const router=express.Router();
const authController=require('../Controllers/authControllers');

router.post('/login',authController.login);
router.post('/signup',authController.signup);

module.exports=router;