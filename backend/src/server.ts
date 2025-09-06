// server.ts

import app from './app.ts'
import dotenv from "dotenv";
import connectDb from "./config/connectDb.config.ts";

dotenv.config();
await connectDb();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
});

