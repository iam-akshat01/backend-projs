const User = require("../models/user");

// find by email
const checkbyMail = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
        const err = new Error("USER_NOT_FOUND");
        err.code = "USER_NOT_FOUND";
        throw err;
    }
    return user;
};

// find by username
const checkbyUsername = async (username) => {
    const user = await User.findOne({ username });
    if (!user) {
        const err = new Error("USER_NOT_FOUND");
        err.code = "USER_NOT_FOUND";
        throw err;
    }
    return user;
};

// create user
const createUser = async (email, username, password) => {
    const user = new User({
        email,
        username,
        password,
        isVerified: false
    });

    await user.save();
    return user;
};

module.exports = {
    checkbyMail,
    checkbyUsername,
    createUser
};
