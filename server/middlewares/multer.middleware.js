import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    console.log( "file is ",file);
    const random = uuidv4();
    cb(null, random+"_"+file.originalname);
  },
});


export const uploadImage = multer({storage: storage});