const sendingMail = require('../utils/mails.utils');
const otpCreation = require('../utils/otp.utils');

const mailSend = async (email) => {
    const otp = otpCreation.createOtp();  // CALL the function
    // you will use sendingMail later
    return otp;
};
