import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET 
});

const uploadCloudinary = async (localFilePath:any) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });

    console.log("File has been uploaded", cloudinaryResponse);
    fs.unlinkSync(localFilePath)
    // Return the Cloudinary response if needed
    return cloudinaryResponse;
  } catch (error) {
    // Remove the file from the server if the file is not uploaded to Cloudinary
    fs.unlinkSync(localFilePath);
    console.error("Error uploading file to Cloudinary:", error);
    return null;
  }
};


const deleteOnCloudinary = async (public_id:any) => {
    try {
      const deleteResponse = await cloudinary.uploader.destroy(public_id);
      console.log("File has been deleted from Cloudinary", deleteResponse);
      return deleteResponse;
    } catch (error) {
      console.error("Error deleting file from Cloudinary:", error);
      return null;
    }
  };



export { uploadCloudinary, deleteOnCloudinary };
