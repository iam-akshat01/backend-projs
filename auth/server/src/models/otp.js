const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
    
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
    otp:{
        type: Number,
        required: true
    }
    ,

    expiresAt: {
        type: Date,
        required: true
    }
})

const OTP = mongoose.model('OTP', OTPSchema);
module.exports = OTP;