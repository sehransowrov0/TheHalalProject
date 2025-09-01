import mongoose from "mongoose";
import { envConfig } from "./dotenv.config.ts";

const MONGO_URI = envConfig.mongo_uri

async function connectDb() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("✅ Successfully connected to Mongo DB");
  }
  catch (err) {
    console.error("❌ Unable to connect with Mongo DB : ", err)
    process.exit(1)
  }
}

export default connectDb
