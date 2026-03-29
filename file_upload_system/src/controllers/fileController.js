const fileService = require("../services/fileService");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const fileData = {
      userId: req.user.id,
      originalName: req.file.originalname,
      storedName: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      mimeType: req.file.mimetype,
    };

    const createdFile = await fileService.fileUpload(fileData);

    return res.status(201).json({
      message: "File uploaded successfully",
      file: createdFile,
    });
  } catch (err) {
    console.error("File upload error:", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getFiles = async (req, res) => {
  const userId = req.user.id;
  const userRole = req.user.role;

  try {
    const userFiles = await fileService.getFiles(userId, userRole);

    return res.status(200).json({
      message: "Files fetched successfully",
      files: userFiles,
    });
  } catch (err) {
    console.error("Error fetching files:", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { uploadFile, getFiles };