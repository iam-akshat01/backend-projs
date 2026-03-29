const fileDatabaseServices = require("./filesdatabaseServices");
const fs = require("fs");

const fileUpload = async (fileData) => {
  try {
    const createdFile =
      await fileDatabaseServices.createFileRecord(fileData);

    return createdFile;

  } catch (err) {
    if (fs.existsSync(fileData.path)) {
      fs.unlinkSync(fileData.path);
    }

    console.error("File upload error:", err);
    throw new Error("File upload failed");
  }
};

const getFiles = async (userId , userRole) =>{
    try{
        if(userRole === "admin"){
            const files = await fileDatabaseServices.selectAllFiles(); 
            return files;
        }
        else{
            const files = await fileDatabaseServices.selectFilesByUserId(userId);
            return files;
        }
    }
    catch(err){
        throw new Error("Error fetching files: " + err.message);
    }
}

module.exports = {
  fileUpload,
  getFiles,
};