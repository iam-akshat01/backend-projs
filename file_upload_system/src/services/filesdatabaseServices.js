const {files} = require("../db/schema");

const createFileRecord = async (fileData) =>{
    try{
        const newFile = await files.create(fileData);
        return newFile;
    }
    catch(err){
        throw new Error("Error creating file record: " + err.message);
    }
}

module.exports = {
    createFileRecord
}