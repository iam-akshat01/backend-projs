// otp generation stuff
const otpgenerator = require("otp-generator");

const otp = () => ({
    otp: otpgenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false }),
});

module.exports = { otp };