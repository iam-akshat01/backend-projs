const checkIdentifier = require("../utils/identifiercheck.utils");
const databaseServices = require("../services/database.services");

const loginservice = async (identifier, password) => {
  //to find whether identifier is username or password
  const emailidentifier = checkIdentifier(identifier);
  const checkuserVerified = false;
  if (emailidentifier) {
    try {
      const user = await databaseServices.checkbyMail(identifier);
      if (user) {
        if (!user.isVerified) {
          const err = new Error("USER_NOT_VERIFIED");
          err.code = "USER_NOT_VERIFIED";
          throw err;
        } else {
          checkuserVerified = true;
        }
      }
    } catch (err) {
      throw err;
    }
  } else {
    try {
        const user = await databaseServices.checkbyUsername(identifier);
        if(user){
            if (!user.isVerified) {
            const err = new Error("USER_NOT_VERIFIED");
            err.code = "USER_NOT_VERIFIED";
            throw err;
        }
        else{
            checkuserVerified = true;
        }
        }
    } catch (err) {
      throw err;
    }
  }
};

module.exports = loginservice;
