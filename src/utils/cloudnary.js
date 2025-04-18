import {v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

    const uploadoncloud=async(localfilepath)=>{
        try{
            if(!localfilepath) return null
 const responces=await cloudinary.uploader.upload(localfilepath,{
                resource_typr:"auto"
            })
            console.log("file uploaded successfully",responces.url);
            return responces;

        }catch(err){
            fs.unlinkSync(localfilepath) 
            return null;
             //remove the file from local storage
            
        }
    }

    export {uploadoncloud}