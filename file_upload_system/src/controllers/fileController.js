const fileService = require("../services/fileService");

const uploadFile = async(req, res) =>{
    try{
        const fileData = {
            userId: req.user.id,
            originalName: req.file.originalname,
            storedName: req.file.filename,
            path: req.file.path,
            size: req.file.size,
            mimeType: req.file.mimetype
        }
        const createdFile = await fileService.fileUpload(fileData);
        return res.status(201).json({ message: "File uploaded successfully", file: createdFile });
    }
    catch(err){
        console.error("File upload error:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}