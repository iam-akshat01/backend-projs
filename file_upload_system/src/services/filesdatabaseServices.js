const { db } = require("../db");
const { files } = require("../db/schema");
const { eq, desc } = require("drizzle-orm");

const createFileRecord = async (fileData) => {
  try {
    const result = await db.insert(files).values(fileData).returning();
    return result[0];
  } catch (err) {
    throw new Error("Error creating file record: " + err.message);
  }
};

const selectAllFiles = async () => {
  try {
    return await db
      .select()
      .from(files)
      .orderBy(desc(files.createdAt));
  } catch (err) {
    throw new Error("Error fetching all files: " + err.message);
  }
};

const selectFilesByUserId = async (userId) => {
  try {
    return await db
      .select()
      .from(files)
      .where(eq(files.userId, userId))
      .orderBy(desc(files.createdAt));
  } catch (err) {
    throw new Error("Error fetching files by userId: " + err.message);
  }
};

const selectFileById = async (fileId) =>{
  try{
    const file = await db
      .select()
      .from(files)
      .where(eq(files.id, fileId))
      .limit(1);

    return file[0] || null;

  }
  catch(err){
    throw new Error("Error fetching file :"+ err.message);
  }
}

const deleteFileById = async (fileId) => {
  try {
    await db.delete(files).where(eq(files.id, fileId));
  } catch (err) {
    throw new Error("Error deleting file: " + err.message);
  }
};

module.exports = {
  createFileRecord,
  selectAllFiles,
  selectFilesByUserId,
  selectFileById,
  deleteFileById,
};