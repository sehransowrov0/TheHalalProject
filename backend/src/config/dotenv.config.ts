import dotenv from "dotenv";

dotenv.config();

interface envConfigType {
  port: string,
  mongo_uri: string
}

export const envConfig: envConfigType = {
  port: process.env.PORT!,
  mongo_uri: process.env.MONGO_URI!
}
