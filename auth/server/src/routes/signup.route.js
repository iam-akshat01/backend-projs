const express = require('express');
const router= express.Router();

const {validsignup }= require('../middlewares/valisignup.middleware');
const { signupController } = require('../controllers/signup.controller');