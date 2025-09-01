// server.ts
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

const app = express();
app.use(express.json());
app.use(cors());

// connect database
await connectDb();

/**
 * Register route
 */
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required ❌" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists ❌" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(200).json({ message: "Registered successfully ✅" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * Login route
 */
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required ❌" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password ❌" });
    }

    // compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password ❌" });
    }

    // generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" } // expires in 1 hour
    );

    res.status(200).json({
      message: "Login successful ✅",
      token,
      user: { id: user._id, email: user.email },
  });
} catch (err: any) {
  res.status(400).json({ message: err.message });
}
});



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

import crypto from "crypto";
import nodemailer from "nodemailer";



const otpStore = new Map<string, string>(); // store OTP temporarily

// nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Step 1: Request OTP
app.post("/request-otp", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists ❌" });
    }

    // generate 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    otpStore.set(email, otp);

    // send OTP email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
    });

    setTimeout(() => otpStore.delete(email), 5 * 60 * 1000); // expire OTP in 5 min

    res.status(200).json({ message: "OTP sent to email ✅" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Step 2: Verify OTP and register
app.post("/verify-otp", async (req, res) => {
  try {
    const { email, password, otp } = req.body;

    if (!otpStore.has(email) || otpStore.get(email) !== otp) {
      return res.status(400).json({ message: "Invalid or expired OTP ❌" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    otpStore.delete(email); // remove OTP after successful registration

    res.status(200).json({ message: "Registered successfully ✅" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
});

