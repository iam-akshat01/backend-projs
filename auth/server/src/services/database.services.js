const User = require('../models/user');
const hashUtilities = require('../utils/hashpassword.utils');

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
const createUser = async (email, username, password) => {
    const hash = await hashUtilities.hashPassword(password);

    const newUser = new User({
        email,
        username,
        password: hash,
        isVerified: false
    });

    await newUser.save();
    return newUser;
};

module.exports = { findUser, createUser };
