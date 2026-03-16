const multer = require("multer");
const fileHelpers = require("../utils/fileHelpers");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = fileHelpers.getUserUploadPath(req.user);
        cb(null, uploadPath);
    },

    filename: (req, file, cb) => {
        const filename = fileHelpers.randomFileName(file.originalname);
        cb(null, filename);
    }
});

const upload = multer({ storage });

const uploadMiddleware = upload.single("file");

module.exports = uploadMiddleware;