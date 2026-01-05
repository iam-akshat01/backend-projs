const express = require('express');
const Userdatabase = require('../services/database.services');
const otpServices = require('../services/otp.service');
const otpdatabaseServices = require('../services/otpdatabase.service');


const signupController = async (req, res) => {
    // logic for a user signup
    const { email, username, password } = req.body;

    try {
        // exists or not
        await Userdatabase.findUser(email, username);
        const user=await Userdatabase.createUser(email, username, password);
        // otp validation (use email to send)
        const otpObj = await otpServices.sendMail(email);
        await otpdatabaseServices.storeOTP(user._id,otpObj);
        return res.status(201).json({
            message: "Signup flow can continue"
        });

    } catch (err) {
        if (err.code === "EMAIL_CONFLICT") {
            return res.status(409).json({
                message: "Email already registered. Try logging in instead."
            });
        }

        if (err.code === "USERNAME_CONFLICT") {
            return res.status(409).json({
                message: "Username already taken. Try another one."
            });
        }

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

module.exports = { signupController };
