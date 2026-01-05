const express = require('express');
const router= express.Router();

const {validsignup }= require('../middlewares/valisignup.middleware');
const { signupController } = require('../controllers/signup.controller');

router.post('/signup',validsignup, signupController);
router.post('/signup/verifyotp',signupController);  //new route made

module.exports=router;