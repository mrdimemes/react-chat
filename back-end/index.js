import 'dotenv/config';
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors())

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Listening PORT ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}
start();