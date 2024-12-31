import express from "express";
import { uploadImage } from "../middlewares/multer.middleware.js";
import { uploadController } from "../controllers/UploadController.js";

const router = express.Router();

router.post("/upload", uploadImage.single("file"), uploadController)

export const UploadRoute = router;