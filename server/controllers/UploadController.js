import cloudinary from "../utils/cloudinary.js";
import fs from "fs";

export const uploadController = async (req, res) => {
  res.send("Image uploaded successfully");
  console.log(req.file);
  const image = await cloudinary.uploader.upload(
    req.file.path,
    {
      folder: "Icecream",
    },
    (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result);
    }
  );
  fs.unlink(req.file.path, (err) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log("File deleted successfully");
    }
  });
}

