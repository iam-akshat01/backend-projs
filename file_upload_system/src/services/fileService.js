const filedatabaseservices =require("../services/filesdatabaseServices");

const fileUpload = async(fileData) =>{
    try{
        const createdFile = await filedatabaseservices.createFileRecord(fileData);
        return createdFile;
    }
    catch(err){
        console.error("File upload error:", err);
        throw new Error("File upload failed");
    }
}

module.exports = {
    fileUpload
}