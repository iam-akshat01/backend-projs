const checkIdentifier = require("../utils/identifiercheck.utils");
const databaseServices = require("../services/database.services");

const loginservice = async (identifier) => {
    const isEmail = checkIdentifier(identifier);

    // 1. Fetch user
    const user = isEmail
        ? await databaseServices.checkbyMail(identifier)
        : await databaseServices.checkbyUsername(identifier);

    // 2. Check verification
    if (!user.isVerified) {
        const err = new Error("USER_NOT_VERIFIED");
        err.code = "USER_NOT_VERIFIED";
        throw err;
    }

    // 3. Return user for next steps (password/JWT later)
    return user;
};

module.exports = loginservice;
