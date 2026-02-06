const express = require('express');
const router = express.Router();

const { generalRateLimiter } = require('../middlewares/ratelimiter.middleware');
const validsignup = require('../middlewares/signup.zod.valid.middleware');

const { signupController } = require('../controllers/signup.controller');
const { verifyOtpController } = require('../controllers/verifyotp.controller');


router.use(generalRateLimiter);


router.post('/signup', validsignup, signupController);


router.post('/signup/verifyotp', verifyOtpController);

module.exports = router;
