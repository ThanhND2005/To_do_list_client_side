
import 'dotenv/config'
import cloudinary from 'cloudinary'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

cloudinary.v2.config({
  cloud_name: 'dhylrhxsa',
  api_key : process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

const storage = new CloudinaryStorage({
  cloudinary : cloudinary.v2,
  params : {
      folder: 'Todolist',
      allowed_formats: ['jpg','png','jpeg'],

  } as any
})

export const upload = multer({storage});
