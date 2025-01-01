import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB}  from "./DB/mongodb.js";
import {UploadRoute} from "./routes/UploadRoute.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "DELETE"],
    credentials: true,
  })
);

app.use("/", UploadRoute);
app.use("/auth", authRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is running on port 8000");
});
