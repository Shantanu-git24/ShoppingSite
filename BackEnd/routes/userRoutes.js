const express= require('express');

const router = express.Router();

const userController =  require('../controllers/userController');

router.post('/users',userController.create_User);

module.exports=router;