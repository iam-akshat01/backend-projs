const OTP = require('../models/otp');

const storeOTP = async(userId,otpObj) =>{
    const otp=otpObj.otp;
    const newOTP= new OTP({
        userId,
        otp
    })
    await newOTP.save(); 
    return newOTP;
};

module.exports= storeOTP;