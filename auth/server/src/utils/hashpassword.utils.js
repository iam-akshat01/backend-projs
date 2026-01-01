const bcrypt = require('bcrypt');
require("dotenv").config();

// hash password
const hashPassword = async (password) => {
    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS);
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}

// compare hashes
// (you will implement this later)

module.exports = { hashPassword /*, compareHashes */ };
