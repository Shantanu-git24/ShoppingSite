const User = require('../models/user');

exports.create_User = async (req,res)=>{

   try {
    const{firstname,lastname,phone,email} = req.body;

    let newUser = new User({
        firstname,lastname,phone,email,
    })

  newUser = await newUser.save();

  res.json(newUser);
  
   } catch (e) {
    res.status(500).json({error:e.message});
   }
};