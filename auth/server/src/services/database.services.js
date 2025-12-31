const User = require('../models/user');

// find user by email or username
const findUser = async (email, username) => {
    try {
        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (!existingUser) {
            return null;
        }

        if (existingUser.email === email) {
            const err = new Error("EMAIL_ALREADY_EXISTS");
            err.code = "EMAIL_CONFLICT";
            throw err;
        }

        if (existingUser.username === username) {
            const err = new Error("USERNAME_ALREADY_EXISTS");
            err.code = "USERNAME_CONFLICT";
            throw err;
        }

        return null;

    } catch (err) {
        throw err;
    }
};

// create user


module.exports = { findUser };
