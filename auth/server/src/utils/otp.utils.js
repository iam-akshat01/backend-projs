// otp generation stuff
const otpgenerator = require("otp-generator");

const createOtp = () => ({
    otp: otpgenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false }),
});

//verifyotp

module.exports = { createOtp };