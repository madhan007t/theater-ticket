const User=require('../models/user');

const login=async(req,res)=>
{
  const {username,password}=req.body;
  try
  {
     const user= await User.findOne({username});
     if(!user)
     {
          return res.status(404).json({error:'User not Founded'});
     }
     if(user.password!==password)
     {
          return res.status(401).json({error:'Incorrect Password'});
     }
          return res.status(200).json({message:'Login successfully'});
  }catch(error)
  {
    console.error('Error login in user',error);
    return res.status(500).json({error:'Internal error'});
  }
};

// new regestration

const signup=async(req,res)=>
{
  const {username,password}=req.body;
  try
  {
     const oldUser= await User.findOne({username});
     if(oldUser)
     {
          return res.status(404).json({error:'User name already existis'});
     }
     // create new user
    const newUser= new User({username,password});  
    // and save user data
     await newUser.save();
     res.status(201).json({message:'regestration is successfully',user:newUser});
}catch(error)
{
 console.error("Error Regeration User",error);
 res.status(500).json({error:'Internal error'})    
}
};
module.exports={login,signup};