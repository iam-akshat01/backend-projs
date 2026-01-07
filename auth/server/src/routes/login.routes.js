const express= require('express');
const router= express.Router();

const validateuserforlogin= require('../middlewares/login.zod.valid.middleware');
const logincontroller = require('../controllers/login.controller');

router.post('/login', validateuserforlogin, logincontroller);


module.exports= router;