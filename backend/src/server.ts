// server.ts

import {app} from './app.ts'
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDb from "./config/connectDb.config.ts";
import User from "./models/user.model.ts";
import crypto from "crypto";
import nodemailer from "nodemailer";

dotenv.config();


await connectDb();


// Middleware to verify JWT
function authMiddleware(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Unauthorized ❌" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded; // attach decoded token to req
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token ❌" });
  }
}


// Protected /profile route
app.get("/profile", authMiddleware, async (req: any, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // exclude password
    if (!user) return res.status(404).json({ message: "User not found ❌" });

    res.status(200).json({ user });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
});

